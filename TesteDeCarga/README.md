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

## Instalação

1. Clone este repositório para sua máquina:

    ```bash
    git clone https://github.com/olucasdias/desafio-outsera.git
    cd desafio-outsera/TesteDeCarga
    ```
2. Instale as dependências do projeto:

    ```bash
    npm install
    ```
3. Caso o k6 não seja instalado, instale manualmente (Ele será instalado globlamente):
    ```bash
    npm install -g k6
    ``` 

### Execução de teste com docker, influxdb e grafana:

- Subir docker-compose
  ```npm run docker:up```
- Execução K6 e saida para dashboard no Grafana:
  - ```k6 run -e NODE_ENV=PRD src/simulations/StressWith500Users.test.js --out influxdb=http://localhost:8086/k6```

### Analise teste de carga:

Análise (Print do gráfico na pasta Dashboard): 
        - O tempo médio de resposta de 8.50 segundos é muito alto para a maioria dos sistemas. Isso indica que a aplicação está demorando um tempo significativo para processar as requisições. O que pode acabar afetando a experiência do cliente/usuário que acessa o site.
        
        - O percentil 90 (16.31s) e o percentil 95 (16.94s) mostram que 90% das requisições estão demorando mais de 16 segundos para serem atendidas. Esse tempo de resposta é inaceitável para a maioria dos sistemas em produção, especialmente em testes de estresse.
        
        - O tempo máximo de 18.12 segundos para uma requisição também é um sinal de que o sistema está enfrentando sérias dificuldades em lidar com a carga (Ou seja, vários requisições simultaneas)
        
        - É necessário rever o desempenho do backend, tais como criações de index para o banco de dados, melhorias como cache para que evite a busca recorrente no banco de dados melhorando assim a performance e até pensar em um escalonamento de máquina ou tasks para que seja possível equilibrar o número de chamadas/requisições simultaneas. 
