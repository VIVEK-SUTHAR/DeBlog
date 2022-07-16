import MusicPanel from "../components/MusicPanel"
import Sidebar from "../components/Sidebar"

const Layout = () => {
    return (
        <div className="flex flex-row">
            <Sidebar />
            <MusicPanel />
        </div>
    )
}

export default Layout