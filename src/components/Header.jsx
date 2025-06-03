function Header() {
  return (
    <header className="header">
      <div className="logo-title">
        <img
          src="https://cdn-icons-png.flaticon.com/512/201/201623.png"
          alt="Travel Logo"
          className="logo"
        />
        <h1>My Application</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;