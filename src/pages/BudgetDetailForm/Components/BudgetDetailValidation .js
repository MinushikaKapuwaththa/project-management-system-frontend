export default function validate(values) {
    let errors = {};
  
    if (!values.projectName) {
      errors.projectName = 'Project Name is required';
    }
  
    if (!values.projectId) {
      errors.projectId = 'Project ID is required';
    }
  
    if (!values.EstimatedHourlyRate) {
      errors.EstimatedHourlyRate = 'Estimated Hourly Rate is required';
    } 
    if (!values.cost) {
      errors.cost = 'Cost by is required';
    }
  
    if (!values.record) {
      errors.record = 'Recorded by is required';
    }
  
    if (!values.price) {
      errors.price = 'Price is required';
    }
  
    if (!values.profit) {
      errors.profit = 'Profit is required';
    }
  
    return errors;
  };
  