import axios from "axios";

const api = "http://localhost:5148/api/";

export const getModules = async () => {
  return await axios({
    method: "get",
    url: api + "Module",
    headers: { "Content-Type": "application/json" },
  }).then(function (response) {
    console.log(response)
    return response;
  });
};

export const getModulesByID = async (id) => {
  return await axios({
    method: "get",
    url: api + "Module/module/"+id,
    headers: { "Content-Type": "application/json" },
  }).then(function (response) {
    console.log(response)
    return response;
  });
};


export const createModule = async (data) => {
  return await axios({
    method: "post",
    url: "http://localhost:5148/api/Module",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  })
    .then((Response) => {
      console.log(Response);
    })
    .catch((Error) => {
      console.log(Error);
    });
};

export const updateModule = async (data) => {
  return await axios({
    method: "post",
    url: "http://localhost:5148/module/update",
    headers: {
      "Content-Type": "application/json",
    },
    data: data, 
  })
    .then((Response) => {
      console.log(Response);
    })
    .catch((Error) => {
      console.log(Error);
    });
};

export const deleteModule = async (data) => {
  return await axios({
    method: "delete",
    url: "http://localhost:5148/api/Module",
    headers: {
      "Content-Type": "application/json",
    },
    data: data, 
  })
    .then((Response) => {
      console.log(Response);
    })
    .catch((Error) => {
      console.log(Error);
    });
};



