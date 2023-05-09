import BudgetPage from "./pages/BudgetPage/BudgetPage";
import BudgetDetailForm from "./pages/BudgetDetailForm/BudgetDetailForm";
import RecordDetail from "./pages/RecordDetail/RecordDetail";
import "./App.css";
import Navbar from "./layouts/Navbar/NavbarComponent";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Customer from "./pages/customers/Customer";
import Ourteam from "./pages/ourteam/Ourteam";
import Companies from "./pages/companies/Companies";
import People from "./pages/people/People";
import Create from "./pages/create/Create";
import ProjectsHome from "./pages/project/ProjectsHomePage";
import ProjectRequirementPage from "./pages/project/ProjectRequirementPage";
import ProjectTaskPage from "./pages/project/ProjectTaskPage";

function App() {
  return (
    <div className="App" id="outer-container">
      <div id="NavBar">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/customer" component={Customer} />
            <Route path="/ourteam" component={Ourteam} />
            <Route path="/create" component={Create} />
            <Route path="/companies" component={Companies} />
            <Route path="/people" component={People} />

            {/* Project moduel routes */}
            <Route path="/projects-home" component={ProjectsHome} />
            <Route path="/project-requirement" component={ProjectRequirementPage} />
            <Route path="/project-task" component={ProjectTaskPage} />

            <Route path="/project/:name/:projectId/budget" component={BudgetPage}/>
            <Route path="/project/:name/:projectId/budget/BudgetDetailForm" component={BudgetDetailForm}/>
            <Route path="/project/:name/:projectId/budget/RecordDetail" component={RecordDetail}/>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
