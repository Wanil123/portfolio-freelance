/* ============================================================
   PrimeDev Studios — Landing page SITES WEB & E-COMMERCE
   Consentement (Loi 25) + soumission du formulaire + suivi des conversions
   ============================================================
   Même logique que /ia/ia.js. Le Pixel Meta est partagé (même dataset).
   Formulaire Netlify : form-name = "web-lead".
   ============================================================ */

(function () {
  "use strict";

  /* ----- À REMPLACER (si besoin) ----- */
  var META_PIXEL_ID    = "331337119865936";      // Facebook/Instagram — dataset « wanil »
  var GOOGLE_ADS_ID    = "AW-XXXXXXXXXX";        // (optionnel — Google Ads, pour plus tard)
  var CONVERSION_LABEL = "XXXXXXXXXXXXXXXXXX";   // (optionnel — Google Ads, pour plus tard)
  /* ----------------------------------- */

  var CONSENT_KEY = "pds-ads-consent";   // partagé avec /ia/ : un seul choix de consentement
  var metaReady = false;
  var googleReady = false;

  function metaConfigured()   { return META_PIXEL_ID.indexOf("X") === -1; }
  function googleConfigured() { return GOOGLE_ADS_ID.indexOf("X") === -1 && CONVERSION_LABEL.indexOf("X") === -1; }
  function anyConfigured()    { return metaConfigured() || googleConfigured(); }

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

  function loadTracking() { loadMetaPixel(); loadGoogleAds(); }

  function genEventId() {
    try {
      if (window.crypto && crypto.randomUUID) return "weblead_" + crypto.randomUUID();
    } catch (e) {}
    return "weblead_" + Date.now() + "_" + Math.random().toString(36).slice(2, 10);
  }

  /* value = valeur représentative d'un projet web -> Meta optimise vers les vrais
     projets, pas les curieux. eventID = dédup Pixel <-> Conversions API (serveur). */
  function fireConversion(eventId, user) {
    if (metaReady && typeof window.fbq === "function") {
      if (user && (user.em || user.ph)) {
        try { window.fbq("init", META_PIXEL_ID, user); } catch (e) {}
      }
      window.fbq("track", "Lead",
        { value: 6500, currency: "CAD", content_name: "Demande projet web/e-commerce" },
        { eventID: eventId });
    }
    if (googleReady && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: GOOGLE_ADS_ID + "/" + CONVERSION_LABEL,
        value: 6500, currency: "CAD", transaction_id: eventId
      });
    }
  }

  function setupConsent() {
    var banner = document.getElementById("consent");
    var accept = document.getElementById("consent-accept");
    var refuse = document.getElementById("consent-refuse");
    if (!banner || !accept || !refuse) return;

    var choice = null;
    try { choice = localStorage.getItem(CONSENT_KEY); } catch (e) {}

    if (choice === "granted") { loadTracking(); }
    else if (choice === "denied") { /* rien */ }
    else if (anyConfigured()) { banner.classList.add("show"); }

    accept.addEventListener("click", function () {
      try { localStorage.setItem(CONSENT_KEY, "granted"); } catch (e) {}
      loadTracking(); banner.classList.remove("show");
    });
    refuse.addEventListener("click", function () {
      try { localStorage.setItem(CONSENT_KEY, "denied"); } catch (e) {}
      banner.classList.remove("show");
    });
  }

  function trackPlausible(name) {
    try { if (typeof window.plausible === "function") window.plausible(name); } catch (e) {}
  }

  function setInvalid(fieldId, invalid) {
    var f = document.getElementById(fieldId);
    if (!f) return;
    f.classList.toggle("invalid", invalid);
    var input = f.querySelector("input, select, textarea");
    if (input) input.setAttribute("aria-invalid", invalid ? "true" : "false");
  }

  function validEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

  function liveValidate() {
    var checks = [
      { wrap: "f-name", id: "lp-name", bad: function (v) { return v.trim().length < 2; } },
      { wrap: "f-phone", id: "lp-phone", bad: function (v) { return v.replace(/[^0-9+]/g, "").length < 10; } },
      { wrap: "f-email", id: "lp-email", bad: function (v) { return !validEmail(v.trim()); } }
    ];
    checks.forEach(function (c) {
      var el = document.getElementById(c.id);
      if (!el) return;
      el.addEventListener("blur", function () { if (el.value) setInvalid(c.wrap, c.bad(el.value)); });
      el.addEventListener("input", function () {
        var wrap = document.getElementById(c.wrap);
        if (wrap && wrap.classList.contains("invalid")) setInvalid(c.wrap, false);
      });
    });
  }

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

      var eventId = genEventId();
      var body = new URLSearchParams();
      body.append("form-name", "web-lead");
      body.append("_gotcha", honey ? honey.value : "");
      body.append("nom", name);
      body.append("telephone", phone);
      body.append("courriel", email);
      body.append("type_projet", document.getElementById("lp-type").value || "—");
      body.append("site_actuel", document.getElementById("lp-site").value.trim() || "—");
      body.append("message", document.getElementById("lp-msg").value.trim() || "—");
      body.append("source", "Landing page /web/ (publicité)");
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
          trackPlausible("LP Web - Lead");
          fireConversion(eventId, {
            em: email, ph: phone.replace(/[^0-9]/g, ""), fn: name.split(" ")[0]
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

  function init() { setupConsent(); setupForm(); }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else { init(); }
})();
