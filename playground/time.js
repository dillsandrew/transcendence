var moment = require('moment');

// Jan 1st 1970 00:00:10 AM
// var date = new Date();
// var months = ['Jan', 'Feb'];
// console.log(date.getMonth());

new Date().getTime()
var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));