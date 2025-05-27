import reactlogo from "./assets/react.svg";
export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <img src={reactlogo} alt="React Logo" />
      <h1>Welcome to React</h1>
    </header>
  );
}