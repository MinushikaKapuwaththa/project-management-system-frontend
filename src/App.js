import BudgetPage from "./pages/BudgetPage/BudgetPage";
import BudgetDetailForm from "./pages/BudgetDetailForm/BudgetDetailForm";
import RecordDetail from "./pages/RecordDetail/RecordDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import "./App.css";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/project/:name/:projectId/Budget" exec element={<BudgetPage />}/>
        <Route path="/project/:name/:projectId/Budget/BudgetDetailForm" element={<BudgetDetailForm />}/>
        <Route path="/project/:name/:projectId/Budget/RecordDetail" element={<RecordDetail />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
