import React from 'react';
import {Text, View} from './styles';
import {Drawer} from 'react-native-paper';
import {DrawerContentComponentProps} from '@react-navigation/drawer';

const CustonDrawer: React.FC<DrawerContentComponentProps> = (
  props: DrawerContentComponentProps,
) => {
  const {navigation} = props;
  return (
    <>
      <View>
        <Text style={{fontFamily: 'Oswald-Bold', fontSize: 40, color: '#fff'}}>
          Movie
        </Text>
      </View>

      <Drawer.Section style={{marginTop: 10}}>
        <Drawer.Item
          icon="movie"
          label="Filmes"
          style={{backgroundColor: '#fff'}}
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        <Drawer.Item
          icon="monitor-dashboard"
          label="Séries"
          style={{backgroundColor: '#fff'}}
          onPress={() => {
            navigation.navigate('Teste');
          }}
        />
        {/* <Drawer.Item
          icon="home"
          label="Teste"
          style={{backgroundColor: '#fff'}}
          onPress={() => {
            navigation.navigate('Notifications');
          }}
        /> */}
      </Drawer.Section>
    </>
  );
};

export default CustonDrawer;
