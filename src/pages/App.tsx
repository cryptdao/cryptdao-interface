import { Route, Routes } from "react-router-dom";
import ProposalPage from "./ProposalPage";

function App() {
  return (
    <div id="app" className="pb-4 overflow-hidden font-serif text-base">
      <Routes>
        <Route path="/" element={<ProposalPage />} />
        <Route path="/proposal" element={<ProposalPage />} />
      </Routes>
    </div>
  );
}

export default App;
