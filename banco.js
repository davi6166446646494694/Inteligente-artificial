// banco.js
const categorias = [
  "cumprimentos","espaco","fundo do mar","carros","motos","fotos","comida","animais","musica","filmes",
  "jogos","tecnologia","esportes","viagens","clima","profissoes","roupas","humor","sentimentos","escola"
];

let banco = [];

// Cada categoria vai ter 2500 palavras → 20 x 2500 = 50.000
categorias.forEach(cat => {
  for(let i=1; i<=2500; i++){
    banco.push({
      categoria: cat,
      palavras: [`${cat}_palavra${i}`],
      respostas: [`Resposta para ${cat}_palavra${i}`, `Outra resposta para ${cat}_palavra${i}`]
    });
  }
});

// Exportar para usar no HTML
export { banco };
