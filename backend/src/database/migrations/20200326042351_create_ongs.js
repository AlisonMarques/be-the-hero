
exports.up = function(knex) {
    //método up é responsável por criar a tabela.

 return knex.schema.createTable('ongs', function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
});
};

exports.down = function(knex) {
    //método down serve para deletar a tabela se caso acontecer um erro.
   return knex.schema.dropTable('ongs');
};