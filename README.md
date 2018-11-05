# trabalho de otimização
Eis aqui o repositorio do trabalho de otimização

Sobre o programa: solução heuristica da mochila;
* através do uso do problema da mochila 01, programa faz a busca pelo mehor conjunto de itens para serem feitos em uma disponibilidade de tempo para os itens que demandam tempo... resultado é o lucro que se obtém à partir da escolha

Utililzação de API do GLPK (GNU Linear Programming Kit), por um programa em Node Js para a criação de simples serviço web para o recebimento dos dados para abastecimento do problema.

GLPK
* Função objetivo e restrições no arquivo exemplo knapsack.mod
* Modelo de dados recebidos em knapsack.dat

execução exemplo 
$glpsol --model knapsack.mod --data knapsack.dat -o result.txt

Using GLPK to solve Knapsack and related problems
https://www.ssushant.in/2016/04/28/using-glpk-to-solve-knapsack-and-related-problems/
