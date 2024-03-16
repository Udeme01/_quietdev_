import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="p-4">
      <MobileNav />
      <DesktopNav />
    </header>
  );
};

export default Header;
