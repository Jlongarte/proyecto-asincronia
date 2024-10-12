import "./Footer.css";

const template = () => `
<p>Copyright 2024 - <a href="https://www.linkedin.com/in/%F0%9F%92%BB-janire-gonzalez-13aa78258/" target="_blank"> Garayoa</a> </p>



`;

const Footer = () => {
  document.querySelector("footer").innerHTML = template();
};

export default Footer;
