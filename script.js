// Xingamento
["porra", "caralho", "pqp", "kct", "tnc", "vsf", "puta merda", "filho da puta", "foda-se", "merda", "desgraça", "viado", "bosta", "fdp", "putaria", "ta foda", "to puto"]

// Sono
["dormir", "sono", "boa noite", "vou deitar", "vou dormir", "tô com sono", "apagar", "boa noite mano", "tchau vou nessa", "to indo dormir", "boa noite irmão", "dormir agora"]

// Saúde
["saúde", "doendo", "dor", "doente", "médico", "tô mal", "tô ruim", "imunidade", "remédio", "tô sentindo", "covid", "gripe", "tô passando mal", "febre", "tô com dor", "machucou", "lesão"]

// Academia (adicionando mais reais)
["academia", "malhar", "treino", "supino", "perna", "peito", "costas", "ombro", "bíceps", "tríceps", "agachamento", "gains", "shape", "bulk", "cut", "whey", "creatina", "proteína", "musculação", "musculo", "hipertrofia", "serie", "repetição", "rep", "carga", "deadlift", "leg press"]

// Status
["beleza", "tranquilo", "tudo bem", "como vai", "como tá", "como ta", "cm vc ta", "e tu", "e aí beleza", "de boa", "na paz", "tá de boa", "e ai", "blz", "tudo", "suave", "de boa?", "ta suave?"]

// Saudação
["oi", "olá", "ola", "e aí", "salve", "opa", "fala", "bom dia", "boa tarde", "boa noite", "e ae", "eai", "fala ai", "falaê", "salve mano"]

// Despedida
["valeu", "tchau", "obrigado", "flw", "fui", "até mais", "brigado", "vlw", "obg", "valeu mano", "tmj", "tamo junto", "fui nessa"]    // Resposta normal (interação humana)
    setTimeout(() => {
        adicionarBolha(resposta, 'ai');
    }, 400 + Math.random() * 600); // tempo aleatório 0.4\~1s pra parecer mais humano
}

function adicionarBolha(txt, tipo, id = null) {
    const div = document.createElement('div');
    div.className = `msg ${tipo}`;
    if (id) div.id = id;
    div.innerText = txt;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

btn.onclick = (e) => { e.preventDefault(); processarNexus(); };
input.onkeypress = (e) => { if (e.key === 'Enter') { e.preventDefault(); processarNexus(); } };

    // Função auxiliar pra detectar se TEM alguma dessas palavras (case insensitive + flexível)
function temQualquer(palavrasArray) {
    return palavrasArray.some(palavra => 
        msgLower.includes(palavra)
    );
}

// Agora as condições ficam assim (ordem importante: mais urgente/única primeiro)

let categoriaEncontrada = false;
let resposta = "";

// 1. Xingamento / raiva (prioridade máxima pra desarmar)
if (temQualquer(["porra", "caralho", "pqp", "kct", "tnc", "vsf", "puta merda", "filho da puta", "foda-se", "merda", "desgraça", "viado", "bosta"])) {
    resposta = sorteio(interacoesLivres.xingamento);
    categoriaEncontrada = true;
}

// 2. Sono / boa noite / dormir (pessoas falam isso no final do dia)
else if (temQualquer(["dormir", "sono", "boa noite", "vou deitar", "vou dormir", "tô com sono", "apagar", "boa noite mano", "tchau vou nessa"])) {
    resposta = sorteio(interacoesLivres.horaDeDormir);
    categoriaEncontrada = true;
}

// 3. Saúde / dor / médico
else if (temQualquer(["saúde", "doendo", "dor", "doente", "médico", "tô mal", "tô ruim", "imunidade", "remédio", "tô sentindo", "covid", "gripe"])) {
    resposta = sorteio(interacoesLivres.saude);
    categoriaEncontrada = true;
}

// 4. Academia / treino / gains
else if (temQualquer(["academia", "malhar", "treino", "supino", "perna", "peito", "costas", "ombro", "bíceps", "tríceps", "agachamento", "gains", "shape", "bulk", "cut", "whey", "creatina", "proteína", "musculação"])) {
    resposta = sorteio(interacoesLivres.academia);
    categoriaEncontrada = true;
}

// 5. Carro / veículo
else if (temQualquer(["carro", "moto", "veículo", "gasolina", "pneu", "motor", "oleo", "escapamento", "som no talo", "tá caro"])) {
    resposta = sorteio(interacoesLivres.carro);
    categoriaEncontrada = true;
}

// 6. Política (deixar por último porque é polêmico e menos frequente)
else if (temQualquer(["política", "governo", "lula", "bolsonaro", "eleição", "presidente", "direita", "esquerda", "voto"])) {
    resposta = sorteio(interacoesLivres.politica);
    categoriaEncontrada = true;
}

// 7. Status / como vai (bem genérico, colocar perto do final)
else if (temQualquer(["beleza", "tranquilo", "tudo bem", "como vai", "como tá", "como ta", "cm vc ta", "e tu", "e aí beleza", "de boa", "na paz"])) {
    resposta = sorteio(interacoesLivres.status);
    categoriaEncontrada = true;
}

// 8. Saudação (último porque quase tudo começa com saudação)
else if (temQualquer(["oi", "olá", "ola", "e aí", "salve", "opa", "fala", "bom dia", "boa tarde", "boa noite"])) {
    resposta = sorteio(interacoesLivres.saudacoes);
    categoriaEncontrada = true;
}

// 9. Despedida
else if (temQualquer(["valeu", "tchau", "obrigado", "flw", "fui", "até mais", "brigado", "vlw"])) {
    resposta = sorteio(interacoesLivres.despedidas);
    categoriaEncontrada = true;
}

// 11. Namoro / relacionamento / crush
else if (temQualquer([
  "namoro", "namorada", "namorado", "crush", "ficante", "traição", "ciúme",
  "terminou", "chifre", "ex", "voltar", "romance", "beijar", "ficar com"
])) { ... }

// 12. Dinheiro / grana / salário
else if (temQualquer([
  "dinheiro", "grana", "salário", "dívida", "pagar", "emprestado", "pobre",
  "rico", "ganhar dinheiro", "pix", "conta", "fatura", "economizar"
])) { ... }

// 13. Trabalho / emprego / chefe
else if (temQualquer([
  "trampo", "trabalho", "chefe", "emprego", "demissão", "reunião",
  "home office", " CLT", "pj", "hora extra", "folga", "vale", "13º"
])) { ... }

// 14. Comida / fome / rango
else if (temQualquer([
  "fome", "comer", "comida", "rango", "almoço", "janta", "lanche",
  "pizza", "hambúrguer", "churrasco", "cozinhar", "receita", "doce"
])) { ... }

// 15. Bebida / balada / beber
else if (temQualquer([
  "beber", "cerveja", "breja", "pinga", "whisky", "bebida", "balada",
  "festa", "rolê", "chapado", "bêbado", "ressaca", "tomo um"
])) { ... }

// 16. Filme / série / Netflix
else if (temQualquer([
  "filme", "série", "netflix", "prime", "hbo", "disney", "maratona",
  "spoiler", "recomenda", "assistir", "acabou", "temporada"
])) { ... }

// 17. Jogos / videogame / mobile
else if (temQualquer([
  "jogo", "jogando", "free fire", "valorant", "fortnite", "lol", "minecraft",
  "ps5", "xbox", "nintendo", "mobile", "rank", "noob", "pro"
])) { ... }

// 18. Futebol / time / jogo
else if (temQualquer([
  "futebol", "jogo", "time", "corinthians", "flamengo", "palmeiras", "são paulo",
  "vasco", "gremio", "internacional", "libertadores", "brasileirão", "gol"
])) { ... }

// 19. Estudo / prova / faculdade
else if (temQualquer([
  "estudar", "prova", "faculdade", "vestibular", "enem", "trabalho da facul",
  "nota", "reprovar", "passar de ano", "aula", "professor chato", "EJA"
])) { ... }

// 20. Ansiedade / estresse / surtar
else if (temQualquer([
  "ansiedade", "ansioso", "estressado", "surtando", "surtei", "ataque",
  "pânico", "pressão", "nervoso", "tranquilo não", "tô mal", "depressão leve"
])) { ... }

// 21. Música / funk / sertanejo / hit do momento
else if (temQualquer(["música", "funk", "sertanejo", "playlist", "hit", "ouvir", "cantor", "música nova", "show", "festival", "pagodinho", "trap", "piseiro", "forró"])) {
    // sua lógica de resposta aqui
    categoriaEncontrada = true;
}

// 22. Viagem / rolê / férias
else if (temQualquer(["viagem", "rolê", "praia", "viajar", "férias", "passagem", "hotel", "mochilão", "road trip", "conhecer lugar", "turismo", "cidade", "interior"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 23. Família / parentes / mãe / pai
else if (temQualquer(["mãe", "pai", "família", "irmão", "irmã", "tia", "prima", "tio", "avô", "avó", "chato em casa", "briga família", "parentes"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 24. Amizade / parça / brother
else if (temQualquer(["amigo", "parça", "brother", "irmão de alma", "amizade", "trair amigo", "falso", "caô", "vazar com os amigos", "galera", "squad"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 25. Memes / zoeira / vídeo engraçado
else if (temQualquer(["meme", "zoeira", "vídeo", "engraçado", "kkkk", "surtei de rir", "calabreso", "casca de bala", "pdp", "244", "troll", "zuera"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 26. Redes sociais / Insta / TikTok
else if (temQualquer(["instagram", "tiktok", "reels", "story", "postar", "seguir", "curtir", "block", "unfollow", "trend", "viral", "for you"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 27. Celular / internet / zap / sinal
else if (temQualquer(["zap", "whatsapp", "internet", "sinal", "caiu", "wifi", "celular travando", "bateria", "carregar", "4g", "5g", "dados"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 28. Clima / tempo / calor / chuva
else if (temQualquer(["calor", "frio", "chuva", "tempo", "tá quente", "sol rachando", "tá um forno", "nublado", "tempestade", "garoa"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 29. Preguiça / acordar cedo (expansão da sono)
else if (temQualquer(["preguiça", "acordar cedo", "não tô afim", "tô morto", "cama", "dormir mais", "levantei agora", "tô moído"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 30. Compras / shopping / online
else if (temQualquer(["comprar", "shopping", "shopee", "mercado livre", "promoção", "desconto", "entrega", "compra online", "americanas", "magalu"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 31. Humor / piada / zuera pesada
else if (temQualquer(["piada", "zuera", "troll", "tô zuando", "brincadeira", "pesada", "tirar onda", "debochar"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 32. Saúde mental / ansiedade / surto (expansão)
else if (temQualquer(["surtei", "tô surtando", "crise", "tô mal", "preciso desabafar", "tô de boa não", "ataque de ansiedade", "pânico"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 33. Beleza / cabelo / maquiagem / skincare
else if (temQualquer(["cabelo", "corte", "tintura", "maquiagem", "skincare", "acne", "espinha", "ficar bonita", "hidratação", "progressiva"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 34. Moda / roupa / tênis
else if (temQualquer(["roupa", "tênis", "look", "estilo", "moda", "comprar roupa", "brechó", "streetwear", "cropped", "calça cargo"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 35. Animal de estimação / pet / cachorro / gato
else if (temQualquer(["cachorro", "gato", "pet", "meu dog", "meu gato", "filhote", "adotar", "ração", "passear com o dog"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 36. Fofura / kawaii / coisa fofa
else if (temQualquer(["fofo", "lindo", "amei", "que fofura", "shippo", "apaixonado", "melhor coisa do mundo"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 37. Raiva / estresse / putaria
else if (temQualquer(["tô puto", "raiva", "irritado", "estressado", "tô de saco cheio", "putaria", "tô nervoso"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 38. Felicidade / animado / feliz demais
else if (temQualquer(["tô feliz", "felizão", "animado", "tô de boa", "tudo ótimo", "tô nas alturas", "felicidade"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 39. Fim de semana / sexta / sextou
else if (temQualquer(["sextou", "fim de semana", "sábado", "domingo", "folga", "tô de boa no fds"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 40. Feriado / ponte / emenda
else if (temQualquer(["feriado", "ponte", "emenda", "folga longa", "reveillon", "carnaval", "tiradentes"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 41. Churrasco / farra / rolê com os amigos
else if (temQualquer(["churras", "farra", "rolê com a galera", "festa em casa", "churrascão", "open bar"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 42. Série / anime / dorama
else if (temQualquer(["anime", "dorama", "one piece", "attack on titan", "k-drama", "jujutsu", "demon slayer", "netflix série"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 43. YouTube / canal / streamer
else if (temQualquer(["youtube", "canal", "streamer", "live", "twitch", "react", "vídeo do youtube", "youtuber"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 44. Horóscopo / signo / astrologia
else if (temQualquer(["signo", "horóscopo", "ascendente", "compatibilidade", "leão", "virgem", "escorpião", "sagitário"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 45. Sonho / pesadelo / o que sonhei
else if (temQualquer(["sonhei", "sonho", "pesadelo", "sonho louco", "sonhei com você", "sonho estranho"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 46. Religião / Deus / igreja / fé
else if (temQualquer(["Deus", "igreja", "oração", "fé", "evangélico", "católico", "bíblia", "culto"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 47. Política local / prefeito / vereador
else if (temQualquer(["prefeito", "vereador", "cidade", "obra", "política local", "câmara", "eleição municipal"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 48. Notícia / aconteceu / viral
else if (temQualquer(["notícia", "aconteceu", "viral", "vídeo viral", "bbb", "reality", "fofoca do dia"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 49. BBB / reality show
else if (temQualquer(["bbb", "paredão", "eliminado", "anjo", "líder", "reality", "a farm", "bbb 26"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 50. Casamento / noivado / casar
else if (temQualquer(["casar", "noivado", "casamento", "festa de casamento", "noiva", "aliança"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 51. Filho / ser pai / maternidade
else if (temQualquer(["filho", "filha", "ser pai", "mãe de primeira viagem", "criança", "bebê"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 52. Enem / vestibular / cursinho
else if (temQualquer(["enem", "vestibular", "cursinho", "nota do enem", "redação", "prova do enem"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 53. Trânsito / engarrafamento / moto
else if (temQualquer(["trânsito", "engarrafamento", "moto", "uber", "99", "tá parado", "buzina"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 54. Delivery / iFood / uber eats
else if (temQualquer(["ifood", "delivery", "pedir comida", "uber eats", "rappi", "entrega"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 55. Cozinha / receita / fazer comida
else if (temQualquer(["receita", "cozinhar", "fazer bolo", "comida simples", "panela", "fogão"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 56. Beleza natural / academia em casa
else if (temQualquer(["treino em casa", "exercício", "alongamento", "funcional", "yoga em casa"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 57. Dança / tik tok dance / coreografia
else if (temQualquer(["dança", "coreo", "tik tok dance", "passinho", "dançar"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 58. Livro / leitura / wattpad
else if (temQualquer(["livro", "ler", "wattpad", "fanfic", "romance livro", "série livro"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 59. Arte / desenho / tattoo
else if (temQualquer(["desenho", "tattoo", "arte", "pintar", "tatuagem", "sketch"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 60. Carro / moto / IPVA / emplacar (expansão)
else if (temQualquer(["IPVA", "multa", "emplacar", "moto nova", "carro usado", "revisão"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 61. Finanças pessoais / guardar dinheiro
else if (temQualquer(["guardar dinheiro", "investir", "renda extra", "poupança", "dívida", "controle financeiro"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 62. Trampo informal / freela / bico
else if (temQualquer(["freela", "bico", "renda extra", "vender", "trabalhar por fora", "uber motor"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 63. Saúde / médico / dor de cabeça (expansão)
else if (temQualquer(["dor de cabeça", "médico", "remédio", "dor no corpo", "pressão alta", "consulta"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 64. Sono / insônia / não consigo dormir
else if (temQualquer(["insônia", "não durmo", "acordo de madrugada", "remédio pra dormir", "tô sem sono"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 65. Fofoca / fofoqueiro / contar novidade
else if (temQualquer(["fofoquei", "novidade", "conta aí", "ouvi falar", "fofoca", "falou mal"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 66. Ciúmes / possessivo / controle
else if (temQualquer(["ciúmes", "possessivo", "controlador", "ciumento", "não gosto"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 67. Término / término / superar
else if (temQualquer(["terminei", "superar", "superar ex", "término", "sofrendo", "block no ex"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 68. Festa / aniversário / comemoração
else if (temQualquer(["aniversário", "festa", "parabéns", "comemoração", "aniver"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 69. Tempo livre / hobby / o que faz
else if (temQualquer(["hobby", "tempo livre", "o que você curte fazer", "lazer", "passatempo"])) {
    // sua lógica
    categoriaEncontrada = true;
}

// 70. Pergunta aleatória / e tu? / e aí?
else if (temQualquer(["e tu?", "e aí?", "conversa fiada", "pergunta aleatória", "fala aí", "responde"])) {
    // sua lógica (pode ser um "e tu, como tá?" genérico)
    categoriaEncontrada = true;
}
