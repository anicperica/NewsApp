import Navbar1 from "./Components/Navbar1";
import Navbar2 from "./Components/Navbar2";
import MainContent from "./Components/MainContent";
import ArticleList from "./Components/ArticleList";
function App() {
  return (
    <>
    <div className="w-full">
      <div className="hidden lg:block ">
        <Navbar1 />
      </div>
      <Navbar2 />
      <MainContent/>
      </div>
    </>
  );
}

export default App;
