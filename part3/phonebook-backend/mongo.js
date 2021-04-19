const mongoose = require('mongoose');

const password = process.argv[2];
const name = process.argv[3];
const number = process.argv[4];

const connectionString = `mongodb+srv://fullstack:${password}@fullstackopen.rkma9.mongodb.net/phone-number-app?retryWrites=true&w=majority`;

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const schema = new mongoose.Schema({
  name: String,
  number: String
});

const Person = mongoose.model('person', schema);

if (name && number) {
  const phoneNumber = new Person({
    name: name,
    number: number
  });

  phoneNumber.save().then(result => {
    console.log(`added ${result.name} number ${result.number} to phonebook`);
    mongoose.connection.close();
  });
} else {
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person);
    });
    mongoose.connection.close();
  });
}
