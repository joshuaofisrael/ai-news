(function () {
  var form = document.getElementById("contact-form");
  var status = document.getElementById("contact-status");
  if (!form || !status) return;

  var started = Date.now();
  var minWait = 4000;
  var rateWait = 60000;
  var storageKey = "aihh-contact-at";
  var localCodes = [106, 111, 115, 104, 117, 97, 111, 102, 105, 115, 114, 97, 101, 108];
  var mailHostCodes = [103, 109, 97, 105, 108, 46, 99, 111, 109];
  var gateCodes = [102, 111, 114, 109, 115, 117, 98, 109, 105, 116, 46, 99, 111];

  function decode(codes) {
    return codes
      .map(function (code) {
        return String.fromCharCode(code);
      })
      .join("");
  }

  function endpoint() {
    return "https://" + decode(gateCodes) + "/ajax/" + decode(localCodes) + "@" + decode(mailHostCodes);
  }

  function say(message, isError) {
    status.textContent = message;
    status.classList.toggle("is-error", Boolean(isError));
    status.focus();
  }

  function field(name) {
    return form.elements[name];
  }

  function trimmed(name) {
    return String(field(name).value || "").trim();
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var honey = field("_honey");
    if (honey && honey.value) {
      form.hidden = true;
      say("Thanks. Your note is on its way to the desk.", false);
      return;
    }
    field("name").setCustomValidity(trimmed("name") ? "" : "Enter your name.");
    field("message").setCustomValidity(trimmed("message") ? "" : "Enter a message.");
    if (!form.reportValidity()) return;
    if (Date.now() - started < minWait) {
      say("Please wait a moment, then send the note again.", true);
      return;
    }
    var last = 0;
    try {
      last = Number(window.localStorage.getItem(storageKey) || 0);
    } catch (error) {
      last = 0;
    }
    if (last && Date.now() - last < rateWait) {
      say("A note just went out from this browser. Please wait a minute before sending another.", true);
      return;
    }

    var submit = form.querySelector("[type=submit]");
    submit.disabled = true;
    say("Sending your note.", false);

    var payload = {
      name: trimmed("name"),
      email: trimmed("email"),
      message: trimmed("message"),
      _captcha: field("_captcha").value,
      _template: field("_template").value,
      _subject: field("_subject").value,
      _honey: "",
    };

    window
      .fetch(endpoint(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      })
      .then(function (response) {
        return response.json().then(function (data) {
          return { ok: response.ok, data: data };
        });
      })
      .then(function (result) {
        var success = result.ok && result.data && String(result.data.success) === "true";
        if (!success) throw new Error("send failed");
        try {
          window.localStorage.setItem(storageKey, String(Date.now()));
        } catch (error) {
          /* The note was accepted. A full store should not hide that. */
        }
        form.hidden = true;
        say("Thanks. Your note is on its way to the desk.", false);
      })
      .catch(function () {
        submit.disabled = false;
        say("The note did not send. Please try again in a moment, or use the repository issue link below.", true);
      });
  });
})();
