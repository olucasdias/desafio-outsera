import Users from "../requests/users.request.js";
import Login from "../requests/login.request.js";
import Products from "../requests/products.request.js";

import {group} from 'k6';

export let options = {
  stages: [
    { duration: '300', target: 500 },
  ],
  thresholds: {
    http_req_duration: ['p(99)<1500'],
  },
};

export default function () {
  let user = new Users();
  let login = new Login();
  let products = new Products();

  group('List valid users', () => {
    user.list();
  });
  group('Access with admin user', () => {
    login.access();
  });
  group('List the products', () => {
    products.list();
  })
}