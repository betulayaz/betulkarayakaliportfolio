import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  const [open,setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const location = useLocation();
  const trackScreenWidth = () => {
        const width = window.innerWidth;
        setScreenWidth(width);
        if (width > 800) {
          setOpen(true);
        }
  };
  const handleClose = () => {
    if (screenWidth < 600) {
      setOpen(false);
    }
  };

  useEffect(() => {
        trackScreenWidth();
        window.addEventListener("resize", trackScreenWidth);
        return () => window.removeEventListener("resize", trackScreenWidth);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="logo">
          <Link to="/">
            <img 
              src={`${process.env.PUBLIC_URL}/icon.png`}
              alt="icon"
            />
          </Link>
        </div>
        <div className="list-wrapper">
          <img
            src={`${process.env.PUBLIC_URL}/navbar.png`}
            alt="Menu bars"
            style={{opacity: !open ? 1 : 0}}
            onClick={() =>{
                setOpen(!open);
            }}
          />
          <img
            src={`${process.env.PUBLIC_URL}/cross.png`}
            alt="Menu cross"
            style={{opacity: open ? 1 : 0}}
            onClick={() =>{
                setOpen(!open);
            }}
          />

          <ul style={{left: open ? "0" : "-100vw"}}>
            <li>
              <Link onClick={handleClose} style={{ color: location.pathname === "/" && "#4071f4" }} to="/"> Anasayfa</Link>
            </li>
            <li>
              <Link onClick={handleClose} style={{ color: location.pathname === "/about" && "#4071f4" }} to="/about">Hakkımda</Link>
            </li>
            <li>
              <Link onClick={handleClose} style={{ color: location.pathname === "/works" && "#4071f4" }} to="/works">Yapılan İşler</Link>
            </li>
            <li>
              <Link onClick={handleClose} style={{ color: location.pathname === "/comments" && "#4071f4" }} to="/comments">Yorumlar</Link>
            </li>
            <li>
              <Link onClick={handleClose} style={{ color: location.pathname === "/contact" && "#4071f4" }} to="/contact">İletişim</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;