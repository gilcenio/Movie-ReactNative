import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import YouTube from 'react-native-youtube';

const Teste: React.FC = ({route}) => {
  const key = route.key;

  const data = key.toString();
  const newdata = data.replace('Videos-', '');

  console.log(newdata);
  console.log(route);
  return (
    <View style={{flex: 1, height: 200}}>
      <Text>{key}</Text>
      <YouTube
        videoId={newdata}
        apiKey="AIzaSyAcDU6bVUMCFmTsEwy24AxxAMk_CuWcqwY"
        style={{alignSelf: 'stretch', height: 200}}
      />
    </View>
  );
};

export default Teste;
