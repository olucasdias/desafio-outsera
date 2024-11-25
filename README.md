# desafio-outsera

# Desafio 1 - Testes Automatizados de Carga
    Contexto: Tentei realizar o teste de carga em uma api publica (https://serverest.dev) usando k6 com javascript.

    Análise (Print do gráfico na pasta Dashboard): 
        - O tempo médio de resposta de 8.50 segundos é muito alto para a maioria dos sistemas. Isso indica que a aplicação está demorando um tempo significativo para processar as requisições. O que pode acabar afetando a experiência do cliente/usuário que acessa o site.
        - O percentil 90 (16.31s) e o percentil 95 (16.94s) mostram que 90% das requisições estão demorando mais de 16 segundos para serem atendidas. Esse tempo de resposta é inaceitável para a maioria dos sistemas em produção, especialmente em testes de estresse.
        - O tempo máximo de 18.12 segundos para uma requisição também é um sinal de que o sistema está enfrentando sérias dificuldades em lidar com a carga (Ou seja, vários requisições simultaneas)
        - É necessário rever o desempenho do backend, tais como criações de index para o banco de dados, melhorias como cache para que evite a busca recorrente no banco de dados melhorando assim a performance e até pensar em um escalonamento de máquina ou tasks para que seja possível equilibrar o número de chamadas/requisições simultaneas. 

# Desafio 2 - Testes Automatizados de Carga
    Contexto: Fiz a automação para uma api pública que encontrei (https://reqres.in/api/users) usando playwright com javascript, a api não é uma das melhores mas tentei aplicar técnicas como:
        - Validação do retorno da API
        - Utilização de arquivo de massa para carregar dados (a fim de evitar duplicidade e deixar o código mais limpo)
        - A api não é tão boa para fazer validações após criar, deletar e atualizar o usuário! Então, não consegui fazer um get após o (POST, DELETE E PUT), porque estes dados não vinham o retorno atualizado.

# Desafio 3 - Testes E2E
    Contexto: Fiz a automação para um site publico que encontrei (https://www.saucedemo.com/) usando cypress com javascript! 
    (Não encontrei mais tantas opções de site que permitiam simular um checkout)
        - Gherkin com BDD e mapeamento por tags de cenários
        - Tentei deixar o código mais limpo possível e reaproveitando steps que já foram escritos no Gherkin, assim evita criar steps iguais
        - Fiz uma abordagem de criar métodos para que facilitasse e deixasse o código mais limpo, e também mapeamento os elementos com Page Object para que facilite a manutenção e mapeamento dos mesmos

# Desafio 4 - Testes mobile
    Contexto: Tive alguns problemas com o cypress que começou a dar crash ao tentar executar os testes com um volume auto de memória e também acabei não encontrando algum aplicativo para que fosse possível simular este testes, e acabei ficando sem tempo.

# Desafio 5 - Testes CI/CD
    Contexto: Tentei deixar um mapeamento para os 3 tipos de serviços sendo executandos apos cada commit! Testes de mobile, api e E2E.