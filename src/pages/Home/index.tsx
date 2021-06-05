import React, {useEffect, useState} from 'react';
import {ViewFlat} from './styles';
import {FlatList, SafeAreaView, View} from 'react-native';
import CarouselMovie from '../../components/CarouselMovie';
import LottieView from 'lottie-react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import {FAB} from 'react-native-paper';

const Home: React.FC = () => {
  const [popular, setPopular] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [pageCurrent, setpageCurrent] = useState(1);

  useEffect(() => {
    setisLoading(true);
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=06124afeddf434318d22ffaadab650e3&language=pt-BR&page=' +
        pageCurrent,
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
        setisLoading(false);
      });
  }, [pageCurrent]);

  // function RenderFuter() {
  //   return isLoading ? (
  //     <LottieView
  //       resizeMode="contain"
  //       style={{width: 200, height: 200}}
  //       source={require('../../components/Animations/movie.json')}
  //       autoPlay
  //     />
  //   ) : null;
  // }

  function LoadSmaller() {
    setpageCurrent(pageCurrent - 1);
    setisLoading(true);
  }

  function Tempo() {
    setisLoading(true);
    setTimeout(() => {
      setpageCurrent(pageCurrent + 1);
      setisLoading(false);
    }, 1000);
  }

  return (
    <ViewFlat>
      <SafeAreaView>
        {isLoading ? (
          <LottieView
            resizeMode="contain"
            style={{width: 200, height: 200}}
            source={require('../../components/Animations/movie.json')}
            autoPlay
          />
        ) : (
          <FlatList
            data={popular}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{flexDirection: 'row'}}
            renderItem={PopularShow}
            horizontal={true}
            // ListFooterComponent={RenderFuter}
            onEndReached={Tempo}
            onEndReachedThreshold={0}
            refreshing={isLoading}
            onRefresh={Tempo}
            // inverted={-1}
          />
        )}
      </SafeAreaView>
    </ViewFlat>
  );
};

function PopularShow(item: any) {
  const {
    // original_title,
    overview,
    poster_path,
    popularity,
    release_date,
    title,
    // video,
    vote_average,
    vote_count,
    // id,
  } = item.item;

  const imageUrl = 'https://image.tmdb.org/t/p/w500' + poster_path;

  return (
    <View style={{paddingTop: 60}}>
      <CarouselMovie
        informacao={overview}
        votos={vote_count}
        datainicial={release_date}
        popularidade={popularity}
        avaliacao={vote_average}
        image={imageUrl}
        title={title}
      />
    </View>
  );
}
export default Home;
