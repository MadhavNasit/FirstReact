const getMoviesFromFetchApi = () => {
  let data;
  fetch('https://reactnative.dev/movies.json')
    .then((response) => response.json())
    .then((json) => {
      console.warn(json);
      data = json;
    })
    .catch((error) => {
      console.error(error);
    });
  console.log(data);
  return data;
};

export { getMoviesFromFetchApi }; 