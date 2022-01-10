import { Route, Routes } from "react-router-dom";
import CreateProposalPage from "./CreateProposalPage";
import ProposalItemPage from "./ProposalItemPage";
import ProposalPage from "./ProposalPage";

function App() {
  return (
    <div id="app" className="pb-4 overflow-hidden font-serif text-base">
      <Routes>
        <Route path="/" element={<ProposalPage />} />
        <Route path="/proposal" element={<ProposalPage />} />
        <Route path="/proposal/item/:slug" element={<ProposalItemPage />} />

        <Route path="/proposal/create" element={<CreateProposalPage />} />
      </Routes>
    </div>
  );
}

export default App;
