<h1 align="center"> Avaliação - Automação de Testes - Outsera</h1>

<h1 align="center"></h1>
  
Documentação com teste e desafios teste Carga

## Teconologias usadas:  
- [JS](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) 
- [npm](https://www.npmjs.com/)
- [k6](https://k6.io/)
- [docker](https://www.docker.com/get-started)
- [Grafana](https://grafana.com/)
- [Influxdb](https://github.com/influxdata/influxdb)

### Execução de teste com docker, influxdb e grafana:
- With npm:
  - ```npm run StressWith500Users```    
- Without K6 and output to Grafana:
  - ```k6 run -e NODE_ENV=PRD src/simulations/StressWith500Users.test.js --out influxdb=http://localhost:8086/outsera```