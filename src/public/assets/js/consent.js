(function () {
  var KEY = "mtm-analytics-consent";
  var me = document.currentScript;
  var id = me && me.getAttribute("data-ga");
  var loaded = false;
  function gtag() { window.dataLayer.push(arguments); }
  window.dataLayer = window.dataLayer || [];
  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  function load() {
    if (loaded || !id) return;
    loaded = true;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + id;
    document.head.appendChild(s);
    gtag("js", new Date());
    gtag("config", id, { anonymize_ip: true });
  }
  function close() { var b = document.getElementById("mtm-consent"); if (b) b.remove(); }
  function choose(v) {
    set(v);
    var g = v === "granted" ? "granted" : "denied";
    gtag("consent", "update", { ad_storage: g, ad_user_data: g, ad_personalization: g, analytics_storage: g });
    close();
    if (v === "granted") load();
    else document.cookie.split(";").forEach(function (c) {
      var n = c.split("=")[0].trim();
      if (n.indexOf("_ga") === 0) {
        var h = location.hostname.replace(/^www\./, "");
        document.cookie = n + "=; Max-Age=0; path=/";
        document.cookie = n + "=; Max-Age=0; path=/; domain=." + h;
      }
    });
  }
  function show() {
    if (document.getElementById("mtm-consent")) return;
    var b = document.createElement("div");
    b.id = "mtm-consent";
    b.setAttribute("role", "dialog");
    b.setAttribute("aria-label", "Cookie consent");
    b.innerHTML = '<p>We use Google Analytics cookies to count visits, only if you agree. <a href="/privacy/">Privacy</a></p>' +
      '<div><button type="button" class="rej">Reject</button><button type="button" class="acc">Accept</button></div>';
    b.querySelector(".acc").onclick = function () { choose("granted"); };
    b.querySelector(".rej").onclick = function () { choose("denied"); };
    document.body.appendChild(b);
  }
  document.addEventListener("click", function (e) {
    var t = e.target.closest && e.target.closest("[data-consent-open]");
    if (t) { e.preventDefault(); show(); }
  });
  var v = get();
  if (v === "granted") load();
  else if (v !== "denied") show();
})();
