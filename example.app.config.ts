import {ExpoConfig} from '@expo/config-types';

export default (): ExpoConfig => ({
  "name": "cordial-android-repro",
  "slug": "cordial-android-repro",
  "version": "1.0.0",
  "orientation": "portrait",
  "icon": "./assets/images/icon.png",
  "scheme": "myapp",
  "userInterfaceStyle": "automatic",
  "splash": {
    "image": "./assets/images/splash.png",
    "resizeMode": "contain",
    "backgroundColor": "#ffffff"
  },
  "ios": {
    "supportsTablet": true
  },
  "android": {
    "adaptiveIcon": {
      "foregroundImage": "./assets/images/adaptive-icon.png",
      "backgroundColor": "#ffffff"
    },
    package: 'com.cordial.repro',
    allowBackup: false
  },
  "web": {
    "bundler": "metro",
    "output": "static",
    "favicon": "./assets/images/favicon.png"
  },
  "plugins": [
    "expo-router",
    "expo-notifications",
    [
      'expo-cordial',
      {
        accountKey: 'example',
        channelKey: 'example',
        eventsStreamUrl: 'example.events-stream-svc.cordial.io',
        messageHubUrl: 'example.message-hub-svc.cordial.io'
      }
    ]
  ],
  "experiments": {
    "typedRoutes": true
  }
});
