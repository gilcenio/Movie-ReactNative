import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {ProgressCircle} from 'react-native-svg-charts';
import {Badge} from 'react-native-elements';
// import YouTube from 'react-native-youtube';
// import {useNavigation} from '@react-navigation/native';

interface props {
  title: string;
  image: any;
  avaliacao: any;
  informacao: string;
  votos: any;
  datainicial: any;
  popularidade: any;
}

const CarouselMovie: React.FC<props> = ({
  title,
  image,
  avaliacao,
  informacao,
  votos,
  datainicial,
  popularidade,
}) => {
  const imageUrl = image;

  const vote = avaliacao.toString();
  const newvote = vote.replace('.', '');
  const newvote_average: any = 0 + '.' + newvote;

  const data = datainicial.toString();
  const newdata = data.replace('2021-03-24', '24/03/2021');
  // const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={[styles.container]}>
        <View style={[styles.viewimage]}>
          <Image style={[styles.image]} source={{uri: imageUrl}} />
        </View>
        <View style={[styles.viewtexte]}>
          <Text style={[styles.title]}>{title}</Text>
          <View style={[styles.information]}>
            <View style={[styles.circle]}>
              <ProgressCircle
                style={{height: 40, width: 40}}
                progress={newvote_average}
                progressColor={'rgb(0, 255, 0)'}
              />
            </View>
            <View style={[styles.notes]}>
              <Text style={[styles.texte]}>{avaliacao}</Text>
            </View>
          </View>
          <View style={[styles.viewbadge]}>
            <Badge
              badgeStyle={{height: 30, margin: 5}}
              textStyle={styles.badge}
              value={'Votos: ' + votos}
              status="success"
            />
            <Badge
              badgeStyle={{height: 30, margin: 5}}
              textStyle={styles.badge}
              value={'Data: ' + newdata}
              status="warning"
            />
            <Badge
              badgeStyle={{height: 30, margin: 5}}
              textStyle={styles.badge}
              value={'Popularidade: ' + popularidade}
              status="primary"
            />
          </View>
          <View style={{width: 370}}>
            <Text style={[styles.texte]}>{informacao}</Text>
          </View>
          {/* <TouchableOpacity
            onPress={() => {
              navigation.navigate('Videos', {
                base: 'aJMfEz2cobI',
              });
            }}>
            <Text>aqui</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38354B',
    margin: 10,
    borderRadius: 10,
  },
  viewimage: {
    height: 470,
    width: 390,
  },
  viewtexte: {
    flex: 1,
    width: 390,
    alignItems: 'center',
    backgroundColor: '#38354B',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  image: {
    width: 390,
    height: 470,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    color: '#fff',
    fontFamily: 'Oswald-Bold',
    fontSize: 20,
  },
  information: {
    flexDirection: 'row',
    width: 390,
    marginTop: 10,
  },
  texte: {
    fontFamily: 'Oswald-Light',
    color: '#fff',
    fontSize: 20,
  },
  circle: {
    marginLeft: 10,
  },
  notes: {
    marginLeft: 10,
  },
  viewbadge: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 390,
    flexDirection: 'row',
    margin: 5,
  },
  badge:{
    fontFamily: 'Oswald-Bold', 
    fontSize: 13
  }
});

export default CarouselMovie;
