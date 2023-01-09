let person = {
    firstName: 'John',
    lastName: 'Smith',
    sayHellow(){
        console.log('Hellow ' + this.firstName + ' Sir')
    }
};
person.sayHellow();