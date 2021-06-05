import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../pages/Home';
import Teste from '../pages/Teste';
import Videos from '../pages/Movi';
import Notifications from '../pages/Notifications'
import CustomDrawer from '../components/CustomDrawer';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon} from 'react-native-elements';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const TesteStack = createStackNavigator();
const VideosStack = createStackNavigator();
const NotificationsStack = createStackNavigator();

const HomeStackNavigator = ({navigation}) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        title: '',
        headerTitle: (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <View
              style={{
                width: 123,
                height: 40,
                backgroundColor: '#38354B',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                name="video-vintage"
                size={30}
                type="material-community"
                color="#fff"
              />
            </View>
          </TouchableOpacity>
        ),
        headerTransparent: true,
        headerRight: () => (
          <Icon
            name="bell"
            type="font-awesome"
            size={30}
            color="#fff"
            iconStyle={{marginRight: 20}}
            onPress={() => {navigation.navigate('Notifications')}}
          />
        ),
      }}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};

const TesteStackNavigator = ({navigation}) => {
  return (
    <TesteStack.Navigator
      screenOptions={{
        title: '',
        headerTitle: (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <View
              style={{
                width: 123,
                height: 40,
                backgroundColor: '#38354B',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                name="video-vintage"
                size={30}
                type="material-community"
                color="#fff"
              />
            </View>
          </TouchableOpacity>
        ),
        headerTransparent: true,
        headerRight: () => (
          <Icon
            name="bell"
            type="font-awesome"
            size={30}
            color="#fff"
            iconStyle={{marginRight: 20}}
            onPress={() => {navigation.navigate('Notifications')}}
          />
        ),
      }}>
      <TesteStack.Screen name="Teste" component={Teste} />
    </TesteStack.Navigator>
  );
};

const VideosStackNavigator = ({navigation}) => {
  return (
    <VideosStack.Navigator
      screenOptions={{
        title: '',
        headerTitle: (
          <Icon
            name="home"
            size={40}
            color="#999"
            onPress={() => {navigation.navigate('Notifications')}}
          />
        ),
        headerTransparent: true,
        // headerRight: () => <Icon name="home" size={18} color="#999" />,
      }}>
      <VideosStack.Screen name="Videos" component={Videos} />
    </VideosStack.Navigator>
  );
};

const NotificationsStackNavigator = ({navigation}) => {
  return (
    <NotificationsStack.Navigator screenOptions={{
      title: '',
      headerTitle: (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <View
            style={{
              width: 123,
              height: 40,
              backgroundColor: '#38354B',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              name="video-vintage"
              size={30}
              type="material-community"
              color="#fff"
            />
          </View>
        </TouchableOpacity>
      ),
      headerTransparent: true,
      headerRight: () => (
        <Icon
          name="bell"
          type="font-awesome"
          size={30}
          color="#fff"
          iconStyle={{marginRight: 20}}
          onPress={() => {navigation.navigate('Notifications')}}
        />
      ),
    }}>
      <NotificationsStack.Screen name="Notifications" component={Notifications} />
    </NotificationsStack.Navigator>
  );
};

const Routes: React.FC = () => {
  return (
    <>
      <Drawer.Navigator
        drawerStyle={{backgroundColor: '#38354B', width: 200}}
        drawerContent={CustomDrawer}
        initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackNavigator} />
        <Drawer.Screen name="Teste" component={TesteStackNavigator} />
        <Drawer.Screen name="Videos" component={VideosStackNavigator} />
        <Drawer.Screen name="Notifications" component={NotificationsStackNavigator} />
      </Drawer.Navigator>
    </>
  );
};

export default Routes;
