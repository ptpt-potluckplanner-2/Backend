exports.seed = function (knex) {
    return knex('users').then(function () {
      return knex('users').insert([
        {
          username: 'Timmy Nguyen',
          password: 'pass1234',
          email: 'fake1@fake.com',
        },
        {
          username: 'Mark Stahl',
          password: 'pass12345',
          email: 'fake2@fake.com',
        },
        {
          username: 'Tony Lu',
          password: 'pass123456',
          email: 'fake3@fake.com',
        },
      ]);
    });
  };
  