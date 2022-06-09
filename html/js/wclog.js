function error(message) {
  log(message, "error");
}

function message(message) {
  log(message, "message");
}

function log(message, level) {
  var source = $("#log-template").html();
  var template = Handlebars.compile(source);
  var data = {
    message: message,
    level: level,
  };
  $(template(data)).appendTo("body");
}
