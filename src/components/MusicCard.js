import { useEffect } from "react";
import { Play } from "../Assets/Icons";

export default function MusicCard() {
  useEffect(() => {
    const MusicCard = document.getElementsByClassName("MusicCard");
    for (let i = 0; i < MusicCard.length; i++) {
      MusicCard[i].addEventListener("mouseover", () => {
        document.getElementsByClassName("PlayIcon")[i].classList.remove("hidden")
      })
    }
    for (let i = 0; i < MusicCard.length; i++) {
      MusicCard[i].addEventListener("mouseleave", () => {
        document.getElementsByClassName("PlayIcon")[i].classList.add("hidden")
      })
    }
  })
  return (
    <div className='MusicCard min-w-max h-72 bg-[#181818] rounded-md p-4 overflow-hidden hover:bg-[hsla(0,0%,100%,.1)] hover:transition-all hover:delay-75'>
      <div className='w-40 h-40 rounded-md '>
        <img className='rounded-md' aria-hidden="false" draggable="false" loading="lazy" src="https://i.scdn.co/image/ab67706f00000002d324d714e59faec1c968c219" data-testid="card-image" alt="" class="mMx2LUixlnN_Fu45JpFB SKJSok3LfyedjZjujmFt"></img>
        <div className="PlayIcon hidden relative mx-28 -my-12 w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
          <Play />
        </div>
      </div>
      <div className='pt-4 text-white'>
        <h1>Top 50-Global</h1>
        <h4 className=''>lmdlfbmaelbmcl zl</h4>
      </div>
    </div>
  )
}

