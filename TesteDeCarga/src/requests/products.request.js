import {check} from 'k6';
import http from 'k6/http';
import Utils from '../utils/utils.js';
import Chance from 'https://cdn.skypack.dev/chance@1.1.8';

export default class Products {

  constructor() {
    this.productId = '';
    this.chance = new Chance();
  }

  list() {
    let params = {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'monitor': false,
      },
    };
    let response = http.get(`${Utils.getBaseUrl()}/produtos`, params)
    check(response, {
      'status should be 200': () => response.status === 200,
    })
  }

  add(auth) {
    let payload = JSON.stringify({
      nome: this.chance.word(),
      preco: this.chance.floating({ min: 10, max: 500, fixed: 2 }),  
      descricao: this.chance.sentence({ words: 6 }), 
      quantidade: 999
    })

    let params = {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': auth,
        'monitor': false,
      },
    };

    let response = http.post(`${Utils.getBaseUrl()}/produtos`, payload, params)
    this.productId = response.json('_id')
    console.info(`Adicionou o produto com o id ${this.productId}`)
    check(response, {
      'status should be 201': () => response.status === 201,
    });
  }

  delete(auth) {
    let params = {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': auth,
        'monitor': false,
      },
    };
    let response = http.del(`${Utils.getBaseUrl()}/produtos/${this.productId}`, null, params)
    console.info(`Removeu o produto com o id ${this.productId}`)
    check(response, {
      'status should be 200': () => response.status === 200,
    });
  }
}