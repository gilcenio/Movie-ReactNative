import React, { useEffect, useState } from 'react'
import {View, StyleSheet} from 'react-native'
import messaging from '@react-native-firebase/messaging';
import { Text } from 'react-native-elements';
import LottieView from 'lottie-react-native';

const Notifications: React.FC = () => {
  const [notification, setNotification] = useState({title: undefined , body: undefined});
  
  useEffect(() => {
    messaging().onMessage(async remoteMessage => {
      // console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
      setNotification({
        title: remoteMessage.notification.title,
        body: remoteMessage.notification.body,
      });
    });

  messaging().onNotificationOpenedApp(remoteMessage => {
    // console.log('onNotificationOpenedApp: ', JSON.stringify(remoteMessage))
    setNotification({
      title: remoteMessage.notification.title,
      body: remoteMessage.notification.body,
    });
  });

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        setNotification({
          title: remoteMessage.notification.title,
          body: remoteMessage.notification.body,
        });
      }
    });
  }, []);

  return(
      <View style={style.container}>
        <Text style={style.title}>{
          notification.title?
          `${notification?.title}`: ``
        }</Text>
        <Text style={style.subtitle}>{
          notification.title? `${notification?.body}`: (
            <View style={style.animated}>
              <Text style={style.subtitle}>
                Você não possui Notificação
              </Text>
              <LottieView
                resizeMode="contain"
                style={{width: 150, height: 150}}
                source={require('../../components/Animations/sad.json')}
                autoPlay
              />
            </View>
          )
        }</Text>
      </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#1c1a29',
    paddingHorizontal: 15
  },
  title:{
    color: 'white',
    fontFamily: 'Oswald-Bold',
    fontSize: 40
  },
  subtitle:{
    color: 'white',
    fontFamily: 'Oswald-Bold',
    textAlign: 'center',
    padding: 10
  },
  animated:{
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Notifications;