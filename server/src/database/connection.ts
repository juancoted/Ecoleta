import knex from 'knex';
import path from 'path'; //usando path para padronizar o caminho, independente do SO

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname,'database.sqlite'),//__dirname indica o caminho aonde será craido a 'darabse.sqlite' no caso dentro de database
    },
    useNullAsDefault: true,
});

export default connection;
