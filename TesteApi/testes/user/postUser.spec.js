const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
const data = require('../../support/data.json');

test.describe('API POST Request', () => {

  test('Criando novo usuário', async ({ request }) => {
    
    const userData = {
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      avatar: faker.image.avatar()
    };
    
    const response = await request.post(data.urlBase, {
      data: userData
    });

    expect(response.status()).toBe(data.api.status.created);

    const responseBody = await response.json();
    console.log('Retorno para criação do user:', responseBody);

    expect(responseBody).toHaveProperty('id'); 
    expect(responseBody.email).toBe(userData.email);
    expect(responseBody.first_name).toBe(userData.first_name);
    expect(responseBody.last_name).toBe(userData.last_name);
    expect(responseBody.avatar).toBe(userData.avatar);
  });

});
