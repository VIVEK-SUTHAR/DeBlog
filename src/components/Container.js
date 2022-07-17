import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import useStore from "../Store/store";
import abi from "../utils/ABI.json";
import { CONTRACT_ADDRESS } from "../utils/utils";
import Catagories from "./Catagories";
import WriteBlogs from "./WriteBlogs";
function Container() {
    const store = useStore();
    const writeBlog = store.writeBlog;
    const setWriteBlog = store.setWriteBlog;
    const setDetailBlogs = store.setDetailBlogs;
    const detailBlogs = store.detailBlogs;
    let MusicList = [];
    for (let i = 0; i < 5; i++) {
        MusicList[i] = i + 10;
    }
    const [allBlogs, setAllBlogs] = useState([])
    const ABI = abi.abi;
    let AllBlogs = [];
    var blogs;
    useEffect(()=>{
        setDetailBlogs(allBlogs)
    },[detailBlogs, allBlogs])
    const getAllBlogs = async () => {
        try {
            const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum, "any");
                const signer = provider.getSigner();
                const DeBlog = new ethers.Contract(
                    CONTRACT_ADDRESS,
                    ABI,
                    signer
                );
                AllBlogs = await DeBlog.getAllblogs();
                // console.log(typeof AllBlogs);
                // console.log(AllBlogs);
                // setAllBlogs(Object.entries(AllBlogs));
                setAllBlogs(Object.values(AllBlogs));
                if (allBlogs){
                    setDetailBlogs(allBlogs)
                }
                else{
                    console.log("bdcgc")
                }
                // const d = allBlogs
                // setDetailBlogs(d)
                // console.log(d)

                allBlogs.map(itm => {
                    console.log(itm.blogTitle);
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllBlogs()
    }, [])
    return (
        <div className='bg-[#121212] flex-1 overflow-y-scroll Scroll px-8 py-6 relative'>
            <Catagories />
            <div className="text-3xl mt-8 text-white">Recent Blogs</div><br />
            <div className="w-4/5 flex flex-row flex-wrap min-h-screen justify-start items-center gap-10 overflow-y-scroll Scroll">
                {
                    allBlogs && allBlogs.map((item, index) => {
                        return <Link to={`/blog/${index}`}>
                            <BlogCard key={index} index={index} blogdata={item} />
                        </Link>
                    })
                }
            </div>
            <WriteBlogs show={writeBlog ? 1 : 0} onClickOutside={() => setWriteBlog(false)} />
        </div >
    )
}

export default Container