Cordial Android RECEIVER_EXPORTED Error
---
- Copy example.app.config.ts to app.config.ts
- Replace the init values for the expo-cordial plugin in app.config.ts
- Use `npx expo run:android`
- May need to follow directions [here](https://docs.expo.dev/get-started/set-up-your-environment/?platform=android&device=simulated&mode=development-build&buildEnv=local)

The complete error:
```
Error: Exception in HostObject::get for prop 'RTNCordialSDK': java.lang.SecurityException: com.cordial.repro: One of RECEIVER_EXPORTED or RECEIVER_NOT_EXPORTED should be specified when a receiver isn't being registered exclusively for system broadcasts, js engine: hermes
    at ContextNavigator (http://192.168.0.143:8081/node_modules/expo-router/entry.bundle//&platform=android&dev=true&hot=false&lazy=true&transform.engine=hermes&transform.bytecode=true&transform.routerRoot=app:145460:24)
    at ExpoRoot (http://192.168.0.143:8081/node_modules/expo-router/entry.bundle//&platform=android&dev=true&hot=false&lazy=true&transform.engine=hermes&transform.bytecode=true&transform.routerRoot=app:145416:28)
    at App
    at ErrorToastContainer (http://192.168.0.143:8081/node_modules/expo-router/entry.bundle//&platform=android&dev=true&hot=false&lazy=true&transform.engine=hermes&transform.bytecode=true&transform.routerRoot=app:188388:24)
    at ErrorOverlay
    at withDevTools(ErrorOverlay) (http://192.168.0.143:8081/node_modules/expo-router/entry.bundle//&platform=android&dev=true&hot=false&lazy=true&transform.engine=hermes&transform.bytecode=true&transform.routerRoot=app:188107:27)
    at RCTView
    at View (http://192.168.0.143:8081/node_modules/expo-router/entry.bundle//&platform=android&dev=true&hot=false&lazy=true&transform.engine=hermes&transform.bytecode=true&transform.routerRoot=app:40612:43)
    at RCTView
    at View (http://192.168.0.143:8081/node_modules/expo-router/entry.bundle//&platform=android&dev=true&hot=false&lazy=true&transform.engine=hermes&transform.bytecode=true&transform.routerRoot=app:40612:43)
    at AppContainer (http://192.168.0.143:8081/node_modules/expo-router/entry.bundle//&platform=android&dev=true&hot=false&lazy=true&transform.engine=hermes&transform.bytecode=true&transform.routerRoot=app:40455:25)
    at main(RootComponent) (http://192.168.0.143:8081/node_modules/expo-router/entry.bundle//&platform=android&dev=true&hot=false&lazy=true&transform.engine=hermes&transform.bytecode=true&transform.routerRoot=app:119485:28)
```
Caused when `cordial.requestPushNotificationsPermission()` is called in `app/(tabs)/index.tsx`