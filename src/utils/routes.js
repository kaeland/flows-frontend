export const APP_URL = "http://localhost:3000/api/v1";

const options = (method = "GET") => {
  return {
    headers: {
      method: method,
      Authorization: `Bearer ${localStorage.token}`
    }
  };
};

const optionsWithBody = (method = "POST", bodyObj) => {
  return {
    headers: {
      method: method,
      Authorization: `Bearer ${localStorage.token}`
    },
    body: JSON.stringify(bodyObj)
  };
};

export const fetchChartData = () => {
  return fetch(`${APP_URL}/machines/data`, options()).then(res => res.json());
};

export const fetchPlantStats = () => {
  return fetch(`${APP_URL}/plants/1`, options()).then(res => res.json())
}

export const fetchProfile = () => {
  return fetch(`${APP_URL}/profile`, options()).then(res => res.json());
};

export const editProfile = (id, options) => {
  return fetch(`${APP_URL}/users/${id}`, options).then(res =>
    res.json()
  );
};
