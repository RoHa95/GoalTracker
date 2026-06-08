import { MdMenu } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar({ openMenu, setOpenMenu }) {
  return (
   
      <div className="w-full max-w-5xl mx-auto h-10
                      flex justify-between items-center sm:grid grid-cols-4
                    text-blue-800 text-lg font-semibold 
                      border-b-2 border-gray-200">
        <div className="sm:col-start-1 sm:col-end-4 md:col-end-4
                        px-2 bg-white dark:bg-gray-700 w-full h-full
        ">
          <Link to="/">
            <div>Goals Tracker</div>
          </Link>
        </div>

        <div className="flex items-center justify-end gap-x-2  
                        sm:flex h-full sm:col-start-4  md:col-start-4 col-end-5 
                        px-3 sm:pr-2 text-white bg-blue-800">
          <Link to="/setting">
            <MdSettings />
          </Link>

          <div className="cursor-pointer sm:hidden">
            <MdMenu onClick={() => setOpenMenu(!openMenu)} />
          </div>
        </div>
      </div>
   
  );
}

export default Navbar;
