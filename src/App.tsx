import React, { useEffect } from 'react';
import Routes from './routes';
import {NavigationContainer} from '@react-navigation/native';
import admob, { MaxAdContentRating, BannerAd, TestIds, BannerAdSize } from '@react-native-firebase/admob';
import { Text, View } from 'react-native';

const App: React.FC = () => {
  const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';


  admob()
    .setRequestConfiguration({
      maxAdContentRating: MaxAdContentRating.PG,
      tagForChildDirectedTreatment: true,
      tagForUnderAgeOfConsent: true,
    })
    .then(() => {});


  return (
    <NavigationContainer>
      <Routes />
      
    </NavigationContainer>
    // <>
    //   <Text>Giclemn</Text>
    //   <BannerAd unitId={adUnitId} size={BannerAdSize.ADAPTIVE_BANNER}/>
    // </>
  );
};

export default App;
