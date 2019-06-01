
exports.up = function(knex, Promise) {
    return knex.schema.createTable('produtos', table => {
        table.increments('id').primary()
        table.integer('fabrica_id').unsigned()
        table.foreign('fabrica_id').references('fabricas.id')
        table.boolean('ativo')
            .notNull().defaultTo(true)
        table.string('nomeProd').notNull()
        table.decimal('tabela1', 6, 2)
        table.string('cadasPor')
        table.timestamp('dataCadas')
            .defaultTo(knex.fn.now())
        table.string('atualPor')
        table.dateTime('dataAtual')
            .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('produtos')
};
