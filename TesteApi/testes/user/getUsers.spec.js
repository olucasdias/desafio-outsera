const { test, expect } = require('@playwright/test');
const data = require('../../support/data.json');

test.describe('API GET Request Test', () => {
  
  test('Consultando usuarios', async ({ request }) => {
    const response = await request.get(data.urlBase);
    
    expect(response.status()).toBe(200);
    
    const responseBody = await response.json();
    console.log('Corpo da resposta:', responseBody);
    
    expect(Array.isArray(responseBody.data)).toBe(true);
    expect(responseBody.data.length).toBeGreaterThan(0);

    for (const user of responseBody.data) {
      // Validando se cada usuário tem as propriedades corretas
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('email');
      expect(user).toHaveProperty('first_name');
      expect(user).toHaveProperty('last_name');
      expect(user).toHaveProperty('avatar');

    }
  });

});

test.describe('API GET Request Test - User', () => {
  
  test('Consulta de usuário por ID', async ({ request }) => {
    const response = await request.get(`${data.urlBase}/1`);
    
    expect(response.status()).toBe(data.api.status.success);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('data');
    expect(responseBody).toHaveProperty('support');

    const user = responseBody.data;
    expect(user.id).toBe(data.userExpected.id);
    expect(user.email).toBe(data.userExpected.email);
    expect(user.first_name).toBe(data.userExpected.first_name);
    expect(user.last_name).toBe(data.userExpected.last_name);
    expect(user.avatar).toBe(data.userExpected.avatar);

    const support = responseBody.support;
    expect(support).toHaveProperty('url');
    expect(support).toHaveProperty('text');
    expect(support.url).toBe(data.supportExpected.url);
    expect(support.text).toBe(data.supportExpected.text);
  });

});