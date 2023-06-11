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

