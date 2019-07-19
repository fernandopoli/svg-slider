// SHARECOUNT
jQuery.sharedCount = function(url, fn) {
  url = encodeURIComponent(url || location.href);
  var domain = "//api.sharedcount.com/v1.0/"; /* SET DOMAIN */
  var apikey = "b8a9b1129af965899b44aa82fb90d9b99485f894"; /*API KEY HERE*/
  var arg = {
    data: {
      url: url,
      apikey: apikey
    },
    url: domain,
    cache: true,
    dataType: "json"
  };
  if ("withCredentials" in new XMLHttpRequest()) {
    arg.success = fn;
  } else {
    var cb = "sc_" + url.replace(/\W/g, "");
    window[cb] = fn;
    arg.jsonpCallback = cb;
    arg.dataType += "p";
  }
  return jQuery.ajax(arg);
};

// INIT FUNCTIONS
jQuery(document).ready(function($) {
  $.sharedCount(location.href, function(data) {
    $("#facebook").text(data.Facebook.total_count);
    $("#linkedin").text(data.LinkedIn);
    $("#pinterest").text(data.Pinterest);
    $("#stumbles").text(data.StumbleUpon);
    $("#comments").text(data.Facebook.comment_count);
    $("#plusones").text(data.GooglePlusOne);
    $("#sharedcount").fadeIn();
  });
});
