// Função auxiliar (já deve ter, mas reforçando)
function temQualquer(palavrasArray) {
    return palavrasArray.some(palavra => msgLower.includes(palavra.toLowerCase()));
}

// Verificação anti-loop: não processar a mesma mensagem de novo
if (msg.trim() === '' || msg.toLowerCase().includes("recebi! o scroll automático")) {
    // Ignora mensagens de confirmação repetidas ou vazias
    return;
}

// 1. Xingamento / raiva pesada (prioridade máxima)
if (temQualquer(["porra", "caralho", "pqp", "kct", "tnc", "vsf", "puta merda", "filho da puta", "foda-se", "merda", "desgraça", "viado", "bosta", "fdp", "putaria", "ta foda", "to puto", "tô puto"])) {
    resposta = sorteio(interacoesLivres.xingamento);
    categoriaEncontrada = true;
}

// 2. Término / sofrimento amoroso
else if (temQualquer(["terminei", "término", "superar", "superar ex", "sofrendo", "chifre", "traição"])) {
    resposta = sorteio(interacoesLivres.termino);
    categoriaEncontrada = true;
}

// 3. Ansiedade / surto / crise
else if (temQualquer(["ansiedade", "ansioso", "surtando", "surtei", "crise", "ataque", "pânico", "depressão", "tô mal demais"])) {
    resposta = sorteio(interacoesLivres.ansiedade);
    categoriaEncontrada = true;
}

// 4. Saúde / dor / médico
else if (temQualquer(["saúde", "dor", "doendo", "doente", "médico", "tô mal", "remédio", "gripe", "febre", "covid", "dor de cabeça", "pressão"])) {
    resposta = sorteio(interacoesLivres.saude);
    categoriaEncontrada = true;
}

// 5. Namoro / crush / relacionamento
else if (temQualquer(["namoro", "namorada", "namorado", "crush", "ficante", "ficar com", "ciúmes", "ciumento", "possessivo"])) {
    resposta = sorteio(interacoesLivres.namoro);
    categoriaEncontrada = true;
}

// 6. Fome / comida / delivery
else if (temQualquer(["fome", "comer", "comida", "rango", "almoço", "janta", "lanche", "pizza", "ifood", "delivery"])) {
    resposta = sorteio(interacoesLivres.comida);
    categoriaEncontrada = true;
}

// 7. Bebida / balada / ressaca
else if (temQualquer(["beber", "cerveja", "breja", "pinga", "balada", "festa", "chapado", "ressaca"])) {
    resposta = sorteio(interacoesLivres.bebida);
    categoriaEncontrada = true;
}

// 8. Sono / preguiça / insônia
else if (temQualquer(["sono", "dormir", "boa noite", "vou deitar", "tô com sono", "preguiça", "insônia", "não durmo", "tô morto", "cama"])) {
    resposta = sorteio(interacoesLivres.sono);
    categoriaEncontrada = true;
}

// 9. Sextou / fim de semana / feriado
else if (temQualquer(["sextou", "fim de semana", "sábado", "domingo", "feriado", "ponte", "carnaval"])) {
    resposta = sorteio(interacoesLivres.fds);
    categoriaEncontrada = true;
}

// 10. Trabalho / trampo / chefe
else if (temQualquer(["trampo", "trabalho", "chefe", "emprego", "demissão", "home office", "hora extra", "freela", "bico"])) {
    resposta = sorteio(interacoesLivres.trabalho);
    categoriaEncontrada = true;
}

// 11. Dinheiro / grana / dívida
else if (temQualquer(["dinheiro", "grana", "salário", "dívida", "pix", "conta", "fatura", "renda extra"])) {
    resposta = sorteio(interacoesLivres.dinheiro);
    categoriaEncontrada = true;
}

// 12. Futebol
else if (temQualquer(["futebol", "time", "jogo", "gol", "corinthians", "flamengo", "palmeiras"])) {
    resposta = sorteio(interacoesLivres.futebol);
    categoriaEncontrada = true;
}

// 13. Jogos / videogame
else if (temQualquer(["jogo", "free fire", "valorant", "fortnite", "lol", "ps5", "rank"])) {
    resposta = sorteio(interacoesLivres.jogos);
    categoriaEncontrada = true;
}

// 14. Filme / série / anime
else if (temQualquer(["filme", "série", "netflix", "anime", "maratona", "spoiler"])) {
    resposta = sorteio(interacoesLivres.filmes);
    categoriaEncontrada = true;
}

// 15. Música / hit / playlist
else if (temQualquer(["música", "funk", "sertanejo", "playlist", "show", "pagodinho"])) {
    resposta = sorteio(interacoesLivres.musica);
    categoriaEncontrada = true;
}

// 16. Memes / zoeira
else if (temQualquer(["meme", "zoeira", "kkkk", "calabreso", "pdp", "troll"])) {
    resposta = sorteio(interacoesLivres.memes);
    categoriaEncontrada = true;
}

// 17. Clima / calor / chuva
else if (temQualquer(["calor", "chuva", "frio", "tempo", "tá quente"])) {
    resposta = sorteio(interacoesLivres.clima);
    categoriaEncontrada = true;
}

// 18. Academia / treino
else if (temQualquer(["academia", "malhar", "treino", "supino", "gains", "whey"])) {
    resposta = sorteio(interacoesLivres.academia);
    categoriaEncontrada = true;
}

// 19. Estudo / prova / Enem
else if (temQualquer(["estudar", "prova", "enem", "faculdade", "vestibular"])) {
    resposta = sorteio(interacoesLivres.estudo);
    categoriaEncontrada = true;
}

// 20. Carro / moto / trânsito
else if (temQualquer(["carro", "moto", "gasolina", "trânsito", "IPVA", "uber"])) {
    resposta = sorteio(interacoesLivres.carro);
    categoriaEncontrada = true;
}

// 21. Família / mãe / pai
else if (temQualquer(["mãe", "pai", "família", "irmão", "prima"])) {
    resposta = sorteio(interacoesLivres.familia);
    categoriaEncontrada = true;
}

// 22. Status / como vai
else if (temQualquer(["beleza", "tranquilo", "tudo bem", "como vai", "como tá", "e tu", "de boa"])) {
    resposta = sorteio(interacoesLivres.status);
    categoriaEncontrada = true;
}

// 23. Saudação
else if (temQualquer(["oi", "e aí", "salve", "opa", "fala", "bom dia", "boa tarde"])) {
    resposta = sorteio(interacoesLivres.saudacoes);
    categoriaEncontrada = true;
}

// 24. Despedida
else if (temQualquer(["valeu", "tchau", "obrigado", "flw", "fui", "vlw", "tmj"])) {
    resposta = sorteio(interacoesLivres.despedidas);
    categoriaEncontrada = true;
}

// 25. Neutro / nada não (última chance antes do fallback)
else if (temQualquer(["nada", "nada não", "nada demais", "to de boa", "tranquilo só", "sem nada"])) {
    resposta = sorteio(interacoesLivres.neutro);
    categoriaEncontrada = true;
}

// Se nenhuma categoria bateu → fallback
if (!categoriaEncontrada) {
    // Aqui vai seu código de wiki ou resposta genérica
    // Exemplo:
    resposta = "Peraí mano, deixa eu ver isso direito...";
    // ou chamar a API de pesquisa, LLM genérico, etc.
}

// Função de adicionar bolha com scroll inteligente (substitua a atual)
function adicionarBolha(txt, tipo, id = null) {
    const div = document.createElement('div');
    div.className = `msg ${tipo}`;
    if (id) div.id = id;
    div.innerText = txt;
    chatBox.appendChild(div);

    // Scroll só se o usuário já estava quase no final
    const isAtBottom = (chatBox.scrollHeight - chatBox.scrollTop - chatBox.clientHeight) < 150;
    if (isAtBottom) {
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}else if (temQualquer(["música", "funk", "sertanejo", "playlist", "hit", "show", "pagodinho", "piseiro", "forró"])) {
    resposta = sorteio(interacoesLivres.musica);
    categoriaEncontrada = true;
}

// 19. Memes / zoeira / kkkk
else if (temQualquer(["meme", "zoeira", "kkkk", "calabreso", "pdp", "casca de bala", "troll", "zuera"])) {
    resposta = sorteio(interacoesLivres.memes);
    categoriaEncontrada = true;
}

// 20. Redes sociais / Insta / TikTok / viral
else if (temQualquer(["instagram", "tiktok", "reels", "story", "postar", "trend", "viral"])) {
    resposta = sorteio(interacoesLivres.redes);
    categoriaEncontrada = true;
}

// 21. Clima / calor / chuva
else if (temQualquer(["calor", "chuva", "frio", "tempo", "tá quente", "sol rachando"])) {
    resposta = sorteio(interacoesLivres.clima);
    categoriaEncontrada = true;
}

// 22. Celular / internet / zap caiu
else if (temQualquer(["zap", "internet", "sinal", "wifi", "caiu", "bateria", "celular travando"])) {
    resposta = sorteio(interacoesLivres.celular);
    categoriaEncontrada = true;
}

// 23. Academia / treino / shape (depois das emocionais)
else if (temQualquer(["academia", "malhar", "treino", "supino", "gains", "whey", "creatina", "hipertrofia"])) {
    resposta = sorteio(interacoesLivres.academia);
    categoriaEncontrada = true;
}

// 24. Estudo / Enem / prova
else if (temQualquer(["estudar", "prova", "enem", "faculdade", "vestibular", "nota", "aula"])) {
    resposta = sorteio(interacoesLivres.estudo);
    categoriaEncontrada = true;
}

// 25. Carro / moto / IPVA / trânsito
else if (temQualquer(["carro", "moto", "gasolina", "trânsito", "IPVA", "multa", "uber"])) {
    resposta = sorteio(interacoesLivres.carro);
    categoriaEncontrada = true;
}

// 26. Família / mãe / pai / briga em casa
else if (temQualquer(["mãe", "pai", "família", "irmão", "prima", "briga família"])) {
    resposta = sorteio(interacoesLivres.familia);
    categoriaEncontrada = true;
}

// 27. Amizade / parça / brother
else if (temQualquer(["amigo", "parça", "brother", "galera", "squad"])) {
    resposta = sorteio(interacoesLivres.amizade);
    categoriaEncontrada = true;
}

// 28. Status / como vai / e aí (bem genérico – perto do final)
else if (temQualquer(["beleza", "tranquilo", "tudo bem", "como vai", "como tá", "e tu", "de boa", "tá de boa"])) {
    resposta = sorteio(interacoesLivres.status);
    categoriaEncontrada = true;
}

// 29. Saudação inicial
else if (temQualquer(["oi", "e aí", "salve", "opa", "fala", "bom dia", "boa tarde", "boa noite"])) {
    resposta = sorteio(interacoesLivres.saudacoes);
    categoriaEncontrada = true;
}

// 30. Despedida / valeu / flw
else if (temQualquer(["valeu", "tchau", "obrigado", "flw", "fui", "vlw", "tmj", "até mais"])) {
    resposta = sorteio(interacoesLivres.despedidas);
    categoriaEncontrada = true;
}

// 31. Neutro / nada não / de boa só (fallback conversacional antes do wiki)
else if (temQualquer(["nada", "nada não", "nada demais", "de boa", "to de boa", "tranquilo só", "sem nada"])) {
    resposta = sorteio(interacoesLivres.neutro);
    categoriaEncontrada = true;
}

// Se nada bateu → fallback para pesquisa ou resposta genérica
if (!categoriaEncontrada) {
    // seu código atual de "peraí mano, deixa eu pesquisar..." + wiki ou LLM genérico
        }
