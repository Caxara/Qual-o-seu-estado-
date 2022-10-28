function calcular() {
    var textInput = window.document.getElementById('textInput')
    var resultado = window.document.getElementById('res')
    var estado = String(textInput.value)
            
    var imagem1 = document.createElement('IMG');
            
    if(estado == 'RO' || estado == 'ro') {
        resultado.innerHTML += `<p><strong>O seu estado é Rondônia. Você é rondoniense.<strong</p>`
        resultado.innerHTML += `<p><strong>Nº de cidades: 52</br> População: 1.796.460</br> Capital: Porto Velho</strong></br></p>`
        resultado.innerHTML += `<p><strong>O nome Rondônia é uma homenagem ao Marechal Cândido Rondon, que nasceu há 150 anos. De origem indígena por parte de seus bisavós maternos e bisavó paterna. Nasceu no dia 5 de Maio do ano de 1865, na cidade de Mimoso no estado do Mato Grosso, hoje Santo Antônio do Leverger.</strong</p>`
        imagem1.setAttribute('src', 'img/Rondonia.jpeg');
        document.getElementById('bandeiraEstado').appendChild(imagem1);
                
    }
    else if(estado == 'PA' || estado == 'pa'){
        resultado.innerHTML += `<p><strong>O seu estado é o <strong>Pará</strong>. Você é paraense.</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidades: 144</br> População: 8.074.000 hab.</br> Capital: Belém</strong></p>`
        resultado.innerHTML += `<p><strong>A origem do nome Pará vem do termo “pa'ra”, o mesmo que “rio-mar” na língua tupi-guarani. Era assim que os índios denominavam um dos braços, o direito - do rio Amazonas.</strong></p>`
        imagem1.setAttribute('src', 'img/para.jpg');
        document.getElementById('bandeiraEstado').appendChild(imagem1);
    }
    else if(estado == 'AC' || estado == 'ac'){
        resultado.innerHTML += `<p><strong>O seu estado é o <strong>Acre</strong>. Você é acriano.</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidade: 22</br> População: 790.101 hab.</br> Capital: Rio Branco</strong></p>`
        resultado.innerHTML += `<p><strong>O nome Acre surgiu de “Aquiri”, que significa “rio dos jacarés” na língua nativa dos índios Apurinãs, os habitantes originais da região banhada pelo rio que empresta o nome ao estado. Os exploradores da região transcreveram o nome do dialeto indígena, dando origem ao nome Acre.<strong></p>`
        imagem1.setAttribute('src', 'img/acre.jpg');
        document.getElementById('bandeiraEstado').appendChild(imagem1);
    }
    else if(estado == 'AP' || estado == 'ap'){
        resultado.innerHTML += `<p><strong>O seu estado é <strong>Amapá</strong>. Você é amapaence.</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidades: 27</br> População: 751.000 hab.</br> Capital: Macapá</strong></p>`
        resultado.innerHTML += `<p><strong>A palavra amapá é de origem indígena e vem da nação Nuaruaque, que habitava a região Norte do Brasil, 
        na época do descobrimento. Significa, “Lugar da Chuva”. AMA (Chuva) + PA ou PABA (Lugar, estância, morada).</strong></p>`
        imagem1.setAttribute('src', 'img/amapa.jpg');
        document.getElementById('bandeiraEstado').appendChild(imagem1);
    }
    else if(estado == 'AM' || estado == 'am'){
        resultado.innerHTML += `<p><strong>O seu estado é o <strong>Amazônas</strong>. Você é amazonense.</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidades: 62</br> População: 4.269.995 hab.</br> Capital: Manaus</strong></br></p>`
        resultado.innerHTML += `<p><strong>O Amazonas é o único estado brasileiro cujo nome vem do grego. Durante uma expedição no século 16, o espanhol Francisco de Orellana encasquetou em ter visto uma tribo de guerreiras índias mulheres que lutavam bravamente, igualzinho o mito das amazonas gregas. Logo, rio das Amazonas.</strong></p>`
        imagem1.setAttribute('src', 'img/amazonas.jpg');
        document.getElementById('bandeiraEstado').appendChild(imagem1);
    }
    else if(estado == 'RR' || estado == 'rr'){
        resultado.innerHTML += `<p><strong>O seu estado é <strong>Roraima</strong>. Você é roraimense.</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidades: 15</br> População: 652.713 hab.</br> Capital: Boa Vista</strong></br></p>`
        resultado.innerHTML += `<p><strong>A palavra "Roraima" vem de línguas indígenas. Sua etimologia lhe emprega três significados: “Monte Verde”, “Mãe dos Ventos” e “Serra do Caju”. Seria a junção de roro (papagaio) e imã (pai, formador).</strong></p>`
        imagem1.setAttribute('src', 'img/roraima.jpg');
        document.getElementById('bandeiraEstado').appendChild(imagem1);
    }
    else if(estado == 'TO' || estado == 'to'){
        resultado.innerHTML += `<p>O seu estado é o <strong>Tocantins</strong>. Você é tocantinense.</p>`
        resultado.innerHTML += `<p>Nº de cidades: 139</br> População: 1,497.000 hab.</br> Capital: Palmas </p>`
        resultado.innerHTML += `<p>O nome "Tocantins" é uma referência ao rio Tocantins, que corta o estado de sul ao norte. Trata-se de um termo oriundo do tupi antigo, onde significa "bicos de tucanos", através da junção dos termos tukana ("tucanos") e tim ("bicos")</p>`
        imagem1.setAttribute('src', 'img/tocantins.jpg');
        document.getElementById('bandeiraEstado').appendChild(imagem1);
    }
    else if(estado == 'MT' || estado == 'mt'){
        resultado.innerHTML += `<p><strong>O seu estado é <strong>Mato Grosso</strong>. Você é matogrossense.</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidades: 144</br> População: 3,224.000 hab. </br> Capital: Cuiabá</strong></p>`
        resultado.innerHTML += `<p><strong>O nome Mato Grosso é originário de uma grande extensão de sete léguas de mato alto,</br> espesso, quase impenetrável, localizado nas margens do rio Galera, 
        percorrido pela primeira vez em 1734 pelos irmãos Paes de Barros.</strong></p>`
        imagem1.setAttribute('src', '/img/matoGrosso.jpg');
        document.getElementById('bandeiraEstado').appendChild(imagem1);
    }
    else if(estado == 'MS' || estado == 'ms'){
        resultado.innerHTML += `<p><strong>O seu estado é <strong>Mato Grosso do Sul</strong>. Você é sul-matogrossense.</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidades: 79</br> População: 2,62.000 hab. </br> Capital: Campo Grande</strong></p>`
        resultado.innerHTML += `<p><strong>O termo "Mato Grosso do Sul" deriva do nome do vizinho "Mato Grosso", estado do qual aquele foi desmembrado quando de sua criação.</strong></p>`
        imagem1.setAttribute('src', '/img/Mato-Grosso-do-Sul.jpg');
        document.getElementById('bandeiraEstado').appendChild(imagem1);
    }
    else if(estado == 'SP' || estado =='sp'){
        resultado.innerHTML += `<p><strong>O seu estado é <strong>São Paulo</strong>. Você é paulista.</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidades: 645</br> População: 44.749.699 hab.</br> Capital: São Paulo</strong></br></p>`
        resultado.innerHTML += `<p><strong>O nome São Paulo foi escolhido porque o dia da fundação do colégio foi 25 de janeiro, mesmo dia no qual a Igreja Católica celebra a conversão do apóstolo Paulo de Tarso.</strong></p>`
        imagem1.setAttribute('src', 'img/SaoPaulo.jpeg');
        document.getElementById('bandeiraEstado').appendChild(imagem1);
    }
    else if(estado == 'PR' || estado == 'pr'){
        resultado.innerHTML += `<p><strong>O seu estado é <strong>Paraná</strong>. Você é paranaense.</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidades: 399</br> População: 11.597.484 hab.</br> Capital: Curitiba</strong></br></p>`
        resultado.innerHTML += `<p><strong>O primitivo homem paranaense pertencia à família tupi-guarani e jê. Foram os tupi que deram nome ao Estado: Paraná "rio caudaloso", sendo estes ainda, os que primeiramente entraram em contato como o homem branco.</strong></p>`
        imagem1.setAttribute('src', 'img/Parana.jpeg');
        document.getElementById('bandeiraEstado').appendChild(imagem1);
    }
    else if(estado == 'SC' || estado == 'sc'){
        resultado.innerHTML += `<p><strong>O seu estado é <strong>Santa Catarina</strong>. Você é catarinense.</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidades: 295</br> População:7.252.502 hab.</br> Capital: Florianópolis</strong></br></p>`
        resultado.innerHTML += `<p><strong>Há divergências quanto ao responsável pela denominação de Santa Catarina: alguns autores atribuem a Sebastião Caboto, em homenagem à sua esposa, Catarina Medrano; outros defendem que tenha sido em homenagem a Santa Catarina de Alexandria, festejada pela igreja católica em 25 de novembro.</strong></p>`
        imagem1.setAttribute('src', 'img/SantaCatarina.jpeg');
        document.getElementById('bandeiraEstado').appendChild(imagem1);
    }
    else if(estado == 'RS' || estado == 'rs'){
        resultado.innerHTML += `<p><strong>O seu estado é <strong>Rio Grande do Sul</strong>. Você é riograndense.</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidades: 497</br> População: 10.693.929 hab.</br> Capital: Porto Alegre</strong></br></p>`
        resultado.innerHTML += `<p><strong>O nome vem de um vilarejo que demarcava a área da foz do rio Grande, que não era foz, mas a lagoa dos Patos.</strong></p>`
        imagem1.setAttribute('src', 'img/RioGrandeDoSul.jpeg');
        document.getElementById('bandeiraEstado').appendChild(imagem1);
    }
    else if(estado == 'MG' || estado == 'mg'){
        resultado.innerHTML += `<p><strong>O seu estado é <strong>Minas Gerais</strong>. Você é mineiro(a).</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidades: 471</br> População: 21.411.923 hab.</br> Capital: Belo Horizonte</strong></br></p>`
        resultado.innerHTML += `<p><strong>Minas Gerais se relaciona literalmente por abrigar campos de extração de inúmeros minérios, principalmente ouro, denominadas "minas gerais", em oposição às minas particulares ou por sua variedade de tipos de minério. No início do século XVIII, a região era simplesmente denominada Minas.</strong></p>`
        imagem1.setAttribute('src', 'img/MinasGerais.jpg');
        document.getElementById('bandeiraEstado').appendChild(imagem1);
    }
    else if(estado == 'GO' || estado == 'go'){
        resultado.innerHTML += `<p><strong>O seu estado é Goiás. Você é goiano(a).</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidade: 246</br> População: 6.523,000 hab.</br> Capital: Goiania</strong></p>`
        resultado.innerHTML += `<p><strong>O nome do Estado tem origem na denominação da tribo indígena “guaiás” que, por corruptela, se tornou Goiás. Vem do termo tupi “gwaya”, que quer dizer "indivíduo igual, gente semelhante, da mesma raça".</strong></p>`
        imagem1.setAttribute('src', 'img/Goias.jpg');
        document.getElementById('bandeiraEstado').appendChild(imagem1);
    }
    else if(estado == 'DF' || estado == 'df'){
        resultado.innerHTML += `<p><strong>O seu estado é o Distrito Federal. Você é candango(a).</strong></p>`
        resultado.innerHTML += `<p><strong>Nº de cidade: 1</br> População: 2.570.160 hab.</br> Capital: Brasília</strong></p>`
        resultado.innerHTML += `<p><strong>O Distrito Federal recebe esse nome por abrigar a sede do governo brasileiro.</strong></p>`
        imagem1.setAttribute('src', 'img/Distrito.jpg');
        document.getElementById('bandeiraEstado').appendChild(imagem1);

    }
    else {
        resultado.innerHTML += `<p><strong>SEU ESTADO AINDA NÃO ESTÁ NO BANCO DE DADOS.</strong></p>`
        imagem1.setAttribute('src', 'img/Brasil.png');
        imagem1.style.width = '500px';
        imagem1.style.height = '500px';
        document.getElementById('bandeiraEstado').appendChild(imagem1);
                
    }
    textInput.value = ''
    textInput.focus()
    
}    