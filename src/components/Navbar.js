import { Next, Previous } from "../Assets/Icons";
import useStore from "../Store/store";
import writeBlogs from "./WriteBlogs";
import logo from "../Assets/DeBlog-logos_black.png";

export default function Navbar() {
  const store = useStore();
  const currentAccount = store.currentAccount.slice(38);
  const setWriteBlog = store.setWriteBlog;
  const writeBlog = store.writeBlog;
  // currentAccount.slice(38)
  return (
    <div className="bg-white h-16 w-full px-8 sticky top-0 shadow-lg shadow-indigo-500/40">
      <div className="flex items-center justify-between h-full text-neutral-400 text-base font-medium">
        {/* <ul className="flex">
          <li>
            <Previous />
          </li>
          <li className="ml-5">
            <Next />
          </li>
        </ul> */}
        <div>
          <img src={logo} alt="DeBlog" className="h-44 w-auto" />
        </div>
        <ul className="flex items-center">
          {/* <li className=" hover:text-white hover:scale-105">
            <a href="/" className=" ">
              <span className="mx-4">Premium</span>
            </a>
          </li>
          <li className=" hover:text-white hover:scale-105">
            <a href="/" className=" ">
              <span className="mx-4">Support</span>
            </a>
          </li>
          <li className=" hover:text-white hover:scale-105">
            <a href="/" className=" ">
              <span className="mx-4"></span>
            </a>
          </li> */}
          <li className="text-gray-700">
            <a onClick={() => { setWriteBlog(true) }} className="mr-8">
              <span className="pl-4 mx-4 cursor-pointer">Write your Blog</span>
            </a>
          </li>
          <button className="rounded-full bg-slate-200 hover:scale-105 px-8 py-3 text-black">
            💳{" "}
            {currentAccount
              ? currentAccount.slice(0, 4) +
              "..." +
              currentAccount.slice(currentAccount.length - 4, currentAccount.length)
              : "Connect"}
          </button>
        </ul>
      </div>
    </div>
  );
}
