import React from "react";
import "./project.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import CreateProject from "./CreateProject";
import SearchBar from "./SearchBar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ProjectTable from "./ProjectTable";

export default function Customer() {
  const [statusAll, setStatusAll] = React.useState("");

  const handleChange = (event) => {
    setStatusAll(event.target.value);
  };
  return (
    <div className="project">
      <div className="projectglass">
        <div className="proCont">
          <h5> Projects </h5>

          <Form>
            <Row
              className="align-items-center justify-content-between"
              Col
              xs={10}
            >
              <Form className="d-flex">
                <Col md={2}>
                  <SearchBar />
                </Col>

                <Col md={2}>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-helper-label">
                      Status-All
                    </InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={statusAll}
                      label="status"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Col>

                <div className="createproject">
                  <CreateProject />
                </div>
              </Form>
            </Row>
          </Form>

          <br />
          <ProjectTable />
        </div>
      </div>
    </div>
  );
}
