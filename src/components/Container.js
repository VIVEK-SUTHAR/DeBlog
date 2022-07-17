import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import Catagories from "./Catagories";
import useStore from "../Store/store"
import WriteBlogs from "./WriteBlogs";
function Container() {
    const store = useStore();
    const writeBlog = store.writeBlog;
    const setWriteBlog = store.setWriteBlog;
    let MusicList = [];
    for (let i = 0; i < 5; i++) {
        MusicList[i] = i + 10;
    }
    return (
        <div className='bg-[#121212] flex-1 overflow-y-scroll Scroll px-8 py-6 relative'>
            <Catagories />
            <div className="text-3xl mt-8 text-white">Recent Blogs</div><br />
            <div className="w-4/5 flex flex-row flex-wrap min-h-screen justify-start items-center gap-10 overflow-y-scroll Scroll">
                {
                    MusicList.map((item, index) => (
                        <Link to={`/blog/${index}`}>
                            <BlogCard key={item} />
                        </Link>
                    ))
                }
            </div>
            <WriteBlogs show={writeBlog? 1 : 0} onClickOutside={()=>setWriteBlog(false)} />
        </div >
    )
}

export default Container