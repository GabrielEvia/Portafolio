const certificates = [
  "src/img/certs/cer1.png",
  "src/img/certs/cer2.png",
  "src/img/certs/cer3.png",
  "src/img/certs/cer4.png",
  "src/img/certs/cer5.png",
  "src/img/certs/cer6.png",
  "src/img/certs/cer7.png",
  "src/img/certs/cer8.png"
];

const visibleItems = 4;
const step = 1;
const track = document.getElementById("carouselTrack");

let itemWidth = 0;
let currentIndex = 0;
let totalItems = certificates.length;
let isTransitioning = false;

function createItem(src, index) {
  const div = document.createElement("div");
  div.className = "my-carousel-item";
  const img = document.createElement("img");
  img.src = src;
  img.alt = `Certificado ${index + 1}`;
  img.onclick = () => openModal(src); // Tu función de modal
  div.appendChild(img);
  return div;
}

function renderCarousel() {
  track.innerHTML = "";

  // Clonar últimos 4 al principio
  for (let i = totalItems - visibleItems; i < totalItems; i++) {
    track.appendChild(createItem(certificates[i], i));
  }

  // Originales
  certificates.forEach((src, i) => {
    track.appendChild(createItem(src, i));
  });

  // Clonar primeros 4 al final
  for (let i = 0; i < visibleItems; i++) {
    track.appendChild(createItem(certificates[i], i));
  }

  const item = track.querySelector(".my-carousel-item");
  itemWidth = item.offsetWidth;

  // Posición inicial (después de los clones iniciales)
  currentIndex = visibleItems;
  updatePosition(false);
}

function updatePosition(animate = true) {
  if (!itemWidth) return;

  if (!animate) {
    track.style.transition = "none";
  } else {
    track.style.transition = "transform 0.5s ease";
  }

  const offset = currentIndex * itemWidth;
  track.style.transform = `translateX(-${offset}px)`;
}

function moveCarousel(direction) {
  if (isTransitioning) return;
  isTransitioning = true;

  currentIndex += direction * step;
  updatePosition(true);

  track.addEventListener("transitionend", handleTransitionEnd, { once: true });
}

function handleTransitionEnd() {
  // Loop hacia la izquierda
  if (currentIndex < visibleItems) {
    currentIndex = totalItems + (currentIndex % totalItems);
    updatePosition(false);
  }

  // Loop hacia la derecha
  if (currentIndex >= totalItems + visibleItems) {
    currentIndex = visibleItems;
    updatePosition(false);
  }

  isTransitioning = false;
}

function recalculateItemWidth() {
  const item = track.querySelector(".my-carousel-item");
  if (item) {
    itemWidth = item.offsetWidth;
    updatePosition(false);
  }
}

window.addEventListener("load", () => {
  renderCarousel();
});

window.addEventListener("resize", () => {
  recalculateItemWidth();
});

// Botones ← →
document.querySelector(".carousel-btn.prev").addEventListener("click", () => moveCarousel(-1));
document.querySelector(".carousel-btn.next").addEventListener("click", () => moveCarousel(1));
