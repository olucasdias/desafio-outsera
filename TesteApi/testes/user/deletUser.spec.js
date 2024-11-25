const { test, expect } = require('@playwright/test');
const data = require('../../support/data.json');

test.describe('API DELETE Request', () => {

  test('Deletando um usuário', async ({ request }) => {
    const response = await request.delete(`${data.urlBase}/${data.userDelete}`);

    expect(response.status()).toBe(data.api.status.successNoContent);
  });

});
