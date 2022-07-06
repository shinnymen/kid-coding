import axios from "axios";

const getAllEcoles = () => {
  return axios({
    method: "get",
    url: `${process.env.REACT_APP_API_URL}api/ecole`,
  });
};

export { getAllEcoles };
