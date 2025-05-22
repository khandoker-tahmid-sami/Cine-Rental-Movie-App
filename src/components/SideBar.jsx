import CommingSoon from "../assets/icons/commingSoon.svg";
import Favourites from "../assets/icons/favourite.svg";
import Release from "../assets/icons/newRelease.svg";
import Trending from "../assets/icons/trending.svg";
import WatchLater from "../assets/icons/watchLater.svg";

const SideBar = () => {
  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
            href="#"
          >
            <img src={Trending} width="24" height="24" alt="trending" />
            <span>Trending</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg text-black"
            href="#"
          >
            <img src={Release} width="24" height="24" alt="release" />
            <span>New Releases</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg text-black"
            href="#"
          >
            <img src={CommingSoon} width="24" height="24" alt="comming soon" />
            <span>Coming Soon</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg text-black"
            href="#"
          >
            <img src={Favourites} width="24" height="24" alt="favourites" />
            <span>Favourites</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg text-black"
            href="#"
          >
            <img src={WatchLater} width="24" height="24" alt="watch later" />
            <span>Watch Later</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
