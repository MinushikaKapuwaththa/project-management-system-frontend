import { useState } from "react"

function ModuleListItem() {
  const [serviceList, setServiceList] = useState([{ service: "" }]);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
  };

  return (
    <form className="App" autoComplete="off">
      <div className="form-field">
        <label htmlFor="service"></label>
        {serviceList.map((singleService, index) => (
          <div key={index} className="services">
            <div className="second-division">
              {serviceList.length > 1 && index > 0 && (
                <button
                  type="button"
                  onClick={() => handleServiceRemove(index)}
                  className="btn btn-danger"
                >
                  Remove
                </button>
              )}
            </div>

            <div className="first-division">
              <input
                name="service"
                type="text"
                id="service"
                value={singleService.service}
                onChange={(e) => handleServiceChange(e, index)}
                required
              />

              {serviceList.length - 1 === index && serviceList.length < 100 && (
                <button variant="dark"
                  type="button"
                  onClick={handleServiceAdd}
                  className="btn btn-primary"
                  
                >
                  + Add
                </button>
              )}
            </div>
            
          </div>
        ))}
      </div>
      <div className="output">
        {serviceList &&
          serviceList.map((singleService, index) => (
            <ul key={index}>
              {singleService.service && <li>{singleService.service}</li>}
            </ul>
          ))}
      </div>
    </form>
  );
}

export default ModuleListItem;