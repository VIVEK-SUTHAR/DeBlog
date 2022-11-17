import { ethers } from "ethers";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import useStore from "../Store/store";
import { CONTRACT_ADDRESS, ABI } from "../utils/utils";
import WriteBlogs from "./WriteBlogs";

function Container() {
  const store = useStore();
  const writeBlog = store.writeBlog;
  const setWriteBlog = store.setWriteBlog;
  const detailBlogs = store.detailBlogs;
  const setDetailBlogs = store.setDetailBlogs;

  useEffect(() => {
    getAllBlogs();
  }, [detailBlogs]);

  const getAllBlogs = async () => {
    try {
      const { ethereum } = window;
      if (!detailBlogs) {
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum, "any");
          const signer = provider.getSigner();
          const DeBlog = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
          const AllBlogs = await DeBlog.getAllblogs();
          setDetailBlogs(AllBlogs);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white flex-1 overflow-y-scroll Scroll px-8 py-6 relative">
      <div className="w-full flex flex-row flex-wrap min-h-screen justify-center gap-x-6 overflow-y-scroll Scroll">
        {detailBlogs &&
          detailBlogs.map((item, index) => {
            return (
              <Link to={`/blog/${index}`}>
                <BlogCard key={index} blogdata={item} />
              </Link>
            );
          })}
      </div>
      <WriteBlogs
        show={writeBlog ? 1 : 0}
        onClickOutside={() => setWriteBlog(false)}
      />
    </div>
  );
}

export default Container;
