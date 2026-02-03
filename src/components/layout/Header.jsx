import DesktopNav from "../layout/DesktopNav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header>
      <MobileNav />
      <DesktopNav />
    </header>
  );
};

export default Header;
