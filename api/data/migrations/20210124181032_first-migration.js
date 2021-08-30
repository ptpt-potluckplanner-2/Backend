exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username', 200).notNullable()
      users.string('password', 200).notNullable()
      users.timestamps(false, true)
    })
    .createTable('potlucks', (potlucks) => {
      potlucks.increments('potluck_id');
      potlucks.string('name', 256).notNullable().unique()
      potlucks.date('date', 256).notNullable();
      potlucks.time('time', 256).notNullable();
      potlucks.string('location', 256).notNullable(); // items go here or different tbl?
  })
  .createTable('items', (items) => {
    items.increments('item_id')
    items.string('item', 128).notNullable()
    items.integer('potluck_id')
  })
}

exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('potlucks')
    .dropTableIfExists('items')
}
