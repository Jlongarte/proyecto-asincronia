import "./style.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const init = () => {
  Header();
  Main();
  Footer();
  getPhotos("coffee");
};

const getPhotos = async (keyword) => {
  const data = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${keyword}&per_page=20&client_id=${
      import.meta.env.VITE_CLIENT_ID
    }`
  );
  const results = await data.json();
  const photos = results.results;
  printPhotos(photos);
};

const printPhotos = (photos) => {
  const container = document.querySelector("#results");
  const message = document.querySelector("#message");

  if (photos.length === 0) {
    message.innerHTML = `
      Search for something else...
      <img src="/peso-muerto.gif" alt="No results found" style="width: 200px; display: block; margin: 10px auto;" />
    `;
    container.innerHTML = "";
    message.classList.remove("visible");
  } else {
    message.classList.add("visible");
    container.innerHTML = "";
    for (const photo of photos) {
      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${photo.urls.regular}" alt="${photo.alt_description}" />
      `;
      container.appendChild(li);
    }
  }
};

init();

document.querySelector("#searchBtn").addEventListener("click", () => {
  const value = document.querySelector("#searchInput").value;
  getPhotos(value);
  document.querySelector("#searchInput").value = "";
});
