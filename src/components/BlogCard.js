import useStore from "../Store/store";

export default function BlogCard() {
  const store = useStore();
  const currentAccount = store.currentAccount.slice(38);
  
  return (
    <>
      <div className='MusicCard w-4/5 h-72 bg-[#181818] flex flex-row items-center  justify-center rounded-md p-4 overflow-hidden hover:bg-[hsla(0,0%,100%,.1)] hover:transition-all hover:delay-75'>
        <div className='h-full pt-4 text-white flex-1 flex flex-col justify-start items-start'>
          <div className="self-start text-4xl">Blog Title</div>
          <div className='text-2xl my-2'>Blog Catagory</div>
          <h4 className='text-xl'>By 0x...{currentAccount} *  2 min read</h4>
          <p className='text-xl my-4 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore maiores voluptas, eos iusto reprehenderit quae non sint est, voluptatem obcaecati hic excepturi? Distinctio aut corporis quisquam eos vel, eveniet consequuntur.</p>
        </div>
        <div className='w-40 h-40 rounded-xl '>
          <img className='rounded-xl self-end' aria-hidden="false" draggable="false" loading="lazy" src="https://i.scdn.co/image/ab67706f00000002d324d714e59faec1c968c219" data-testid="card-image" alt="" class="mMx2LUixlnN_Fu45JpFB SKJSok3LfyedjZjujmFt"></img>
        </div>
      </div>
         
    </>
  )
}

