import ProjectDashboardCostChart from "../../components/Projects/ProjectDashboard/Charts/ProjectDashboardCostChart";
import MyChart from "../../components/Projects/ProjectDashboard/Charts/ProjectDashboardTasksChart";
import ProjectDashboardTimeChart from "../../components/Projects/ProjectDashboard/Charts/ProjectDashboardTimeChart";
import ProjectDashboardTable from "../../components/Projects/ProjectDashboard/ProjectDashboardDetailsTable";
import ProjectModuleLayout from "../../layouts/ProjectModuleLayout/ProjectModuleLayout";

export default function ProjectsHomePage() {
  return (
    <div>
      <ProjectModuleLayout />
      <div class="container">
        <div class="row">
          <div class="col">
            chart 1
            <ProjectDashboardTable/>
          </div>
          <div class="col">
            chart 2
            <MyChart />
          </div>
        </div>
        <div class="row">
          <div class="col">
            chart 3
            <ProjectDashboardTimeChart/>
          </div>
          <div class="col">
            chart 4
            <ProjectDashboardCostChart/>
          </div>
        </div>
      </div>
    </div>
  );
}
