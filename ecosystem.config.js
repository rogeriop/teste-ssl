export default {
  apps : [{
    name   : "teste-ssl", // Nome geral da aplicação
    script : "server.js", // O arquivo de entrada

    // Definição de variáveis para cada ambiente
    env_development: {
      "NODE_ENV": "development"
    },
    env_homologation: {
       "NODE_ENV": "homologation"
       // Você pode adicionar outras variáveis específicas de homologação aqui
       // "DB_HOST": "10.0.1.50",
       // "API_PORT": 8080
    },
    env_production: {
       "NODE_ENV": "production"
       // "DB_HOST": "db.producao.com",
       // "API_PORT": 80
    }
  }]
};
