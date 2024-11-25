const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');  // Importando Faker.js para gerar dados aleatórios
const data = require('../../support/data.json');

test.describe('API PUT Request', () => {

  test('Atualizando um usuário com dados aleatórios', async ({ request }) => {
    
    const updatedUserData = {
      id: data.userUpdate,
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      avatar: faker.image.avatar()
    };
    
    const response = await request.put(`${data.urlBase}/${data.userUpdate}`, {
      data: updatedUserData
    });

    expect(response.status()).toBe(data.api.status.success);

    const responseBody = await response.json();
    console.log('Resposta da atualização de usuário:', responseBody);

    expect(responseBody).toHaveProperty('email');
    expect(responseBody).toHaveProperty('first_name');
    expect(responseBody).toHaveProperty('last_name');
    expect(responseBody).toHaveProperty('avatar');
    
    expect(responseBody.email).toBe(updatedUserData.email);
    expect(responseBody.first_name).toBe(updatedUserData.first_name);
    expect(responseBody.last_name).toBe(updatedUserData.last_name);
    expect(responseBody.avatar).toBe(updatedUserData.avatar);

    expect(responseBody.id).toBe(data.userUpdate);
  });

});
