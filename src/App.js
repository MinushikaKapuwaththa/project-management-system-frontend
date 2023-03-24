import BudgetPage from "./pages/BudgetPage/BudgetPage";
import BudgetDetailForm from "./pages/BudgetDetailForm/BudgetDetailForm";
import RecordDetail from "./pages/RecordDetail/RecordDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import "./App.css";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" exec element={<BudgetPage />}/>
        <Route path="/BudgetDetailForm" element={<BudgetDetailForm />}/>
        <Route path="/RecordDetail" element={<RecordDetail />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
