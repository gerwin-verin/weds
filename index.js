const url = "https://weds-new-api.vercel.app/api/users/";

$(document).ready(function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const to = urlParams.get("to");

  sessionStorage.clear();

  if (to != null) {
    fetchGuestName(to).then((data) => {
      console.log("Data : " + data);
      if (data.res != null) {
        $("#txtGuestName").text(data.res[0].name);
        sessionStorage.setItem("documentId", data.res[0].id);
        sessionStorage.setItem("type", data.res[0].type);
      }
    });
  }

  $("#btnOpenInvitation").on("click", function () {
    window.location.href = "invitation.html";
  });
});

function fetchGuestName(name) {
  return getGuestByName(name)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
}

async function getGuestByName(name) {
  const options = {
    method: "POST",
    mode: "cors", // 1. Explicitly enable Cross-Origin Resource Sharing
    headers: {
      "Content-Type": "application/json",
      // 'Accept': 'application/json' (Optional: tells server what you want back)
    },
  };

  try {
    const response = await fetch(url + "getGuestByName/" + name, options);

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("CORS or Network Error:", error);
  }
}
