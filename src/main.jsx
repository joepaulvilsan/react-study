import { createRoot } from "react-dom/client";  
import { Fragment } from "react";
import Header from "./Header";
import "./index.css"; // Importing CSS styles
import Content from "./content"; // Importing Content component
import Footer from "./footer";

const root=createRoot(document.getElementById("root"))
root.render(
  <div>
    <App />
  </div>
);

function App() {
  return (
    <Fragment>
      <Header />
      <Content />
      <Footer />
    </Fragment>
  );
}