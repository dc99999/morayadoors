document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  document.querySelectorAll(".detail-gallery").forEach((gallery) => {
    const images = Array.from(gallery.children);
    const descriptions = [
      "A refined design with a balanced, timeless finish.",
      "A practical style created to complement modern spaces.",
      "Carefully selected details bring this design to life.",
      "A distinctive option for customers who value quality.",
      "Thoughtful proportions make this piece easy to live with.",
      "A warm, versatile design for everyday interiors.",
      "Clean lines and a considered finish create a premium look.",
      "A dependable choice with strong visual character.",
      "Designed to add comfort, beauty and lasting appeal.",
      "A beautiful example from the Morya collection.",
    ];

    images.sort(() => Math.random() - 0.5);
    images.forEach((image, index) => {
      const figure = document.createElement("figure");
      const caption = document.createElement("figcaption");

      caption.textContent = descriptions[index];
      figure.append(image, caption);
      gallery.appendChild(figure);
    });
  });

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
