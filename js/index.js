window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));

$(document).ready(function() {

  $(".button").click(function() {

    $.getJSON("http://quotesondesign.com/api/3.0/api-3.0.json?callback=?", function(json) {
      
      $("#quote").html(json.quote).removeClass("text-center");
      $("#author").html(" - " + json.author);
    });

    $("#twitter").empty();

    twttr.widgets.createShareButton(
      'http://codepen.io/meredithmatthews/pen/WrrBdw',
      document.getElementById('twitter'), {
        count: 'none',
        text: quote + '-' + author
      }).then(function(el) {
      console.log("Button created.")
    });

  });
});