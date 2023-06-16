import React, { useState, useEffect } from "react";
import "./ProjectModulePage.css";
import { Link } from "react-router-dom";
import ModuleProgressBar from "../../components/Module/ModuleProgressBar";
import ModuleRedioButton from "../../components/Module/ModuleRedioButton";
import { getModules } from "../../services/moduleService";
import EastIcon from "@mui/icons-material/East";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import Moment from 'react-moment';

export default function ProjectModulePage() {
  const [moduleList, setmoduleList] = useState([]);
  const history = useHistory();


  useEffect(() => {
    getModules().then((res) => setmoduleList(res.data.result));
    // console.log(moduleList); 
  }, []);

  const handleClickEditModule = (id) => {
    history.push(`/moduledetailsform/${id}`);
  };

  return (
    <div  className="container shadow p-3 mb-5 bg-white rounded">
      <div className="M1">
        <h1>Modules</h1>
      </div>
        <div className="b1">
          <Link to="moduleform">
            <button type="button" className="btn btn-primary">
              Creat Module
            </button>
          </Link>
        </div>
        <div class="w-50 p-3">
          <div className="p-5">
            <form class="form-inline d-flex ">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <span>
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </span>
             <div><ModuleRedioButton/></div>
            </form>
          </div>
        </div>
        {moduleList.map((item, index) => (
          <div key={index} className="row">
            <div className="col">
              <div>
                <h5>
                  <b>{item.id} </b> - {item.name}
                </h5>
              </div>
            </div>
            <div className="col">
              <div>
                <ModuleProgressBar />
              </div>
            </div>
            <div className="col">
              <div>stutus: {item.status}</div>
            </div>
            <div className="col"> Start date : <Moment format="YYYY/MM/DD">{item.created}</Moment></div>
            <div className="col">End Date : <Moment format="YYYY/MM/DD">{item.endDate}</Moment></div>
            <div className="col">

              <button onClick={() => handleClickEditModule(item.id)} type="button" class="btn btn-link">
                <EditIcon color="action" />
              </button>


              <Link to="/moduledetails">
                <button type="button" class="btn btn-link">
                  <h2>
                    <EastIcon color="action"/>
                  </h2>
                </button>
              </Link>
              <DeleteIcon color="action" />

            </div>
            <div>
              <hr />
            </div>
          </div>
          
        ))}
        
      </div>
    
  );
}
