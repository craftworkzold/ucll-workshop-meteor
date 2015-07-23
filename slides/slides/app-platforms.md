## Building web & mobile apps
### Platforms
- Meteor uses Cordova to support Android and iOS
- To make an application available for Android devices, you simply use:
```
meteor add-platform android
meteor run android
```
- If you don't have the Android SDK installed, you can install it with the Meteor CLI as well:
```
meteor install-sdk android
```
- To run it on an actual device, you use:
```
meteor run android-device
```
