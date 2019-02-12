export const APP_URL = "http://localhost:3000/api/v1";

const options = (method = "GET") => {
  return {
    headers: {
      method: method,
      Authorization: `Bearer ${localStorage.token}`
    }
  };
};

export const fetchChartData = () => {
  return fetch(`${APP_URL}/machines/data`, options()).then(res => res.json());
};
