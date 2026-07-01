import "../Style/Header.css";

function Header() {
  return (
    <div className="menu-bar">
      <div className="menu-button-section">
        <button>Home</button>
      </div>
      <div className="menu-button-section">
        <button>Background</button>
      </div>
      <div className="menu-button-section">
        <button>Projects</button>
      </div>
      <div className="menu-button-section">
        <button>Contact</button>
      </div>
    </div>
  );
}

export default Header;
