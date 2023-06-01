var textInput = window.document.getElementById('textInput')


textInput.addEventListener('keyup', function(evento){
    if (evento.target.value.length < 2) return;
    
    if (evento.code === 'Enter') {
        calcular()
    }
})

function calcular() {
    var resultado = window.document.getElementById('res')
    var estado = String(textInput.value)
            
    var imagem1 = document.createElement('IMG');


    if (['ro','rondonia', 'rondônia',].includes(estado.toLowerCase())){
        resultado.innerHTML = `<p><strong>O seu estado é Rondônia. Você é rondoniense.<strong</p>`
        resultado.innerHTML += `<p><strong>Nº de cidades: 52</br> População: 1.796.460</br> Capital: Porto Velho</strong></br></p>`
        resultado.innerHTML += `<p><strong>O nome Rondônia é uma homenagem ao Marechal Cândido Rondon, que nasceu há 150 anos. De origem indígena por parte de seus bisavós maternos e bisavó paterna. Nasceu no dia 5 de Maio do ano de 1865, na cidade de Mimoso no estado do Mato Grosso, hoje Santo Antônio do Leverger.</strong</p>`
        imagem1.setAttribute('src', 'img/Rondonia.jpeg');
        document.getElementById('bandeiraEstado').replaceChildren(imagem1);
                
    }
    
    else if (['pa', 'pará', 'para'].includes(estado.toLocaleLowerCase())){
        resultado.innerHTML = `<p><strong>O seu estado é o <strong>Pará</strong>. Você é paraense.</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidades: 144</br> População: 8.074.000 hab.</br> Capital: Belém</strong></p>`
        resultado.innerHTML += `<p><strong>A origem do nome Pará vem do termo “pa'ra”, o mesmo que “rio-mar” na língua tupi-guarani. Era assim que os índios denominavam um dos braços, o direito - do rio Amazonas.</strong></p>`
        imagem1.setAttribute('src', 'img/para.jpg');
        document.getElementById('bandeiraEstado').replaceChildren(imagem1);
    }
    else if(['ac', 'acre'].includes(estado.toLocaleLowerCase())){
        resultado.innerHTML = `<p><strong>O seu estado é o <strong>Acre</strong>. Você é acriano.</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidade: 22</br> População: 790.101 hab.</br> Capital: Rio Branco</strong></p>`
        resultado.innerHTML += `<p><strong>O nome Acre surgiu de “Aquiri”, que significa “rio dos jacarés” na língua nativa dos índios Apurinãs, os habitantes originais da região banhada pelo rio que empresta o nome ao estado. Os exploradores da região transcreveram o nome do dialeto indígena, dando origem ao nome Acre.<strong></p>`
        imagem1.setAttribute('src', 'img/acre.jpg');
        document.getElementById('bandeiraEstado').replaceChildren(imagem1);
    }
    else if(['ap', 'amapá', 'amapa'].includes(estado.toLocaleLowerCase())){
        resultado.innerHTML = `<p><strong>O seu estado é <strong>Amapá</strong>. Você é amapaence.</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidades: 27</br> População: 751.000 hab.</br> Capital: Macapá</strong></p>`
        resultado.innerHTML += `<p><strong>A palavra amapá é de origem indígena e vem da nação Nuaruaque, que habitava a região Norte do Brasil, 
        na época do descobrimento. Significa, “Lugar da Chuva”. AMA (Chuva) + PA ou PABA (Lugar, estância, morada).</strong></p>`
        imagem1.setAttribute('src', 'img/amapa.jpg');
        document.getElementById('bandeiraEstado').replaceChildren(imagem1);
    }
    else if(['am', 'amazônas', 'amazonas'].includes(estado.toLocaleLowerCase())){
        resultado.innerHTML = `<p><strong>O seu estado é o <strong>Amazônas</strong>. Você é amazonense.</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidades: 62</br> População: 4.269.995 hab.</br> Capital: Manaus</strong></br></p>`
        resultado.innerHTML += `<p><strong>O Amazonas é o único estado brasileiro cujo nome vem do grego. Durante uma expedição no século 16, o espanhol Francisco de Orellana encasquetou em ter visto uma tribo de guerreiras índias mulheres que lutavam bravamente, igualzinho o mito das amazonas gregas. Logo, rio das Amazonas.</strong></p>`
        imagem1.setAttribute('src', 'img/amazonas.jpg');
        document.getElementById('bandeiraEstado').replaceChildren(imagem1);
    }
    else if(['roraima', 'rr'].includes(estado.toLocaleLowerCase())){
        resultado.innerHTML = `<p><strong>O seu estado é <strong>Roraima</strong>. Você é roraimense.</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidades: 15</br> População: 652.713 hab.</br> Capital: Boa Vista</strong></br></p>`
        resultado.innerHTML += `<p><strong>A palavra "Roraima" vem de línguas indígenas. Sua etimologia lhe emprega três significados: “Monte Verde”, “Mãe dos Ventos” e “Serra do Caju”. Seria a junção de roro (papagaio) e imã (pai, formador).</strong></p>`
        imagem1.setAttribute('src', 'img/roraima.jpg');
        document.getElementById('bandeiraEstado').replaceChildren(imagem1);
    }
    else if(['ma', 'maranhão','maranhao'].includes(estado.toLocaleLowerCase())){
        resultado.innerHTML = `<p><strong>O seu estado é <strong>Maranhão</strong>. Você é maranhense.</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidades: 217</br> População: 7 153 262 hab.</br> Capital: São Luiz</strong></br></p>`
        resultado.innerHTML += `<p><strong>Não há uma hipótese consensual para a origem do nome do estado do Maranhão.</br> As teorias mais aceitas são: referência à expressão em língua tupi "Mar'Anhan", que significa "O mar que corre".
        Maranhão era o nome dado ao Rio Amazonas pelos nativos da região antes da chegada dos navegantes europeus (nos países Andinos é chamado de rio Maranhão.</strong></p>`
        imagem1.setAttribute('src', 'img/maranhao.jpg');
        document.getElementById('bandeiraEstado').replaceChildren(imagem1);
    }
    else if(['to', 'tocantins'].includes(estado.toLocaleLowerCase())){
        resultado.innerHTML = `<p>O seu estado é o <strong>Tocantins</strong>. Você é tocantinense.</p>`
        resultado.innerHTML += `<p>Nº de cidades: 139</br> População: 1,497.000 hab.</br> Capital: Palmas </p>`
        resultado.innerHTML += `<p>O nome "Tocantins" é uma referência ao rio Tocantins, que corta o estado de sul ao norte. Trata-se de um termo oriundo do tupi antigo, onde significa "bicos de tucanos", através da junção dos termos tukana ("tucanos") e tim ("bicos")</p>`
        imagem1.setAttribute('src', 'img/tocantins.jpg');
        document.getElementById('bandeiraEstado').replaceChildren(imagem1);
    }
    else if(['mato grosso', 'mt'].includes(estado.toLocaleLowerCase())){
        resultado.innerHTML = `<p><strong>O seu estado é <strong>Mato Grosso</strong>. Você é matogrossense.</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidades: 144</br> População: 3,224.000 hab. </br> Capital: Cuiabá</strong></p>`
        resultado.innerHTML += `<p><strong>O nome Mato Grosso é originário de uma grande extensão de sete léguas de mato alto,</br> espesso, quase impenetrável, localizado nas margens do rio Galera, 
        percorrido pela primeira vez em 1734 pelos irmãos Paes de Barros.</strong></p>`
        imagem1.setAttribute('src', '/img/matoGrosso.jpg');
        document.getElementById('bandeiraEstado').replaceChildren(imagem1);
    }
    else if(['mato grosso do sul', 'ms'].includes(estado.toLocaleLowerCase())){
        resultado.innerHTML = `<p><strong>O seu estado é <strong>Mato Grosso do Sul</strong>. Você é sul-matogrossense.</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidades: 79</br> População: 2,62.000 hab. </br> Capital: Campo Grande</strong></p>`
        resultado.innerHTML += `<p><strong>O termo "Mato Grosso do Sul" deriva do nome do vizinho "Mato Grosso", estado do qual aquele foi desmembrado quando de sua criação.</strong></p>`
        imagem1.setAttribute('src', '/img/Mato-Grosso-do-Sul.jpg');
        document.getElementById('bandeiraEstado').replaceChildren(imagem1);
    }
    else if(['sp', 'são paulo','sao paulo'].includes(estado.toLocaleLowerCase())){
        resultado.innerHTML = `<p><strong>O seu estado é <strong>São Paulo</strong>. Você é paulista.</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidades: 645</br> População: 44.749.699 hab.</br> Capital: São Paulo</strong></br></p>`
        resultado.innerHTML += `<p><strong>O nome São Paulo foi escolhido porque o dia da fundação do colégio foi 25 de janeiro, mesmo dia no qual a Igreja Católica celebra a conversão do apóstolo Paulo de Tarso.</strong></p>`
        imagem1.setAttribute('src', 'img/SaoPaulo.jpeg');
        document.getElementById('bandeiraEstado').replaceChildren(imagem1);
    }
    else if(['paraná', 'parana', 'pr'].includes(estado.toLocaleLowerCase())){
        resultado.innerHTML = `<p><strong>O seu estado é <strong>Paraná</strong>. Você é paranaense.</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidades: 399</br> População: 11.597.484 hab.</br> Capital: Curitiba</strong></br></p>`
        resultado.innerHTML += `<p><strong>O primitivo homem paranaense pertencia à família tupi-guarani e jê. Foram os tupi que deram nome ao Estado: Paraná "rio caudaloso", sendo estes ainda, os que primeiramente entraram em contato como o homem branco.</strong></p>`
        imagem1.setAttribute('src', 'img/Parana.jpeg');
        document.getElementById('bandeiraEstado').replaceChildren(imagem1);
    }
    else if(['sc', 'santa catarina'].includes(estado.toLocaleLowerCase())){
        resultado.innerHTML = `<p><strong>O seu estado é <strong>Santa Catarina</strong>. Você é catarinense.</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidades: 295</br> População:7.252.502 hab.</br> Capital: Florianópolis</strong></br></p>`
        resultado.innerHTML += `<p><strong>Há divergências quanto ao responsável pela denominação de Santa Catarina: alguns autores atribuem a Sebastião Caboto, em homenagem à sua esposa, Catarina Medrano; outros defendem que tenha sido em homenagem a Santa Catarina de Alexandria, festejada pela igreja católica em 25 de novembro.</strong></p>`
        imagem1.setAttribute('src', 'img/SantaCatarina.jpeg');
        document.getElementById('bandeiraEstado').replaceChildren(imagem1);
    }
    else if(['rs','rio grande do sul'].includes(estado.toLocaleLowerCase())){
        resultado.innerHTML = `<p><strong>O seu estado é <strong>Rio Grande do Sul</strong>. Você é riograndense.</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidades: 497</br> População: 10.693.929 hab.</br> Capital: Porto Alegre</strong></br></p>`
        resultado.innerHTML += `<p><strong>O nome vem de um vilarejo que demarcava a área da foz do rio Grande, que não era foz, mas a lagoa dos Patos.</strong></p>`
        imagem1.setAttribute('src', 'img/RioGrandeDoSul.jpeg');
        document.getElementById('bandeiraEstado').replaceChildren(imagem1);
    }
    else if(['mg','minas gerais'].includes(estado.toLocaleLowerCase())){
        resultado.innerHTML = `<p><strong>O seu estado é <strong>Minas Gerais</strong>. Você é mineiro(a).</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidades: 471</br> População: 21.411.923 hab.</br> Capital: Belo Horizonte</strong></br></p>`
        resultado.innerHTML += `<p><strong>Minas Gerais se relaciona literalmente por abrigar campos de extração de inúmeros minérios, principalmente ouro, denominadas "minas gerais", em oposição às minas particulares ou por sua variedade de tipos de minério. No início do século XVIII, a região era simplesmente denominada Minas.</strong></p>`
        imagem1.setAttribute('src', 'img/MinasGerais.jpg');
        document.getElementById('bandeiraEstado').replaceChildren(imagem1);
    }
    else if(['go','goiás', 'goias'].includes(estado.toLocaleLowerCase())){
        resultado.innerHTML = `<p><strong>O seu estado é Goiás. Você é goiano(a).</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidade: 246</br> População: 6.523,000 hab.</br> Capital: Goiania</strong></p>`
        resultado.innerHTML += `<p><strong>O nome do Estado tem origem na denominação da tribo indígena “guaiás” que, por corruptela, se tornou Goiás. Vem do termo tupi “gwaya”, que quer dizer "indivíduo igual, gente semelhante, da mesma raça".</strong></p>`
        imagem1.setAttribute('src', 'img/Goias.jpg');
        document.getElementById('bandeiraEstado').replaceChildren(imagem1);
    }
    else if(['df','distrito federal'].includes(estado.toLocaleLowerCase())){
        resultado.innerHTML = `<p><strong>O seu estado é o Distrito Federal. Você é candango(a).</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidade: 1</br> População: 2.570.160 hab.</br> Capital: Brasília</strong></p>`
        resultado.innerHTML += `<p><strong>O Distrito Federal recebe esse nome por abrigar a sede do governo brasileiro.</strong></p>`
        imagem1.setAttribute('src', 'img/Distrito.jpg');
        document.getElementById('bandeiraEstado').replaceChildren(imagem1);
    }
    else if(['rj','rio de janeiro'].includes(estado.toLocaleLowerCase())){
        resultado.innerHTML = `<p><strong>O seu estado é Rio de Janeiro. Você é fluminense.</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidade: 92</br> População: 6.748.000 hab.</br> Capital: Rio de Janeiro</strong></p>`
        resultado.innerHTML += `<p><strong>As histórios são muitas, mas uma que foi adotada pela maioria é de que navegadores portugueses ao chegar na Baia de Guanabara, e por isso acharam estar diante de uma grande desenbocar de um rio.</strong></p>`
        imagem1.setAttribute('src', 'img/RioJaneiro.jpg');
        document.getElementById('bandeiraEstado').replaceChildren(imagem1);
    }
    else if(['es','espirito santo'].includes(estado.toLocaleLowerCase())){
        resultado.innerHTML = `<p><strong>O seu estado é Espírito Santo. Você é capixaba.</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidades: 78</br> População: 3.885.000</br> Capital: Vitória</strong></p>`
        resultado.innerHTML += `<p><strong>Vasco Coutinho desembarcou na capitania em dia 23 de maio de 1535, desembarcando na atual Prainha de Vila Velha, onde fundou o primeiro povoamento. Como era oitava de Pentecostes, o donatário batizou a terra de Espírito Santo, em homenagem à terceira pessoa da Santíssima Trindade.</strong></p>`
        imagem1.setAttribute('src', 'img/EspiritoSanto.jpg');
        document.getElementById('bandeiraEstado').replaceChildren(imagem1);
    }
    else if(['ba', 'bahia'].includes(estado.toLocaleLowerCase())){
        resultado.innerHTML = `<p><strong>O seu estado é Bahia. Você é baiano(a).</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidades: 417</br> População: 15.013.00 hab.</br> Capital: Salvador</strong></p>`
        resultado.innerHTML += `<p><strong>O topônimo "Bahia" é uma referência à Baía de Todos os Santos, a qual deu o nome, originalmente, à Capitania da Baía de Todos os Santos. A capitania foi transformada, em 1821, em província. Em 1889, a Província da Bahia tornou-se o atual Estado da Bahia.</strong></p>`
        imagem1.setAttribute('src', 'img/Bahia.jpg');
        document.getElementById('bandeiraEstado').replaceChildren(imagem1);
    }
    else if(['se', 'sergipe'].includes(estado.toLocaleLowerCase())){
        resultado.innerHTML = `<p><strong>O seu estado é Sergipe. Você é sergipana(o).</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidades: 75</br> População: 2.022.000 hab. </br> Capital: Aracaju</strong></p>`
        resultado.innerHTML += `<p><strong>O nome Sergipe origina-se do tupi si´ri ü pe, que significa “rio dos siris”.</strong></p>`
        imagem1.setAttribute('src', 'img/Sergipe.jpg');
        document.getElementById('bandeiraEstado').replaceChildren(imagem1);
    }
    else if(['al','alagoas'].includes(estado.toLocaleLowerCase())){
        resultado.innerHTML = `<p><strong>O seu estado é Alagoas. Você é alagoana(o).</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidades: 102</br> População: 3.322.000 hab.</br> Capital: Maceió</strong></p>`
        resultado.innerHTML += `<p><strong>A palavra é de origem indígena, significando terra alagadiça (o que tapa o alagadiço), que deu origem ao riacho com o mesmo nome. Só na capital, Maceió, são 17 lagoas, entre mais de 30 em todo o estado. Essa característica da hidrografia definiu o nome do estado até hoje.</strong></p>`
        imagem1.setAttribute('src', 'img/alagoas.png');
        document.getElementById('bandeiraEstado').replaceChildren(imagem1);
    }
    else if(['pe','pernambuco'].includes(estado.toLocaleLowerCase())){
        resultado.innerHTML = `<p><strong>O seu estado é Pernambuco. Você é pernambucano(a).</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidades: 185</br> População: 9.278.000 hab.</br> Capital: Recife</strong></p>`
        resultado.innerHTML += `<p><strong>A versão mais comum sobre Pernambuco diz que, por trás desse nome, está a mesma raiz em tupi (pa'ra) que Pará, Paraná e a Paraíba. No caso de Pernambuco, o termo na língua indígena seria paranãpuka, algo como “buraco no mar” ou “furo que o mar faz”.</strong></p>`
        imagem1.setAttribute('src', 'img/Pernambuco.jpg');
        document.getElementById('bandeiraEstado').replaceChildren(imagem1);
    }
    else if(['pb' ,'paraíba','paraiba'].includes(estado.toLocaleLowerCase())){
        resultado.innerHTML = `<p><strong>O seu estado é Paraíba. Você é paraibano(a).</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidades: 223</br> População: 3.944.000 hab.</br> Capital: João Pessoa</strong></p>`
        resultado.innerHTML += `<p><strong>É controvertido o significado do topônimo dado ao rio Paraíba. Para Elias Erckman, Paraíba significa rio mau, porto ruim, ou mar corrompido. Varnhagen também indica a tradução de rio mau e Teodoro Sampaio, a de rio impraticável. Segundo Coriolano de Medeiros, porém, o significado exato seria braço de mar, pois os primeiros geógrafos que estudaram o rio tomaram-no por um braço de mar, sendo provável, assim, que o gentio da terra como tal o tivesse considerado, dando-lhe o nome com a precisão com que batizavam os acidentes do terreno.</strong></p>`
        imagem1.setAttribute('src', 'img/Paraiba.jpg');
        document.getElementById('bandeiraEstado').replaceChildren(imagem1);
    }
    else if(['pi', 'piauí', 'piaui'].includes(estado.toLocaleLowerCase())){
        resultado.innerHTML = `<p><strong>O seu estado é Piauí. Você é piauiense.</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidades: 221</br> População: 3.289.290 hab. </br> Capital: Terezina</strong></p>`
        resultado.innerHTML += `<p><strong>Inicialmente, as terras do Piauí receberam a denominação de Piagüí, nome dado pelos seus indígenas.
        Mais tarde, chamaram-nas Piagoí.</br> Somente depois é que ficaram conhecidas por Piauí.
        O topônimo "Piauí" vem da língua tupi, na qual significa "rio das piabas".</br>
        Também existe a teoria que a palavra Piauí significa "terra dos piagas", ou seja, terra de pajés e povos indígenas.[</strong></p>`
        imagem1.setAttribute('src', 'img/piaui.jpg');
        document.getElementById('bandeiraEstado').replaceChildren(imagem1);
    }


    else {
        resultado.innerHTML = `<p><strong>SEU ESTADO AINDA NÃO ESTÁ NO BANCO DE DADOS.</strong></p>`
        imagem1.setAttribute('src', 'img/Brasil.png');
        imagem1.style.width = '500px';
        imagem1.style.height = '500px';
        document.getElementById('bandeiraEstado').replaceChildren(imagem1);
                
    }
   textInput.value = ''
   // devolve o foco para a caixa de entrada
    textInput.focus()
    
}