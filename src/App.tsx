import { useState } from "react";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CategoryProvider } from "./context/CategoryContext";
import { SearchProvider } from "./context/SearchContext";
import InfoNavbar from "./Components/InfoNavbar";
import Navbar from "./Components/Navbar";
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
        <InfoNavbar />
      </div>
      <Navbar onTabChange={setActive} />
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
