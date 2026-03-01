// ... seu dicionário antigo ...

interacoesLivres = {
    // ... mantenha os antigos ...

    cumprimentoEmocao: [  // oi + emoção / motivação
        "E aí, Maria! Beleza pura? Tô no gás total aqui, e tu como tá de vibe hoje? 😎",
        "Opa, minha parceira! Tudo sussa? Manda o papo que eu tô ligado 100%, cheio de energia! 💥",
        "Salve, rainha! Como tá o rolê aí em PE? Tô pronto pra trocar ideia com emoção total 🔥",
        "Fala, monstra! Tranquilo ou na bad? Desabafa que o Nexus ouve e motiva! 👊",
        "E aí, tudo na paz? Bora botar pra quebrar no papo de hoje? Tô animadão! 🚀"
    ],

    mateProgEngCursos: [  // matemática, programação, engenharia, cursos/vestibular
        "Mano, matemática, programação e engenharia são o futuro! Bora falar de curso, Enem, Sisu, IA, código ou cálculo? Qual o foco hoje? 📚💻",
        "Tá na vibe de exatas? Respeito! Quer dica de curso gratuito, notícia de vestibular, programação em Python ou engenharia de software? Manda aí que eu ajudo full gains mentais! 🧠",
        "Área pesada hein? Matemática + código + engenharia = grana e oportunidade. Tem notícia recente no G1 sobre isso? Posso checar ou te dar dica de onde estudar!",
        "Cursos de TI, engenharia, ciência de dados... tá bombando! Quer saber de vagas na Univesp, UFU, ou como entrar em IA? Fala o que precisa!",
        "Se for sobre vestibular, pós ou carreira em exatas, tô dentro. Bora planejar teu caminho? Qual matéria ou curso tá na mira?"
    ]
};
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

function adicionarBolha(txt, tipo, id = null) {
    const div = document.createElement('div');
    div.className = `msg ${tipo}`;
    if (id) div.id = id;
    div.innerText = txt;
    chatBox.appendChild(div);

    // Só rola pro final se o usuário já estava quase no fundo (tolerância \~150px)
    // Isso evita forçar scroll quando você tá lendo algo antigo
    const isAtBottom = (chatBox.scrollHeight - chatBox.scrollTop - chatBox.clientHeight) < 150;
    if (isAtBottom) {
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
