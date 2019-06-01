
exports.up = function(knex, Promise) {
    return knex.schema.createTable('fabricas', table => {
        table.increments('id').primary()
        table.integer('cidade_id').unsigned()
        table.foreign('cidade_id').references('cidades.id')
        table.integer('situacao').notNull()
            .defaultTo(1)
        table.string('razaoSocial').notNull()
        table.string('cadasPor')
        table.timestamp('dataCadas')
            .defaultTo(knex.fn.now())
        table.string('atualPor')
        table.dateTime('dataAtual')
            .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('fabricas')
};
