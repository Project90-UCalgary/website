// Style
import "./Style/NavBar.scss";

export default function NavBar(props) {
  return (
    <div className="navbar">
      <img className="logo" src="https://i.imgur.com/ASECHXS.png" alt="Logo" />
      <button
        className="btn btn-outline-secondary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        Menu
      </button>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <img
            className="logo"
            src="https://i.imgur.com/ASECHXS.png"
            alt="Logo"
          />
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">...</div>
      </div>
    </div>
  );
}
