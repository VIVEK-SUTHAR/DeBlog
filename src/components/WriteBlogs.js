import { ethers } from 'ethers';
import { useEffect, useRef, useState } from 'react';
import { Web3Storage } from "web3.storage";
import logo from '../Assets/DeBlog-logos_black.png';
import abi from "../utils/ABI.json";
import { CONTRACT_ADDRESS } from "../utils/utils";
function WriteBlogs(props) {
  const ref = useRef(null);
  const { onClickOutside } = props;
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [content, setContent] = useState('');
  const [authorName, setAuthorName] = useState("");
  const [cid, setCid] = useState("");
  const [FilePathIPFS, setFilePathIPFS] = useState("")
  const [fileName, setFileName] = useState("")
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
  const uploadToIPFS = async (e) => {
    e.preventDefault();
    const Storage = new Web3Storage({ token: Token });
    const dta = {
      content: content
    }
    const blob = new Blob([JSON.stringify(dta)], { type: 'application/text/json' })
    const files = [new File([blob], `DeBlog+${title}`)]
    console.log(files);
    const cid = await Storage.put([files[0]]);
    console.log(cid);
    setCid(cid)
    const res = await Storage.get(cid);
    const resFile = await res.files()
    for (const file of resFile) {
      console.log(file.name);
      setFilePathIPFS("https://" + cid + ".ipfs.dweb.link/" + file.name)
      setFileName(file.name);
      console.log(`${file.cid} -- ${file.path} -- ${file.size}`)
    }
  }
  const uploadNewBlog = async (e) => {
    e.preventDefault()
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
        await DeBlog.newBlog(Math.round(Math.random() * 1000000), title, subTitle, authorName, content);
        console.log("blog uploaded");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div ref={ref} className='absolute top-10 font-9xl rounded-xl bg-[#ffffff] w-4/5 h-screen'>
      <div className='flex justify-between'>
        <img src={logo} className='w-1/5 -mt-16' alt="" />
        <div className='mt-4 h-fit items-center flex'>
          <button className='bg-green-500 rounded-xl h-fit mr-8 text-white font-semibold px-3 py-2'
            onClick={uploadNewBlog}
          >Publish</button>
          <img src="	https://miro.medium.com/fit/c/96/96/0*I2F8PIdog1pkSr8i.jpg" className='rounded-full h-14 w-14 mr-4' alt="" />
        </div>
      </div>
      <div className='ml-12'>
        <div className='block mb-4'>
          <label htmlFor="" className='block text-4xl text-[#413f3f] font-Two' placeholder='This is why Users dont like long Addresses'>Author</label>
          <input type="text" onChange={event => setAuthorName(event.target.value)} className='border-black border-2 rounded-md w-4/5 h-12' />
        </div>
        <div className='block mb-4'>
          <label htmlFor="" className='block text-4xl text-[#413f3f] font-Two'>Title</label>
          <input type="text" onChange={event => setTitle(event.target.value)} className='border-black border-2 rounded-md w-4/5 h-12' />
        </div>
        <div className='block mb-4'>
          <label htmlFor="" className='block text-4xl text-[#413f3f] font-Two'>Subtitle</label>
          <input type="text" onChange={event => setSubTitle(event.target.value)} className='border-black border-2 rounded-md w-4/5 h-12' />
        </div>
        <div className='block mb-4'>
          <label htmlFor="" className='block text-4xl text-[#413f3f] font-Two'>Content</label>
          <textarea type="text" onChange={event => setContent(event.target.value)} className='border-black border-2 rounded-md w-4/5 h-48' />
        </div>
      </div>
    </div>
  )
}

export default WriteBlogs