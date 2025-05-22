import { useContext } from "react";
import { ThemeContext } from "./context";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import SideBar from "./components/SideBar";

const Page = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="h-full w-full">
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;

// className={` ${darkMode ? "dark" : ""}min-h-screen bg-white text-black dark:bg-black dark:text-white`}
