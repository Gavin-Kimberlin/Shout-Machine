$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var str = $("input#shout").val();
    var res = str.toUpperCase();
    $(".shout").text(res);
    console.log(res);
    console.log(str);

    event.preventDefault();
  });
});
