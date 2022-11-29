/* # Objetos - Template de Prática
**Vamos utilizar esse repositório para as práticas da aula!**

## Instruções para baixar

1. Faça o fork desse repositório.
2. No repositório com seu nome de usuário, copie a url.
3. Abra a pasta onde você guarda os materiais do curso pelo terminal.
4. Baixe o repositório usando: git clone url-copiada.
5. Abra a pasta no vscode. Vamos codar! */

// EXERCÍCIO 1 
const estudante = {
    nome: "Thamiris",
    sobrenome: "Dorville",
    matrícula: 22125144,
    notasDoSemestre: [9, 10, 8]
};
estudante.módulo = "Módulo 1" //notação de ponto
estudante["módulo"] = "Módulo 1" //notação de colchete

// ACESSANDO AS PROPRIEDADES DO OBJETO
console.log(estudante.nome);
console.log("Sua segunda nota do semestre é:", estudante.notasDoSemestre[1]);
console.log("Módulo:", estudante.módulo);

const novoEstudante = {
    ...estudante,
    nome: "Astrodev",
    notasDoSemestre: [... estudante.notasDoSemestre, 9],
    módulo: "Módulo 2"
    
}
console.log("novo estudante", novoEstudante);
// criar array estudantesLabenu e add os objetos criados
// anteriormente (estudante e novoEstudante) neste array
const estudantesLabenu = [estudante, novoEstudante];
console.log(estudantesLabenu)

// crie um objeto carrinho, que deve guardar:

const carrinho = {
    compradora: "Thamiris",
    pagamento: "débito",
    endereço: "Teresópolis",
    compras: ["batata", 1.95, 4]
}
// Imprimir a qtd de compras que existem no carrinho
console.log(carrinho);
console.log(carrinho.compras[2]);
// imprimir a qtd de itens em compras no carrinho com o uso 
// de length
console.log(carrinho.compras.length) // 3

// crie uma cópia do objeto chamada "carrinhoPresente"
//igual ao "carrinho" orig, mas
// com o nome da pessoa compradora alterado para o nome 
//de uma pessoa que você goste, e 
//forma de pagamento alterada para "cartão presente"

const carrinhoPresente = {
    ...carrinho,
     compradora: "Vinicius",
     pagamento: "Cartão Presente"

}
console.log(carrinhoPresente)