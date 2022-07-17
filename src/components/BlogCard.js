import confetti from "canvas-confetti";
import { useEffect } from "react";
import useStore from "../Store/store";

export default function BlogCard({ blogdata, index }) {
  // console.log(blogdata);
  useEffect(()=>{
    
  },[])
  const store = useStore();
  const currentAccount = store.currentAccount.slice(38);
  return (
    <>
      <div className='MusicCard w-full h-72 bg-gradient-to-r from-sky-400 to-sky-300 flex flex-row items-center  justify-center rounded-xl p-4 overflow-hidden hover:bg-[hsla(0,0%,100%,.1)] hover:transition-all hover:delay-75'>
        <div className='h-full pt-4 pr-8 text-black flex-1 flex flex-col justify-start items-start'>
          <div className="self-start text-4xl font-One">{blogdata.blogTitle}</div>
          <div className='text-2xl my-2 font-Three'>{blogdata.subTitle}</div>
          <h4 className='text-xl text-[#4b4b4b]' >By 0x...{blogdata.blogOwner} *  2 min read</h4>
          {/* <p className='text-xl my-4 w-5/6 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore maiores voluptas, eos iusto reprehenderit quae non sint est, voluptatem obcaecati hic excepturi? Distinctio aut corporis quisquam eos vel, eveniet consequuntur.</p> */}
        </div>
        <div className='w-40 h-40 rounded-xl '>
          <img className='rounded-xl self-end mMx2LUixlnN_Fu45JpFB SKJSok3LfyedjZjujmFt' aria-hidden="false" draggable="false" loading="lazy" src="https://i.scdn.co/image/ab67706f00000002d324d714e59faec1c968c219" data-testid="card-image" alt=""></img>
        </div>
      </div>
    </>
  )
}

