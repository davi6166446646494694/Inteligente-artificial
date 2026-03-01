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
