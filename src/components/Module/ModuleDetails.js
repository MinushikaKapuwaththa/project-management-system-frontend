import React, { useState, useEffect } from "react";
import { getModules } from "../../services/moduleService";
import "./ModuleDetails.css";


function ModuleDetails() {
  const [moduleList, setmoduleList] = useState([]);

  useEffect(() => {
    getModules().then((res) => setmoduleList(res.data.result));
    console.log(moduleList);
  }, []);

  return (
    <div className="container shadow p-3 mb-5 bg-light rounded">
      <div className="p-2 ">
        
          <h2>Module Details</h2>
        
      </div>
        {moduleList.map((item, index) => {
          return (
            <div key={index}>
             <table table class="table table-striped">
                <tr>
                  <th>Module Id</th>
                  <th><b> {item.id} </b></th>
                </tr>

                <tr>
                  <th>Name</th>
                    <th><b>{item.name} </b></th>
                </tr>

                  <tr>
                    <th>Description</th>
                    <td>{item.description}</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td>{item.description}</td>
                  </tr>


                <tr>
                  <th> Start Date</th>
                  <td>{item.startDate}</td>
                </tr>
                <tr>
                  <th>End Date</th>
                  <td>{item.endDate}</td>
                </tr>
                </table>
              <hr />
            </div>
          );
        })}
      </div>

  );
}

export default ModuleDetails;
