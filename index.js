$(document).ready(function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const token = urlParams.get("token");

  console.log("TOKEN: " + token);

  if (token != null) {
    if (token == "admin") {
      $("#txtGuestName").text("Mr. Admin");
    } else {
      $("#txtGuestName").text("Mr. Admin TEST");
    }
  }

  $("#btnOpenInvitation").on("click", function () {
    window.location.href = "invitation.html";
  });
});
