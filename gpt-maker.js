window.GPTMakerWidget = {
  getAdditionalContext: function () {
    return window.location.pathname;
  },
};

(function () {
  var s = document.createElement('script');
  s.src = 'https://app.gptmaker.ai/widget/3F31C6E2BCA1F119DF71B671D066BA3C/float.js';
  s.async = true;
  document.head.appendChild(s);
})();
