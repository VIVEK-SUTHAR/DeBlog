import useStore from "../Store/store";
import logo from "../Assets/DeBlog-logos_black.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const store = useStore();
  const currentAccount = store.currentAccount;
  const setWriteBlog = store.setWriteBlog;
  const writeBlog = store.writeBlog;  
  return (
    <div className="bg-white h-20 w-full px-8 sticky top-0 shadow-lg shadow-indigo-500/40">
      <div className="flex items-center justify-between h-full text-neutral-400 text-base font-medium">
        <Link to={'/'}>
          <div>
            <img src={logo} alt="DeBlog" className="h-44 w-auto" />
          </div>
        </Link>
        <div className="flex items-center justify-between">
            <button onClick={() => { setWriteBlog(true) }} className="rounded-full bg-orange-400 hover:scale-105 px-4 py-3 text-white mr-4">
              <span className="text-lg mx-4 cursor-pointer">Write your Blog</span>
            </button>
          <button className="rounded-full bg-slate-200 hover:scale-105 px-8 py-3 text-black">
            💳{" "}
            {currentAccount
              ? currentAccount.slice(0, 4) +
              "..." +
              currentAccount.slice(currentAccount.length - 4, currentAccount.length)
              : "Connect"}
          </button>
        </div>
      </div>
    </div>
  );
}
