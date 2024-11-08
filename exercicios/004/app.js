const express = require('express');
const app = express();
const { engine } = require('express-handlebars');  // Correção no modo de importação

// config
    // Template Engine
    app.engine('handlebars', engine({ defaultLayout: 'main' }));
    app.set('view engine', 'handlebars');

    // Conexão com o banco de dados MySQL
    const Sequelize = require('sequelize');
    const sequelize = new Sequelize('sistemadecadastro', 'root', '35xqnaqw', {
        host: 'localhost',
        dialect: 'mysql'
    });

    // Teste de conexão com o banco de dados
    sequelize.authenticate()
        .then(() => {
            console.log('Conexão com o banco de dados bem-sucedida!');
        })
        .catch((err) => {
            console.error('Não foi possível conectar ao banco de dados:', err);
        });

    // Rotas
    app.get('/cad', function(req, res) {
        res.render('formulario')
    });






app.listen(8080, function () {
    console.log('servidor online');
});
