import {
    BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import MusicPanel from "../components/MusicPanel";
import Sidebar from "../components/Sidebar";
import BlogPage from "./BlogPage";
const Layout = () => {
    return (
        <div className="flex flex-row">
            <Sidebar />
            <Router>
                <Routes>
                    <Route path='/' element={<MusicPanel />} />
                    <Route path='/blog/:id' element={<BlogPage />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Layout