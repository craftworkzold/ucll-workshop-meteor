## Structure of a Meteor application
### Model

- Using a model in Meteor is as simple as:
```
Messages = new Mongo.Collection('messages');
```
- To insert/remove/update data you can use:
```
Messages.insert({
    message: "My message",
    time: new Date()
});
```
