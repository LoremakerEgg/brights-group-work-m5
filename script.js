const apiUrl = "https://api.spacexdata.com/v5/launches/";

const launchList = document.querySelector("#launch-list");
const launchName = document.getElementById("launch-name");
const launchImg = document.getElementById("rocket-img");
const launchDate = document.getElementById("date");
const launchCrew = document.getElementById("crew");
const launchDetails = document.getElementById("details");
const launchNext = document.getElementById("next");
const launchPrev = document.getElementById("prev");

function getLaunches() {
  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error(error));
}

function displayLaunches(launches) {
  // launchList.innerHTML = "";
  // Loop through the launches array and create an li element for each launch
  // launches.forEach((launch) => {
  //   console.log(
  //     launch.links.patch.small,
  //     launch.date_local,
  //     launch.name,
  //     launch.details
  //   );
  // TODO
  // });
  console.log(launches[4]);
  let nameNumber = 0;
  launchName.innerText = ` ${launches[nameNumber]["name"]}`;
  launchImg.innerHTML = `<img src="${launches[nameNumber]["links"].patch["small"]}"></img>`;
  launchDate.innerText = `Launch Date: ${launches[nameNumber]["date_local"]}`;
  launchDetails.innerText = `Launch Details: ${launches[nameNumber]["details"]}`;
  launchNext.addEventListener("click", () => {
    nameNumber++;
    launchName.innerText = ` ${launches[nameNumber]["name"]}`;
    launchImg.innerHTML = `<img src="${launches[nameNumber]["links"].patch["small"]}"></img>`;
    launchDate.innerText = `Launch Date: ${launches[nameNumber]["date_local"]}`;
    if (launches[nameNumber]["details"] === null) {
      launchDetails.innerText = "No launch details detected!";
    } else {
      launchDetails.innerText = `Launch Details: ${launches[nameNumber]["details"]}`;
    }
  });
  launchPrev.addEventListener("click", () => {
    nameNumber--;
    launchName.innerText = ` ${launches[nameNumber]["name"]}`;
    launchImg.innerHTML = `<img src="${launches[nameNumber]["links"].patch["small"]}"></img>`;
    launchDate.innerText = `Launch Date: ${launches[nameNumber]["date_local"]}`;
    if (launches[nameNumber]["details"] === null) {
      launchDetails.innerText = "No launch details detected!";
    } else {
      launchDetails.innerText = `Launch Details: ${launches[nameNumber]["details"]}`;
    }
  });
}

// Adds event listeners when site has loaded
document.addEventListener("DOMContentLoaded", () => {
  getLaunches().then((launches) => displayLaunches(launches));
});
