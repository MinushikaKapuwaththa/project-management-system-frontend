import { useState, useEffect } from 'react';

const RecordUseform= (callback,validate,projects) => {

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
    if(event.target.name=="projectId"){
      const project=projects.find(project =>{
        return project.id==event.target.value;
      })
        
      console.log(project)
      setValues(values =>({ ...values, "projectName":project.name }));
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
export default RecordUseform;
