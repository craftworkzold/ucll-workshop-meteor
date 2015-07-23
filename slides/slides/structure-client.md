## Structure of a Meteor application
### Client

- The client side logic primarily contains templates, event handling and plain JavaScript

- To actually change data, you use MiniMongo (it emulates a MongoDB database on the client)

- Templates are written using Spacebars (template engine):
```
{{#if currentUser}}
    <h1>Welcome user</h1>
{{/if}}
```

- jQuery is allowed within templates
