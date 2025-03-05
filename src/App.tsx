import Navbar1 from "./Components/Navbar1";
import Navbar2 from "./Components/Navbar2";
function App() {
  return (
    <>
      <div className="hidden lg:block ">
        <Navbar1 />
      </div>
      <Navbar2 />
    </>
  );
}

export default App;
