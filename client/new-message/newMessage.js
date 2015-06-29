var MAX_LENGTH = 140;

function createMessage(evt) {
  Messages.insert({
    message: evt.target.message.value,
    time: new Date(),
    owner: Meteor.userId(),
    username: Meteor.user().username
  });
  evt.target.message.value = '';
  return false;
}

function countMessageLength(evt) {
  Session.set('messageCount', evt.target.value.length);
}

function getMessageCount() {
  return Session.get('messageCount') || 0;
}

function count() {
  return MAX_LENGTH - getMessageCount();
}

function isMessageTooLong() {
  return getMessageCount() > MAX_LENGTH;
}

function isValidMessage() {
  return getMessageCount() > 0 && !isMessageTooLong();
}

function startup() {
  Session.set('messageCount', 0);
}

Template.newMessage.events({
  'submit form': createMessage,
  'keyup input[name=message]': countMessageLength
});

Template.newMessage.helpers({
  count: count,
  isValidMessage: isValidMessage,
  isMessageTooLong: isMessageTooLong
});

Meteor.startup(startup);
