import Container from "@/components/Container";
import UserAvatar from "./UserAvatar";
import { validateRequest } from "@/libs/auth";
import Logo from "./Logo";
import NavbarRoutes from "./NavbarRoutes";
import MobileNavbarMenu from "./MobileNavbarMenu";

const Navbar = async () => {
  const { user, session } = await validateRequest();
  console.log(user);
  return (
    <nav className="border-b py-3">
      <Container isHeightFull className="flex justify-between items-center ">
        <div className="flex justify-start items-center gap-x-6">
          <div className="hidden md:block">
            <Logo />
          </div>
          <div className="hidden md:block">
            <NavbarRoutes session={{ user, session }} />
          </div>
          <div className="block md:hidden">
            <MobileNavbarMenu session={{ user, session }} />
          </div>
        </div>
        <div className="flex items-center justify-start gap-x-6">
          <UserAvatar session={{ user, session }} />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
