document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  const mapElement = document.getElementById("map");

  if (mapElement && typeof L !== "undefined") {
    const dharashivBusStand = [18.1841, 76.0419];

    const map = L.map("map").setView(dharashivBusStand, 16);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 17,
    }).addTo(map);

    L.marker(dharashivBusStand)
      .addTo(map)
      .bindPopup(
        `
        <div>
          <strong>Morya Door & Decors</strong><br>
          Dharashiv Bus Stand<br><br>

          <a 
            href="https://www.google.com/maps/search/?api=1&query=18.1841,76.0419"
            target="_blank"
            rel="noopener noreferrer"
          >
            📍 Follow / Open in Google Maps
          </a>
        </div>
      `,
      )
      .openPopup();
  }
});
