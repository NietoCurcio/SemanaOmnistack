const request = require ('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach( async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
        //zera o dado no banco de dados de teste, para nao dar erro de que ja existe o dado na tabela
        //antes de fazer essa nova migration
    }); 
    //async ... await porque o codigo "npx knex migrate: latest" pode demorar pra executar

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG',async () => {
        const response = await request(app)
        .post('/ongs')
        //.set('Authorization', 'id da ong')
        .send({
                name: "APAD2",
                email: "contado@apad.com.br",
                whatsapp: "4700000000",
                city: "Rio do sul",
                uf: "SC"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});

//teste de integração, testa app como um todo, para ver se o retorno é valido
//chamada api, no frontend usamos o axios, no backend usa-se supertest p chamadas api   