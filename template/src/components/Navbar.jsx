function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🎮 Game <span>Warrior</span></div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Games</li>
        <li>Tournaments</li>
        <li>Reviews</li>
        <li>Contact</li>
      </ul>

      <button className="login-btn">Login / Register</button>
    </nav>
  );
}

export default Navbar;
