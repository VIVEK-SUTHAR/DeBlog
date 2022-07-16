import Container from "./Container";
import Navbar from "./Navbar";
export default function MusicPanel() {
    return (
        <>
            <div className="flex flex-col w-screen h-screen Scroll overflow-y-scroll">
                <Navbar />
                <Container />
            </div>
        </>
    );
}
