const db = require('./connection');
const { User, Posting, Specialty } = require('../models');

db.once('open', async () => {
  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    username: 'Pam198',
    email: 'pamela@testmail.com',
    password: 'password12345',
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    username: 'EHolt1998',
    email: 'eholt@testmail.com',
    password: 'password12345',
  });

  console.log('users seeded');

  await Specialty.deleteMany();

  await Specialty.create({
    name: 'Voice actor'
  })

  await Specialty.create({
    name: 'Animator'
  })

  console.log('Specialties seeded')
  process.exit();
});
