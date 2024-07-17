import logo from "../assets/logo.png";

function Header() {
  return (
    <div className="flex items-center justify-between h-24">
      <div className="flex items-center justify-center w-40 h-full ml-10 mr-5 md:ml-16 md:w-60">
        <img src={logo} className="w-full h-fit" alt="" />
      </div>
      <div className="md:hidden"></div>
      <div className="items-center justify-center hidden h-full mr-10 md:flex">
        <h1 className="px-2 pb-2 mx-5 font-bold capitalize border-black cursor-pointer hover:border-b-2">
          home
        </h1>
        <h1 className="px-2 pb-2 mx-5 font-bold capitalize border-black cursor-pointer hover:border-b-2">
          our partners
        </h1>
        <h1 className="px-2 pb-2 mx-5 font-bold capitalize border-black cursor-pointer hover:border-b-2">
          road map
        </h1>
        <h1 className="px-2 pb-2 mx-5 font-bold capitalize border-black cursor-pointer hover:border-b-2">
          contact us
        </h1>
        <h1 className="px-2 pb-2 mx-5 font-bold capitalize border-black cursor-pointer hover:border-b-2">
          about us
        </h1>
      </div>
    </div>
  );
}

export default Header;
