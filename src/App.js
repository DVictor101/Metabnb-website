import "./App.css";
import Homepage from "./homepage";
import { Route, Routes } from "react-router-dom";
import NftPage from "./nft--component/nftpage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/nft" element={<NftPage />} />
      </Routes>
    </div>
  );
}

export default App;
