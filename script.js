const apiUrl = "https://api.spacexdata.com/v5/launches/";

const launchList = document.querySelector("#launch-list");

function getLaunches() {
  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error(error));
}

function displayLaunches(launches) {
  launchList.innerHTML = "";
  // Loop through the launches array and create an li element for each launch
  launches.forEach((launch) => {
    console.log(
      launch.links.patch.small,
      launch.date_local,
      launch.name,
      launch.details
    );
    // TODO
  });
}

// Adds event listeners when site has loaded
document.addEventListener("DOMContentLoaded", () => {
  getLaunches().then((launches) => displayLaunches(launches));
});
