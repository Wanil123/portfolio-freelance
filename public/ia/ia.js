/* ============================================================
   PrimeDev Studios — Landing page IA
   Consentement (Loi 25) + soumission du formulaire + suivi des conversions
   ============================================================

   Ce fichier gère DEUX outils de pub (tu peux n'en utiliser qu'un) :
     • Meta Pixel    → pour Facebook / Instagram Ads
     • Google Ads    → pour plus tard, si tu fais du Google

   ⚠️  AVANT DE LANCER TA PUB FACEBOOK : remplace META_PIXEL_ID ci-dessous.

   OÙ TROUVER TON PIXEL META :
   1. Va sur business.facebook.com  →  menu  →  "Gestionnaire d'événements"
   2. Clique "Connecter des sources de données"  →  "Web"  →  "Meta Pixel"
   3. Nomme-le "PrimeDev" et entre prime-dev-studios.com
   4. Meta te donne un IDENTIFIANT DE PIXEL — une suite de ~15 chiffres
   5. Colle ce numéro dans META_PIXEL_ID ci-dessous, sauvegarde le fichier.

   Tant que les valeurs ne sont pas remplacées, le site marche normalement,
   sans aucun suivi et sans erreur.
   ============================================================ */

(function () {
  "use strict";

  /* ----- À REMPLACER ----- */
  var META_PIXEL_ID    = "331337119865936";      // Facebook/Instagram — dataset « wanil »
  var GOOGLE_ADS_ID    = "AW-XXXXXXXXXX";        // (optionnel — Google Ads, pour plus tard)
  var CONVERSION_LABEL = "XXXXXXXXXXXXXXXXXX";   // (optionnel — Google Ads, pour plus tard)
  /* ----------------------- */

  var CONSENT_KEY = "pds-ads-consent";
  var metaReady = false;
  var googleReady = false;

  function metaConfigured()   { return META_PIXEL_ID.indexOf("X") === -1; }
  function googleConfigured() { return GOOGLE_ADS_ID.indexOf("X") === -1 && CONVERSION_LABEL.indexOf("X") === -1; }
  function anyConfigured()    { return metaConfigured() || googleConfigured(); }

  /* ---- Charge le Pixel Meta (après consentement) ---- */
  function loadMetaPixel() {
    if (metaReady || !metaConfigured()) return;
    metaReady = true;
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0";
      n.queue = []; t = b.createElement(e); t.async = !0; t.src = v;
      s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    window.fbq("init", META_PIXEL_ID);
    window.fbq("track", "PageView");
  }

  /* ---- Charge le tag Google Ads (après consentement) ---- */
  function loadGoogleAds() {
    if (googleReady || !googleConfigured()) return;
    googleReady = true;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GOOGLE_ADS_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", GOOGLE_ADS_ID);
  }

  function loadTracking() {
    loadMetaPixel();
    loadGoogleAds();
  }

  /* ---- ID d'événement unique (dédup Pixel <-> Conversions API, fenêtre 48 h) ---- */
  function genEventId() {
    try {
      if (window.crypto && crypto.randomUUID) return "lead_" + crypto.randomUUID();
    } catch (e) {}
    return "lead_" + Date.now() + "_" + Math.random().toString(36).slice(2, 10);
  }

  /* ---- Déclenche les conversions (selon ce qui est configuré + consenti) ----
     On envoie une "value" représentative pour que Meta optimise vers les leads de
     QUALITÉ (pas les moins chers), + un eventID pour la déduplication serveur (CAPI). */
  function fireConversion(eventId, user) {
    if (metaReady && typeof window.fbq === "function") {
      // Advanced Matching : on re-déclare le Pixel avec les coordonnées du lead.
      // Le Pixel normalise et HACHE ces données côté navigateur (jamais en clair).
      // -> meilleure qualité d'appariement (EMQ) = meilleure attribution / coût par lead.
      if (user && (user.em || user.ph)) {
        try { window.fbq("init", META_PIXEL_ID, user); } catch (e) {}
      }
      window.fbq("track", "Lead",
        { value: 1500, currency: "CAD", content_name: "Appel gratuit — Agent IA" },
        { eventID: eventId });
    }
    if (googleReady && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: GOOGLE_ADS_ID + "/" + CONVERSION_LABEL,
        value: 1500, currency: "CAD", transaction_id: eventId
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
      loadTracking();
    } else if (choice === "denied") {
      /* refusé → on ne charge rien */
    } else if (anyConfigured()) {
      banner.classList.add("show");
    }
    /* si aucun outil n'est configuré, la bannière ne s'affiche jamais */

    accept.addEventListener("click", function () {
      try { localStorage.setItem(CONSENT_KEY, "granted"); } catch (e) {}
      loadTracking();
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

  function setInvalid(fieldId, invalid) {
    var f = document.getElementById(fieldId);
    if (!f) return;
    f.classList.toggle("invalid", invalid);
    var input = f.querySelector("input, select, textarea");
    if (input) input.setAttribute("aria-invalid", invalid ? "true" : "false");
  }

  function validEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  /* Validation au fur et à mesure : on signale l'erreur quand l'utilisateur QUITTE
     le champ (blur), et on l'efface dès qu'il recommence à taper. UX moins frustrante. */
  function liveValidate() {
    var checks = [
      { wrap: "f-name", id: "lp-name", bad: function (v) { return v.trim().length < 2; } },
      { wrap: "f-phone", id: "lp-phone", bad: function (v) { return v.replace(/[^0-9+]/g, "").length < 10; } },
      { wrap: "f-email", id: "lp-email", bad: function (v) { return !validEmail(v.trim()); } }
    ];
    checks.forEach(function (c) {
      var el = document.getElementById(c.id);
      if (!el) return;
      el.addEventListener("blur", function () {
        if (el.value) setInvalid(c.wrap, c.bad(el.value));
      });
      el.addEventListener("input", function () {
        var wrap = document.getElementById(c.wrap);
        if (wrap && wrap.classList.contains("invalid")) setInvalid(c.wrap, false);
      });
    });
  }

  /* ---- Formulaire ---- */
  function setupForm() {
    var form    = document.getElementById("lp-form");
    var success = document.getElementById("lp-success");
    var submit  = document.getElementById("lp-submit");
    if (!form || !success || !submit) return;

    liveValidate();

    form.addEventListener("submit", function (e) {
      e.preventDefault();

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

      /* Même eventID côté navigateur (Pixel) et dans le lead (pour la CAPI serveur
         plus tard) -> Meta dédupliquera les 2 sources au lieu de compter en double. */
      var eventId = genEventId();

      /* Soumission via Netlify Forms (natif à l'hébergeur — pas de service tiers).
         Le formulaire est détecté grâce à data-netlify="true" + le champ caché
         form-name dans le HTML. On POST en urlencoded vers la racine du site. */
      var body = new URLSearchParams();
      body.append("form-name", "ia-lead");
      // Netlify honeypot: the form declares netlify-honeypot="_gotcha", so the
      // field must be in the POST body for Netlify's spam filter to work.
      body.append("_gotcha", honey ? honey.value : "");
      body.append("nom", name);
      body.append("telephone", phone);
      body.append("courriel", email);
      body.append("type_entreprise", document.getElementById("lp-type").value || "—");
      body.append("message", document.getElementById("lp-msg").value.trim() || "—");
      body.append("source", "Landing page /ia/ (publicité)");
      body.append("event_id", eventId);

      var controller = new AbortController();
      var timeout = setTimeout(function () { controller.abort(); }, 10000);

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
        signal: controller.signal
      })
        .then(function (res) {
          clearTimeout(timeout);
          if (!res.ok) throw new Error("HTTP " + res.status);
          form.style.display = "none";
          success.style.display = "block";
          try { success.scrollIntoView({ behavior: "smooth", block: "center" }); } catch (e) {}
          trackPlausible("LP IA - Lead");
          fireConversion(eventId, {
            em: email,
            ph: phone.replace(/[^0-9]/g, ""),
            fn: name.split(" ")[0]
          });
        })
        .catch(function () {
          clearTimeout(timeout);
          submit.disabled = false;
          submit.textContent = "Réessayer";
          alert("L'envoi a échoué. Réessayez, ou appelez-moi directement au +1 579-368-5230.");
        });
    });
  }

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
