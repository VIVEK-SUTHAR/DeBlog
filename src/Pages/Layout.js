import {
    BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import SidePanel from "../components/SidePanel"
import BlogPage from "./BlogPage";
const Layout = () => {
    return (
        <div className="flex flex-row">
            <Router>
                <Routes>
                    <Route path='/' element={<SidePanel />} />
                    <Route path='/blog/:id' element={<BlogPage />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Layout