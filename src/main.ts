const input = document.getElementById("searchInput") as HTMLInputElement;
const submitButton = document.getElementById("submit-button") as HTMLElement;
const searchResult = document.getElementById("searchResult") as HTMLElement;
const warningMessg = document.getElementById("warningMessg");

const apiKey = "at_BFPk0ALZKZHwKkjXIAZ6fv3EIiOEG";

async function mapSearch(ip: string) {
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`;
  // const url = ``;

  try {
    const response = await fetch(url);
    let data = await response.json();

    searchResult.innerHTML = "";
    const searchR = document.createElement("div");
    searchR.innerHTML = `
          <div class="bg-white text-gray-900 md:w-[80%] w-[85%] md:h-[10rem] h-[20rem] absolute top-[11rem] shadow-2xl rounded-2xl z-2 md:left-[9rem] left-[2rem] text-center md:text-start">
            <div  class="md:flex justify-between pt-[3rem] px-[2rem]">
              <div>
                  <p class="text-gray-400">IP Address</p>
                  <h2 class="text-[1.5rem]"> ${data.ip}</h2>
                </div>

                <div>
                  <p class="text-gray-400">Location</p>
                  <h2 class="text-[1.5rem]">${data.location.country}</h2>
                </div>

                <div>
                  <p class="text-gray-400">Timezone</p>
                  <h2 class="text-[1.5rem]">${data.location.timezone}</h2>
                </div>

                <div>
                  <p class="text-gray-400">ISP</p>
                  <h2 class="text-[1.5rem]">${data.isp}</h2>
                </div>
            </div> 
          </div> 
    `;

    // const ipAddress = document.createElement("p");
    // ipAddress.textContent = `IP Address: ${data.ip}`;

    // const location = document.createElement("p");
    // location.textContent = `Location: ${data.location.city}, ${data.location.country}`;

    // const timezone = document.createElement("p");
    // timezone.textContent = `Timezone: UTC ${data.location.timezone}`;

    // const isp = document.createElement("p");
    // isp.textContent = `ISP: ${data.isp}`;

    searchResult.appendChild(searchR);
    // searchResult.appendChild(location);
    // searchResult.appendChild(timezone);
    // searchResult.appendChild(isp);
  } catch (error) {
    searchResult.innerHTML = `<p style="color:red;">Please enter a valid IP address${
      (error as Error).message
    }</p>`;
  }
}
submitButton.addEventListener("click", (e) => {
  e.preventDefault;
  const ip = input.value.trim();
  if (ip) {
    mapSearch(ip);
  } else {
    alert("Please enter an IP address");
  }
  // mapSearch(ip);
});

// Initialize the map here
// var map = L.map("map").setView([51.505, -0.09], 13);

// // Add a tile layer
// L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   maxZoom: 19,
//   attribution:
//     '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
// }).addTo(map);

// function onMapClick(e) {
//   alert("You clicked the map at " + e.latlng);
// }

// map.on("click", onMapClick);
