import MusicCard from "./MusicCard";
function Container() {
    let MusicList = [];
    for (let i = 0; i < 50; i++) {
        MusicList[i] = i + 10;
    }
    return (
        <div className='bg-[#121212] flex-1 overflow-y-scroll Scroll px-8 py-6'>
            <div className="min-w-full flex flex-row flex-nowrap justify-start gap-10 overflow-x-scroll Scroll">
                {
                    MusicList.map((item) => (
                        <MusicCard key={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Container