function messages() {
  return Messages.find({}, { sort: { 'time': -1 } });
}

function time(time) {
  return moment(time).format("HH:mm:ss");
}

function isOwner(message) {
  return Meteor.userId() === message.owner;
}

Template.messages.helpers({
  time: time,
  isOwner: isOwner,
  messages: messages
});
