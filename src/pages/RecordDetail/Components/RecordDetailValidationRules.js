export default function validate(values) {
    let errors = {};
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