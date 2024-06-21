const person = {
  firstName: 'Shea',
  lastName: 'Pone',
  hobby: 'Playing Golf',
};
console.log(person);
const fullName = person.firstName + ' ' + person.lastName;
console.log('The person has a name of:', fullName);
person.job = 'Processor';
console.log('The person has a current job of:', person.job);
person['previousJob'] = 'Substitute teacher';
console.log('The person had a previous job of:', person['previousJob']);
console.log('The complete person is:', person);
