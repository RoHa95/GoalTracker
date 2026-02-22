import { MdMenu } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar({ openMenu, setOpenMenu }) {
  return (
    <div className=" bg-blue-600 w-full">
      <div className="max-w-5xl mx-auto h-10 flex items-center justify-between text-white text-lg font-semibold px-3">
        <Link to="/">
          <div>Goals Tracker</div>
        </Link>

        <div className="flex gap-x-3">
          <Link to="/setting">
            <MdSettings />
          </Link>

          <div className="cursor-pointer sm:hidden">
            <MdMenu onClick={() => setOpenMenu(!openMenu)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
