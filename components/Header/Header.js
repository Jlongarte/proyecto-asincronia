import "./Header.css";

const template = () => `
  <div class="container">
    <h1> Inspo Board </h1>
    <div class="button-container">
      <input type="text" id="searchInput" placeholder="Search for inspo..." />
      <button id="searchBtn">Search</button>
      <button id="themeBtn">☀</button> 
    </div>
  </div>
`;

const Header = () => {
  document.querySelector("header").innerHTML = template();
  changeTheme(); // Aseguramos que el botón de tema funcione tras insertar el HTML
};

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  if (!themeBtn) {
    console.error("Botón de tema no encontrado");
    return;
  }
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light"); // Cambia la clase light en el body
    changeText(); // Cambia el texto del botón (☀ y ☾)
  });
};

export const changeText = () => {
  const themeBtn = document.querySelector("#themeBtn");
  if (themeBtn.innerText === "☀") {
    themeBtn.innerText = "☾"; // Cambia el texto del botón
  } else {
    themeBtn.innerText = "☀";
  }
};

// Inicializamos el Header inmediatamente para cargar el contenido
export default Header;
