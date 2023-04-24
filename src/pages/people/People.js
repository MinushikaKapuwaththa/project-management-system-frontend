import React from "react";
import "./people.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import PeopleSearch from "./PeopleSearch";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NewPeople from "./NewPeople";
import TablePeople from "./TablePeople";

export default function Customer() {
  const [statusAll, setStatusAll] = React.useState("");

  const handleChange = (event) => {
    setStatusAll(event.target.value);
  };

  return (
    <div className="people">
      <div className="peopleglass">
        <div className="peopleContainer">
          <br />
          <Form>
            <Row
              className="align-items-center justify-content-between"
              Col
              xs={10}
            >
              <Col md={2}>
                <PeopleSearch />
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
                    <MenuItem value={10}>Status 1</MenuItem>
                    <MenuItem value={20}>Status 2</MenuItem>
                    <MenuItem value={30}>Status 3</MenuItem>
                  </Select>
                </FormControl>
              </Col>
              <Col md={3}>
                <div className="addmember">
                  <NewPeople />
                </div>
              </Col>
            </Row>
          </Form>

          <br />
          <TablePeople />
        </div>
      </div>
    </div>
  );
}
