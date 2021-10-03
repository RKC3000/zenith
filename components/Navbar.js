import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const RespMenu = () => {
    // This function is for making the navbar responsive
    var x = document.getElementById("myTopnav");
    if (x.className === "header__main") {
      x.className += " responsive"; //adds this class if the burger icon is clicked
    } else {
      x.className = "header__main";
    }
    var x = document.getElementById("myMenu");
    if (x.className === "header__menu") {
      x.className += " responsive";
    } else {
      x.className = "header__menu";
    }
  };

  return (
    <>
      <div className="header__main1 flex items-center justify-center">
        <div className="header__main" id="myTopnav">
          <div className="resp">
            <Link href="/" passHref>
              <div className="header__logo cursor-pointer">
                <Image
                  className="image"
                  src="/zenith-logo.png"
                  alt="logo"
                  width={60}
                  height={60}
                />
              </div>
            </Link>
            <div className="header__burger" onClick={RespMenu}>
              <i className="text-white">
                <MenuIcon />
              </i>
            </div>
          </div>
          <div className="header__menu" id="myMenu" onClick={RespMenu}>
            <a href="#about" className="nav__links">
              <span>About</span>
            </a>
            {/* <a href="#schedule" className="nav__links">
              <span>Schedule</span>
            </a> */}
            <Link href="/Hackathon">
              <a className="nav__links">
                <span>Hackthon</span>
              </a>
            </Link>
            <a href="#speakers" className="nav__links">
              <span>Speakers</span>
            </a>
            <a href="#sponsors" className="nav__links">
              <span>Sponsors</span>
            </a>
            <a href="#faq" className="nav__links">
              <span>FAQ</span>
            </a>
            <a href="#footer" className="nav__links">
              <span>ContactUs</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
