import { useState } from "react";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CategoryProvider } from "./Components/context/CategoryContext";
import { SearchProvider } from "./Components/context/SearchContext";
import Navbar1 from "./Components/Navbar1";
import Navbar2 from "./Components/Navbar2";
import MainContent from "./Components/MainContent";

const queryClient = new QueryClient();

function App() {
const [active,setActive]=useState<string>("featured");

  return (
    <>
     <QueryClientProvider client={queryClient}>
      <CategoryProvider>
        <SearchProvider>
    <div className="w-full">
      <div className="hidden lg:block ">
        <Navbar1 />
      </div>
      <Navbar2 onTabChange={setActive} />
      <MainContent active={active}/>
      </div>
      </SearchProvider>
      </CategoryProvider>
      {false && <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </>
  );
}

export default App;
