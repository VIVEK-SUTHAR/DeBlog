import { useParams } from "react-router-dom";
import ProfileBar from "../components/ProfileBar";
import useStore from "../Store/store";

const BlogPage = () => {
    const store = useStore();
    const { id } = useParams();
    const detailBlogs = store.detailBlogs;
    console.log(detailBlogs)
    if (detailBlogs != '') {
        return (
            <div className="bg-[#ffffff] w-screen flex-1 overflow-y-scroll Scroll px-10">
                <button className="bg-red-100 px-4 py-2 rounded-lg mt-2 " onClick={() => window.history.back()}>Go Back</button>
                <ProfileBar detailBlogs={detailBlogs} id={id}/>
                <div className="mt-8">
                    <h2 className="text-6xl font-bold">{detailBlogs[id].blogTitle}</h2>
                    <h3 className="text-4xl mt-8 font-semibold text-[#757575]">{detailBlogs[id].subTitle}</h3>
                    <img src="https://miro.medium.com/max/1050/1*bcnuz2Lvk5pb51SWGE6BjA.png" className="mt-12 w-screen" alt="body-img" />
                    <div className="mt-8 text-xl">
                        <p>{detailBlogs[id].blogContent}</p>
                    </div>
                </div>
            </div>
        )
    }

    else {
        return <h1>Loading</h1>
    }
    
}
export default BlogPage