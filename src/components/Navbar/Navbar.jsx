import { FaCartShopping, FaUser } from "react-icons/fa6";
function Navbar() {
  const list = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About Us</a>
      </li>
      <li>
        <a>Products</a>
      </li>
      <li>
        <a>Features</a>
      </li>
      <li>
        <a>Reviews</a>
      </li>
      <li>
        <a>Contact Us</a>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu font-semibold menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {list}
            </ul>
          </div>
          <a className="text-2xl font-bold cursor-pointer">
            Eye
            <span className="text-[#FFE6AD] bg-red-300inline-block">Glass</span>
          </a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 font-semibold menu menu-horizontal text-text-primary">
            {list}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="flex space-x-3">
            <FaCartShopping />
            <FaUser />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
