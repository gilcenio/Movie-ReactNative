import {useEffect} from 'react';

function Api() {
  useEffect(() => {
    // setisLoading(true);
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=06124afeddf434318d22ffaadab650e3&language=pt-BR&page=1',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(data => {
        setPopular(data.results);
        // setisLoading(false);
      });
  }, []);
}

export default Api;
