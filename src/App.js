import BudgetPage from "./pages/BudgetPage/BudgetPage";
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
import ProjectModulePage from "./pages/project/ProjectModulePage"
import ModuleForm from "./components/Module/ModuleForm"
import ModuleDetailsForm from "./components/ModuleFormEdit/ModuleDetailsForm"
import ModuleDetails from "./components/Module/ModuleDetails"
import Projects from "./pages/project/Projects";


function App() {
  return (
    <div id="outer-container">
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
            <Route path="/projects-home" component={Projects} />
            <Route path="/project-requirement" component={ProjectRequirementPage} />
            <Route path="/view-project" component={ProjectsHome}/>
            <Route path="/project-task" component={ProjectTaskPage} />
            <Route path="/project-module" component={ProjectModulePage} />
            <Route path="/moduleform" component={ModuleForm} />
            <Route path="/moduledetailsform/:id" component={ModuleDetailsForm}/>
           <Route path="/moduledetails" component={ModuleDetails}/>
            <Route path="/project/:name/:projectId/budget" component={BudgetPage}/>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
