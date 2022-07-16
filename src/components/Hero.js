import { useEffect } from "react";
import { SpotifyLogoFull } from "../Assets/Icons";
const Hero = ({ connectWallet }) => {
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 120 ? addBorder() : removeBorder();
        })
    })

    const addBorder = () => {
        document.getElementById('nav').classList.add('border-b-2')
        document.getElementById('nav').classList.add('border-green-400')
        document.getElementById('nav').classList.add('glass-strong')

    }
    const removeBorder = () => {
        document.getElementById('nav').classList.remove('border-b-2')
        document.getElementById('nav').classList.remove('border-green-400')
        document.getElementById('nav').classList.remove('glass-strong')

    }
    return (
        <div className="min-h-screen glass min-w-full">
            <nav id="nav" className="flex flex-row justify-around sticky top-0 p-5">
                <SpotifyLogoFull id="svg" />
                <ul className="flex flex-row items-center justify-center transition-all ease-in-out duration-300 text-2xl ">
                    <li className="mx-6 my-2 hover:-translate-y-1  text-green-400 font-semibold " >Home</li>
                    <li className="mx-6 my-2 hover:-translate-y-1 text-green-400 font-semibold " >Listen</li>
                    <li className="mx-6 my-2 hover:-translate-y-1 text-green-400 font-semibold " >About Us</li>
                </ul>
            </nav>
            <main className="min-h-screen bg-gradient-to-b flex flex-col items-center justify-center overflow-hidden rounded-lg">
                <h2 className="font-extrabold text-8xl gradient sm:text-6xl">Explore Decentrlized Spotify</h2>
                <h2 className="text-5xl   text-green-400 my-10 font-semibold">Listen Own Earn</h2>
                <button className="bg-gradient-to-r from-emerald-500 to-lime-600 px-6 py-3 rounded-xl hover:scale-94 text-2xl text-white" onClick={connectWallet}>Connect Wallet </button>
            </main>
            <section className="min-h-screen glass mx-2 rounded-xl flex flex-row items-center justify-around">
                <main className="rounded-full h-72  w-72   gap-3 glass border-0 border-green-200  flex justify-center items-center p-2 ">
                    <img src="https://imgs.search.brave.com/BNQdG1wqrAsG52Ca_nJq2SKauXC7q4KPyjERvmr9Bzg/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS9q/dUJpcDk1VlBhOC9t/YXhyZXNkZWZhdWx0/LmpwZw"
                        className="absolute  h-72  w-72 object-cover  rounded-full"
                        alt="" />
                </main>
                <main className="rounded-xl h-76 flex-[0.8] glass border-2 border-green-200 ">
                    <div className="font-serif font-bold px-10 py-4 text-7xl text-left  text-green-400">Listening is </div>
                    <div className="font-serif font-bold px-10 py-4 text-7xl text-end  text-green-400">Everything </div>
                    <div className=" font-bold font-mono px-10 py-4 text-5xl text-center  text-green-300">
                        Music for Everyone
                    </div>
                </main>
            </section>
        </div>
    )
}
export default Hero;
