import SearchVideo from "./components/Youtube/templates/SearchVideo";
import Videolist from "./components/Youtube/modules/Videolist";
import YoutubeMain from "./components/Youtube/templates/Main";
import Watchvedio from "./components/Youtube/templates/Watchvedio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<YoutubeMain />}>
          <Route index element={<Videolist />} />
          <Route path="search/:q" element={<SearchVideo />} />
          <Route path="watch/:id" element={<Watchvedio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
