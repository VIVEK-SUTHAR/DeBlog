import { Home, Search, SpotifyLogoFull, YLibrary } from "../Assets/Icons";

function Sidebar() {
  return (
    <div className="bg-[#181818] min-h-screen w-72 stop-0   text-[#ffffff]  ">
      <div className="title ">
        <div className="pl-8 py-8  SpotifyLogi">
          <SpotifyLogoFull />
        </div>
        <ul>
          <li>
            <a href="/" className="flex items-center mb-8 pl-8 ">
              <Home />
              <span className="mx-4">Home</span>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center mb-8 pl-8">
              <Search />
              <span className="mx-4">Search</span>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center mb-8 pl-8">
              <YLibrary />
              <span className="mx-4">Your Library</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

  );
}

export default Sidebar;
