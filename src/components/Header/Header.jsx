import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="p-4 border border-black lg:hidden">
      <MobileNav />
    </header>
  );
};

export default Header;
