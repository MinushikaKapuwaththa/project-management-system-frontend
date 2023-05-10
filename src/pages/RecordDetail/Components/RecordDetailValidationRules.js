export default function validate(values) {
    let errors = {};
    if (!values.projectName   ) {
        errors.projectName = 'Project Name is required';
    }
    if (!values.projectId  ) {
        errors.projectId = 'Project ID is required';
    }

    if(!values.clientId){
        errors.clientId= 'Client Person ID   is required';
    }
    if(!values.date){
        errors.date= 'Date by is required';
    }

    if(!values.Amount){
        errors.Amount= 'Amount is required'

    }
    if(!values.record){
        errors.record= 'Recorder Name required'
    }
    
    return errors;
  };