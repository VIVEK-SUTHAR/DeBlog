
export default function BlogCard({ blogdata }) {  

  return (
    <div className='max-h-full min-h-[368px] mb-8 w-96 shadow-2xl flex flex-col rounded-xl p-4 pt-6 overflow-hidden border-2  hover:bg-[hsla(0,0%,100%,.1)] hover:transition-all hover:delay-7'>
      <div className="w-full">
        <img src={blogdata.coverImage} alt='banner' className='h-36 w-full rounded-xl'/>
      </div>
      <div className='h-full pt-4 pr-8 text-black flex-1 flex flex-col justify-start'>
        <div className="self-start text-2xl font-bold font-Four">{blogdata.blogTitle}</div>
        <div className='w-full h-full text-lg my-2 font-Five font-semibold overflow-hidden whitespace-nowrap text-ellipsis'>{blogdata.subTitle}</div>
        <h4 className='text-xl text-[#4b4b4b]' >By {blogdata.blogOwner.slice(0, 4) + "..." + blogdata.blogOwner.slice(blogdata.blogOwner.length - 4, blogdata.blogOwner.length)}
        </h4>
      </div>
    </div>
  )
}