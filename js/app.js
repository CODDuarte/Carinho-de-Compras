let totalgeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent ='R$0,00';


function adicionar() {

   
    // Capturar o valor selecionado no select
    let produtoSelecionado = document.getElementById('produto').value;
    //Separar a string para pegar o valor do produto e o nome.
    let produto = produtoSelecionado.split('-')[0];
    let valorUnitario = parseFloat(produtoSelecionado.split('R$')[1]);
    // Capturar a quantidade digitado no input
    let quantidade = parseFloat(document.getElementById('quantidade').value);
    // Verificar se a quantidade é um numero válido
    //Criar um novo elemento para representar o produto no carrinho
let novoProduto = document.createElement('section');
novoProduto.classList.add('carrinho__produtos__produto');

if (quantidade === '' || isNaN(quantidade) || quantidade <= 0) {
    alert('Por favor insira uma quantidade válida');
    return;
    
}


//Adicionar o produto ao carrinho com a quantidade e o valor total
novoProduto.innerHTML = `<span class="texto-azul"> ${quantidade}x</span> ${produto} <span class="texto-azul"> R$${valorUnitario}`;

//Adicionar o novo produto ao final da lista de produtos no carrinho
let listaProdutos = document.getElementById('lista-produtos');
listaProdutos.appendChild(novoProduto);



//Atualizar o valor total do carrinho



    let preco = quantidade * valorUnitario;
    totalgeral = totalgeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalgeral}`;
    document.getElementById('quantidade').value = '';
    quantidade.focus();


    
    

}






function limpar() {
    // limpar a lista aode produtos no carrinho
    let listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = '';

    //Reiniciar o valor total do carrinho
    totalgeral = 0;

   
    let valorTotalElemento = document.getElementById('valor-total');
    valorTotalElemento.textContent = 'R$0.00';

    //Limpar o campo quantidade

    let quantidade = document.getElementById('quantidade');
    quantidade.value =''; // Define o valor como uma String vazia

    // Retornar o foco para o campo quantidade
    quantidade.focus()


    
}