import "./HamburgerIcon.css"; // Import the SCSS styles

const HamburgerMenu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <button className={`btn-toggle ${isOpen ? "open" : "close"}`} id="menu-toggle">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </button>
  );
};

export default HamburgerMenu;
