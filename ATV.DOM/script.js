
const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.getElementById('lista-nao-ordenada');
const link = document.querySelector('a');
const listaOrdenada = document.getElementById('lista-ordenada');


titulo.innerText = 'Bem-vindo ao Projeto!';
link.innerText = 'Visite a Prozeducação';


listaNaoOrdenada.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

listaOrdenada.innerHTML = `
    <li><a href="https://www.example1.com">Exemplo 1</a></li>
    <li><a href="https://www.example2.com">Exemplo 2</a></li>
    <li><a href="https://www.example3.com">Exemplo 3</a></li>
`;
