/* ============================================================
   PrimeDev Studios — Landing page IA
   Consentement (Loi 25) + soumission du formulaire + conversion Google Ads
   ============================================================

   ⚠️  AVANT DE LANCER TA PUBLICITÉ : remplace les 2 valeurs ci-dessous
       par celles de TON compte Google Ads.

   OÙ LES TROUVER :
   1. Connecte-toi à Google Ads (ads.google.com)
   2. Menu : Objectifs → Conversions → bouton "+ Nouvelle action de conversion"
   3. Choisis "Site Web", entre prime-dev-studios.com
   4. Pour la méthode, choisis "Ajouter le tag manuellement / Google tag"
   5. Google t'affiche 2 choses :
        • un "ID de conversion"  → format  AW-1234567890
        • un "libellé de conversion" → suite de lettres et chiffres
   6. Colle l'ID dans GOOGLE_ADS_ID  et  le libellé dans CONVERSION_LABEL
   7. Sauvegarde ce fichier, et c'est tout — le suivi fonctionne.

   Tant que les valeurs ne sont pas remplacées, le site marche normalement,
   il n'y a simplement aucun suivi Google Ads (et aucune erreur).
   ============================================================ */

(function () {
  "use strict";

  var GOOGLE_ADS_ID    = "AW-XXXXXXXXXX";        // ⚠️  À REMPLACER
  var CONVERSION_LABEL = "XXXXXXXXXXXXXXXXXX";   // ⚠️  À REMPLACER

  var CONSENT_KEY = "pds-ads-consent";
  var adsReady = false;

  /* ---- Le tag Google Ads est-il configuré ? ---- */
  function adsConfigured() {
    return GOOGLE_ADS_ID.indexOf("X") === -1 && CONVERSION_LABEL.indexOf("X") === -1;
  }

  /* ---- Charge le tag Google seulement après consentement ---- */
  function loadGoogleAds() {
    if (adsReady || !adsConfigured()) return;
    adsReady = true;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GOOGLE_ADS_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", GOOGLE_ADS_ID);
  }

  /* ---- Déclenche la conversion Google Ads (si consentement + tag chargé) ---- */
  function fireGoogleConversion() {
    if (adsReady && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: GOOGLE_ADS_ID + "/" + CONVERSION_LABEL
      });
    }
  }

  /* ---- Bannière de consentement (Loi 25) ---- */
  function setupConsent() {
    var banner = document.getElementById("consent");
    var accept = document.getElementById("consent-accept");
    var refuse = document.getElementById("consent-refuse");
    if (!banner || !accept || !refuse) return;

    var choice = null;
    try { choice = localStorage.getItem(CONSENT_KEY); } catch (e) {}

    if (choice === "granted") {
      loadGoogleAds();                 // déjà accepté → on charge
    } else if (choice === "denied") {
      /* déjà refusé → on ne fait rien */
    } else if (adsConfigured()) {
      banner.classList.add("show");    // pas de choix encore → on demande
    }
    /* si le tag Ads n'est pas configuré, on n'affiche jamais la bannière */

    accept.addEventListener("click", function () {
      try { localStorage.setItem(CONSENT_KEY, "granted"); } catch (e) {}
      loadGoogleAds();
      banner.classList.remove("show");
    });
    refuse.addEventListener("click", function () {
      try { localStorage.setItem(CONSENT_KEY, "denied"); } catch (e) {}
      banner.classList.remove("show");
    });
  }

  /* ---- Suivi Plausible (sans cookie, aucun consentement requis) ---- */
  function trackPlausible(name) {
    try {
      if (typeof window.plausible === "function") window.plausible(name);
    } catch (e) {}
  }

  /* ---- Validation d'un champ ---- */
  function setInvalid(fieldId, invalid) {
    var f = document.getElementById(fieldId);
    if (f) f.classList.toggle("invalid", invalid);
  }

  function validEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  /* ---- Formulaire ---- */
  function setupForm() {
    var form    = document.getElementById("lp-form");
    var success = document.getElementById("lp-success");
    var submit  = document.getElementById("lp-submit");
    if (!form || !success || !submit) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      /* Honeypot anti-spam : si rempli, c'est un robot → on ignore en silence */
      var honey = form.querySelector('input[name="_gotcha"]');
      if (honey && honey.value) return;

      var name  = document.getElementById("lp-name").value.trim();
      var phone = document.getElementById("lp-phone").value.trim();
      var email = document.getElementById("lp-email").value.trim();

      var nameBad  = name.length < 2;
      var phoneBad = phone.replace(/[^0-9+]/g, "").length < 10;
      var emailBad = !validEmail(email);

      setInvalid("f-name", nameBad);
      setInvalid("f-phone", phoneBad);
      setInvalid("f-email", emailBad);
      if (nameBad || phoneBad || emailBad) return;

      submit.disabled = true;
      submit.textContent = "Envoi en cours…";

      var payload = {
        _subject: "[LANDING IA] " + name + " — " + (document.getElementById("lp-type").value || "Type non précisé"),
        _replyto: email,
        _template: "table",
        nom: name,
        telephone: phone,
        courriel: email,
        type_entreprise: document.getElementById("lp-type").value || "—",
        message: document.getElementById("lp-msg").value.trim() || "—",
        source: "Landing page /ia/ (Google Ads)",
        soumis_le: new Date().toISOString()
      };

      var controller = new AbortController();
      var timeout = setTimeout(function () { controller.abort(); }, 10000);

      fetch("https://formsubmit.co/ajax/info@prime-dev-studios.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal
      })
        .then(function (res) {
          clearTimeout(timeout);
          if (!res.ok) throw new Error("HTTP " + res.status);
          /* Succès : on affiche le message + on déclenche les conversions */
          form.style.display = "none";
          success.style.display = "block";
          trackPlausible("LP IA - Lead");
          fireGoogleConversion();
        })
        .catch(function () {
          clearTimeout(timeout);
          submit.disabled = false;
          submit.textContent = "Réessayer";
          alert("L'envoi a échoué. Réessayez, ou appelez-moi directement au +1 579-368-5230.");
        });
    });
  }

  /* ---- Init ---- */
  function init() {
    setupConsent();
    setupForm();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
