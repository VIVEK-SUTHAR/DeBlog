import { ethers } from 'ethers';
import { useEffect, useRef, useState } from 'react';
import abi from "../utils/ABI.json";
import storeFiles from '../utils/uploadImage';
import back from '../Assets/back.svg'
import { CONTRACT_ADDRESS } from "../utils/utils";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function WriteBlogs(props) {
  const ref = useRef(null);
  const { onClickOutside } = props;
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [content, setContent] = useState('');
  const [authorName, setAuthorName] = useState("");
  const [image, setImage] = useState(undefined);
  const [localImageLink, setLocalImageLink] = useState("");
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onClickOutside]);
  if (!props.show) {
    return null
  }
  const ABI = abi.abi;
  const Token = process.env.TOKEN;
  const handleImage = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setLocalImageLink(URL.createObjectURL(e.target.files[0]));
    }
  }

  const uploadNewBlog = async (e) => {
    const ToastContainer = toast.loading("Uploading Image to IPFS...");
    const URI = await storeFiles(image);
    toast.update(ToastContainer, {
      render: "Image uploaded to IPFS",
      type: "success",
      isLoading: false,
    });
    console.log(URI);
    e.preventDefault();
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
        await DeBlog.newBlog(Math.round(Math.random() * 1000000), title, subTitle, authorName, content, URI);
        console.log("blog uploaded");
        toast.update(ToastContainer, {
          render: "Blog uploaded",
          type: "success",
          isLoading: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div ref={ref} className='absolute top-10 left-56 font-9xl rounded-xl w-4/6 h-auto bg-white shadow-2xl py-4'>
        <div className='flex justify-between px-12 py-4'>
          <div className='h-fit items-center flex justify-between w-full'>
          <img src={back} className='h-8 w-8' onClick={()=>onClickOutside && onClickOutside()} />
            <div className='flex items-center'>
            <button className='bg-orange-400 rounded-xl h-fit mr-8 text-white font-semibold px-3 py-2 text-xl'
              onClick={uploadNewBlog}
            >Publish</button>
            <img src="https://miro.medium.com/fit/c/96/96/0*I2F8PIdog1pkSr8i.jpg" className='rounded-full h-14 w-14 object-cover' alt="" />
            
            </div>
          </div>
        </div>
        <div className='px-12 w-full'>
          <div className='flex justify-between'>
            <div className='block mb-4'>
              <label htmlFor="" className='block text-2xl text-[#413f3f] font-Two mb-1' placeholder='This is why Users dont like long Addresses'>Cover Image</label>
              <input type="file" onChange={handleImage} className='border-orange-400 border-2 rounded-md w-96 h-12 p-2' />
              <img src={localImageLink} className='w-3/5 mt-2 rounded-lg' />
            </div>
            <div className='block mb-4'>
              <label htmlFor="" className='block text-2xl text-[#413f3f] font-Two mb-1' placeholder='This is why Users dont like long Addresses'>Author</label>
              <input type="text" onChange={event => setAuthorName(event.target.value)} className='border-orange-400 border-2 rounded-md w-96 h-12 p-2' />
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='block mb-4'>
              <label htmlFor="" className='block text-2xl text-[#413f3f] font-Two mb-1'>Title</label>
              <input type="text" onChange={event => setTitle(event.target.value)} className='border-orange-400 border-2 rounded-md w-96 h-12 p-2' />
            </div>
            <div className='block mb-4'>
              <label htmlFor="" className='block text-2xl text-[#413f3f] font-Two mb-1'>Subtitle</label>
              <input type="text" onChange={event => setSubTitle(event.target.value)} className='border-orange-400 border-2 rounded-md w-96 h-12 p-2' />
            </div>
          </div>
          <div className='block mb-4'>
            <label htmlFor="" className='block text-2xl text-[#413f3f] font-Two mb-1'>Content</label>
            <textarea type="text" onChange={event => setContent(event.target.value)} className='border-orange-400 border-2 rounded-md w-full h-48 p-2' />
          </div>
        </div>
      </div>
    </>
  )
}

export default WriteBlogs