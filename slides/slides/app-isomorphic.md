## Building web & mobile apps
### Isomorphic packages

- Native APIs can be accessed (GPS, camera, ...)

- Meteor wraps them in isomorphic packages (Camera, Geolocation, ...)

- Running the following code will work both on the web and on mobile devices:
```
Geolocation.currentLocation()
```

- On the web it will use the [HTML 5 Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation)

- On mobile devices it will use the native GPS using Cordova
