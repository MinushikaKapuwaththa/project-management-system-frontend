import { useState, useEffect } from 'react';
const EstimatedTime=100;

const useForm = (callback,validate,projects=[]) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
        callback()
    }
  }, [errors]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    if(event.target.name=="rate"){
      setValues(values => ({ ...values, "cost": event.target.value*values.estimatetime,"price": event.target.value*values.estimatetime+values.profit }));
      setValues(values => ({ ...values, "price":values.cost+values.profit }));
    }else if(event.target.name=="profit"){
      setValues(values =>({ ...values, "price": parseInt(values.cost)+ parseInt( event.target.value)}));
    }
    else if(event.target.name=="projectId"){
        const project=projects.find(project =>{
          return project.id==event.target.value;
        })
        console.log(project)
        setValues(values =>({ ...values, "projectName":project.name ,"actualtime":project.actualtime,"estimatetime":project.estimatetime}));
    }
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));

  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};
export default useForm;