import { Next, Previous } from "../Assets/Icons";
import useStore from "../Store/store";
import writeBlogs from "./WriteBlogs";
export default function Navbar() {
  const store = useStore();
  const currentAccount = store.currentAccount.slice(38);
  const setWriteBlog = store.setWriteBlog;
  const writeBlog = store.writeBlog;
  // currentAccount.slice(38)
  return (
    <div className="bg-[#2a2a2a]  h-16 w-full px-8 stickey top-0 ">
      <div className="flex items-center justify-between h-full text-neutral-400 text-base font-medium">
        <ul className="flex">
          <li>
            <Previous />
          </li>
          <li className="ml-5">
            <Next />
          </li>
        </ul>
        <ul className="flex items-center">
          <li className=" hover:text-white hover:scale-105">
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
          </li>
          <li className="hover:text-white hover:scale-105 ">
            <a onClick={()=>{setWriteBlog(true);console.log(writeBlog)}} className="mr-8">
              <span className="pl-4 border-l-2 mx-4">Write your Blog</span>
            </a>
          </li>
          <button className="rounded-full bg-slate-100 hover:scale-105 px-8 py-3 text-black">
            {`0x..${currentAccount}`}
          </button>
        </ul>
      </div>
    </div>
  );
}
