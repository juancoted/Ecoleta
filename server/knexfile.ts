import path from 'path';

module.exports = {
    client: 'sqlite3',
    connection: {
        //__dirname padroniza o caminho para um diretorio independento com SO
        filename: path.resolve(__dirname,'src', 'database','database.sqlite'),
    },
    migrations:{
        directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
    seeds:{
        directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
    },
    useNullAsDefault: true,
};

//apos criar os arquivos de tabela é kenxfile.ts
//executa no terminal o comando npx knex migrate:latest --knexfile knexfile.ts(sendo esse o nome dado pelo dev) migrate:latest