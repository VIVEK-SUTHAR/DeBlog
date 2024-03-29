import confetti from "canvas-confetti";
import { ethers } from "ethers";
import { useParams } from "react-router-dom";
import ProfileBar from "../components/ProfileBar";
import useStore from "../Store/store";
import abi from "../utils/ABI.json";
import { CONTRACT_ADDRESS } from "../utils/utils";
import back from "../Assets/back.svg";
const BlogPage = () => {
   
  const store = useStore();
  const { id } = useParams();
  const detailBlogs = store.detailBlogs;
  console.log(detailBlogs);
  const ABI = abi.abi;
  const filename = detailBlogs[id].coverImage.split("/")[3];
  const filehash = detailBlogs[id].coverImage.split("/")[2].split(".")[0];
  const img_url = `https://ipfs.io/ipfs/${filehash}/${filename}`;
  const sendTip = async (owner, e) => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        const signer = provider.getSigner();
        const DeBlog = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
        console.log("hi");
        console.log();
        const tipTxn = await DeBlog.tipToOwner(detailBlogs[id].blogOwner, {
          value: ethers.utils.parseEther("0.01"),
        });
        await tipTxn.wait();
        const msg = document.getElementsByClassName("confetiScren")[0];
        msg.classList.remove("hidden");
        confetti({
          particleCount: 480,
          startVelocity: 30,
          spread: 360,
          origin: {
            x: Math.random(),
            // since they fall down, start a bit higher than random
            y: Math.random() - 0.2,
          },
        });
        setTimeout(() => {
          msg.classList.add("hidden");
        }, 1000);
        console.log("mined ", tipTxn.hash);
        console.log("tip send");
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (detailBlogs !== "") {
    return (
      <>
        {/* <div className="hidden confetiScren fixed h-48 w-2/5  my-96 rounded-xl p-10 text-5xl text-center bg-slate-300">
                    Thanks For Your Tip
                </div> */}
        <div className="bg-[#ffffff] w-screen flex-1 overflow-y-scroll Scroll px-10">
          <div className="flex justify-between mt-6 items-center">
            <img
              src={back}
              alt=""
              className="h-8 w-8"
              onClick={() => window.history.back()}
            />
            <button
              className="bg-orange-400 text-xl px-4 py-2 rounded-xl mt-2 text-white font-bold"
              onClick={sendTip}
            >
              💰 Tip Writer
            </button>
          </div>
          <ProfileBar detailBlogs={detailBlogs} id={id} />
          <div className="mt-8">
            <h2 className="text-6xl font-bold font-Four">
              {detailBlogs[id].blogTitle}
            </h2>
            <h3 className="text-4xl mt-8 font-semibold text-[#757575] font-Five">
              {detailBlogs[id].subTitle}
            </h3>
            <img
              src={img_url}
              className="mt-12 w-screen lg:w-3/4 mx-auto h-[30rem] rounded-xl"
              alt="body-img"
            />
            <div className="mt-8 text-xl">
              <p>{detailBlogs[id].blogContent}</p>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <h1>Loading</h1>;
  }
};
export default BlogPage;
