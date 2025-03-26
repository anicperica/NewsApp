import { useState } from "react";
import Navbar1 from "./Components/Navbar1";
import Navbar2 from "./Components/Navbar2";
import MainContent from "./Components/MainContent";

function App() {
const [active,setActive]=useState<string>("featured");

  return (
    <>
    <div className="w-full">
      <div className="hidden lg:block ">
        <Navbar1 />
      </div>
      <Navbar2 onTabChange={setActive} />
      <MainContent active={active}/>
      </div>
    </>
  );
}

export default App;
