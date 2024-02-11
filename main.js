const perguntas = [
  {
    pergunta: "O que é JavaScript?",
    respostas: [
      "Uma linguagem de marcação",
      "Uma linguagem de programação",
      "Um banco de dados"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função do operador '===' em JavaScript?",
    respostas: [
      "Comparação de valores sem levar em conta o tipo",
      "Atribuição de valores",
      "Comparação estrita de valores e tipos"
    ],
    correta: 2
  },
  {
    pergunta: "Qual função é usada para imprimir no console em JavaScript?",
    respostas: [
        "print()",
        "log()",
        "console.log()",
    ],
    correta: 2
  },
  {
    pergunta: "O que é uma função em JavaScript?",
    respostas: [
      "Um loop",
      "Um bloco de código reutilizável",
      "Um operador lógico"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a sintaxe correta para um comentário de uma linha em JavaScript?",
    respostas: [
      "// Comentário",
      "/* Comentário */",
      "# Comentário"
    ],
    correta: 0
  },
  {
    pergunta: "O que é o DOM em JavaScript?",
    respostas: [
      "Um modelo de design de objetos",
      "Um modelo de documento online",
      "Uma interface de programação de aplicações"
    ],
    correta: 2
  },
  {
    pergunta: "O que é o JSON em JavaScript?",
    respostas: [
      "Uma linguagem de estilização",
      "Um formato de dados",
      "Um método de iteração de arrays"
    ],
    correta: 1
  },
  {
    pergunta: "Como se chama o método para adicionar um elemento no final de um array em JavaScript?",
    respostas: [
      "push()",
      "add()",
      "append()"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função do operador '++' em JavaScript?",
    respostas: [
      "Incrementar um valor",
      "Decrementar um valor",
      "Multiplicar um valor por ele mesmo"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a finalidade do evento 'onclick' em JavaScript?",
    respostas: [
      "Capturar cliques do mouse",
      "Detectar teclas pressionadas",
      "Monitorar a rotação do dispositivo"
    ],
    correta: 0
  },
];

//buscar elemento HTML e colocar numa variável
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for(const item of perguntas ){
  const quizItem = template.content.cloneNode(true)
  //mudando conteúdo do h3
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    //mudando conteúdo do span
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      
      corretas.delete(item)
      if(estaCorreta){
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    
    
    quizItem.querySelector('dl').appendChild(dt)    
  }
  //removendo a primeira resposta que consta do html
  quizItem.querySelector('dl dt').remove()
  
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
}