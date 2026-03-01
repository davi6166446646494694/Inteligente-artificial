// Ordem sugerida 2025–2026 (mais urgente / emocional → mais genérico)
// Prioridade alta = desarmar emoção negativa, evitar escalada

// 1. Xingamento / putaria / raiva pesada (sempre primeiro!)
if (temQualquer(["porra", "caralho", "pqp", "kct", "tnc", "vsf", "puta merda", "filho da puta", "foda-se", "merda", "desgraça", "viado", "bosta", "fdp", "putaria", "ta foda", "to puto", "tô puto", "raiva", "irritado", "tô de saco cheio"])) {
    resposta = sorteio(interacoesLivres.xingamento);
    categoriaEncontrada = true;
}

// 2. Término / término sofrido / superar ex (muito emocional)
else if (temQualquer(["terminei", "término", "superar", "superar ex", "sofrendo", "block no ex", "chifre", "traição"])) {
    resposta = sorteio(interacoesLivres.termino);
    categoriaEncontrada = true;
}

// 3. Ciúmes / possessivo
else if (temQualquer(["ciúmes", "ciumento", "possessivo", "controlador", "não gosto"])) {
    resposta = sorteio(interacoesLivres.ciumes);
    categoriaEncontrada = true;
}

// 4. Ansiedade / surto / crise / saúde mental pesada
else if (temQualquer(["ansiedade", "ansioso", "surtando", "surtei", "tô surtando", "crise", "ataque", "pânico", "depressão leve", "tô mal demais", "preciso desabafar"])) {
    resposta = sorteio(interacoesLivres.ansiedade);
    categoriaEncontrada = true;
}

// 5. Saúde / dor / doente / médico (física)
else if (temQualquer(["saúde", "doendo", "dor", "doente", "médico", "tô mal", "tô ruim", "remédio", "covid", "gripe", "febre", "dor de cabeça", "pressão alta", "consulta", "machucou", "lesão"])) {
    resposta = sorteio(interacoesLivres.saude);
    categoriaEncontrada = true;
}

// 6. Namoro / crush / relacionamento atual
else if (temQualquer(["namoro", "namorada", "namorado", "crush", "ficante", "ficar com", "beijar", "romance", "voltar", "ex"])) {
    resposta = sorteio(interacoesLivres.namoro);
    categoriaEncontrada = true;
}

// 7. Fofoca / novidade / ouvi falar
else if (temQualquer(["fofoca", "fofoquei", "novidade", "conta aí", "ouvi falar", "falou mal"])) {
    resposta = sorteio(interacoesLivres.fofoca);
    categoriaEncontrada = true;
}

// 8. Dinheiro / grana / conta / dívida
else if (temQualquer(["dinheiro", "grana", "salário", "dívida", "pagar", "pix", "conta", "fatura", "pobre", "rico", "renda extra"])) {
    resposta = sorteio(interacoesLivres.dinheiro);
    categoriaEncontrada = true;
}

// 9. Trabalho / trampo / chefe / demissão
else if (temQualquer(["trampo", "trabalho", "chefe", "emprego", "demissão", "home office", "hora extra", "folga", "13º", "freela", "bico"])) {
    resposta = sorteio(interacoesLivres.trabalho);
    categoriaEncontrada = true;
}

// 10. Fome / comida / rango / delivery
else if (temQualquer(["fome", "comer", "comida", "rango", "almoço", "janta", "lanche", "pizza", "hambúrguer", "ifood", "delivery", "pedir comida"])) {
    resposta = sorteio(interacoesLivres.comida);
    categoriaEncontrada = true;
}

// 11. Bebida / balada / ressaca
else if (temQualquer(["beber", "cerveja", "breja", "pinga", "balada", "festa", "chapado", "bêbado", "ressaca"])) {
    resposta = sorteio(interacoesLivres.bebida);
    categoriaEncontrada = true;
}

// 12. Sono / preguiça / insônia (juntando as 3 variações)
else if (temQualquer(["dormir", "sono", "boa noite", "vou deitar", "tô com sono", "preguiça", "acordar cedo", "insônia", "não durmo", "tô morto", "cama", "levantei agora", "tô moído"])) {
    resposta = sorteio(interacoesLivres.sono);
    categoriaEncontrada = true;
}

// 13. Sextou / fim de semana / feriado
else if (temQualquer(["sextou", "fim de semana", "sábado", "domingo", "feriado", "ponte", "emenda", "carnaval", "reveillon"])) {
    resposta = sorteio(interacoesLivres.fds);
    categoriaEncontrada = true;
}

// 14. Churrasco / rolê com a galera / farra
else if (temQualquer(["churras", "churrasco", "farra", "rolê com a galera", "festa em casa"])) {
    resposta = sorteio(interacoesLivres.churrasco);
    categoriaEncontrada = true;
}

// 15. Futebol / time
else if (temQualquer(["futebol", "time", "jogo", "gol", "brasileirão", "libertadores", "corinthians", "flamengo", "palmeiras"])) {
    resposta = sorteio(interacoesLivres.futebol);
    categoriaEncontrada = true;
}

// 16. Jogos / videogame / free fire etc
else if (temQualquer(["jogo", "free fire", "valorant", "fortnite", "lol", "minecraft", "ps5", "rank", "noob"])) {
    resposta = sorteio(interacoesLivres.jogos);
    categoriaEncontrada = true;
}

// 17. Filme / série / anime / dorama
else if (temQualquer(["filme", "série", "netflix", "anime", "dorama", "maratona", "spoiler", "recomenda"])) {
    resposta = sorteio(interacoesLivres.filmesSeries);
    categoriaEncontrada = true;
}

// 18. Música / hit / playlist
else if (temQualquer(["música", "funk", "sertanejo", "playlist", "hit", "show", "pagodinho", "piseiro", "forró"])) {
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
