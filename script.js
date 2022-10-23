function calcular() {
    var textInput = window.document.getElementById('textInput')
    var resultado = window.document.getElementById('res')
    var estado = String(textInput.value)
            
    var imagem1 = document.createElement('IMG');
    estado.innerHTML = ``
            
    if(estado == 'RO' || estado == 'ro') {
        resultado.innerHTML += `<p>O seu estado é <strong>Rondônia</strong>. Você é rondoniense.</p>`
        resultado.innerHTML += `<p>Nº de cidades: 52</br> População: 1.796.460</br> Capital: Porto Velho</br></p>`
        resultado.innerHTML += `<p>O nome Rondônia é uma homenagem ao Marechal Cândido Rondon, que nasceu há 150 anos.</br> De origem indígena por parte de seus bisavós maternos e bisavó paterna.</br> Nasceu no dia 5 de Maio do ano de 1865, na cidade de Mimoso no estado do Mato Grosso, hoje Santo Antônio do Leverger.</p>`
        resultado.style.color = 'black'
        resultado.style.fontFamily = 'Arial'
        imagem1.setAttribute('src', 'img/Rondonia.jpeg');
        document.getElementById('bandeiraEstado').appendChild(imagem1);
                
    } 
    else if(estado == 'AM' || estado == 'am'){
        resultado.innerHTML += `<p>O seu estado é o <strong>Amazônas</strong>. Você é amazonense.</p>`
        resultado.innerHTML += `<p>Nº de cidades: 62</br> População: 4.269.995 hab.</br> Capital: Manaus</br></p>`
        resultado.innerHTML += `<p>O Amazonas é o único estado brasileiro cujo nome vem do grego.</br> Durante uma expedição no século 16, o espanhol Francisco de Orellana encasquetou</br> em ter visto uma tribo de guerreiras índias mulheres que lutavam bravamente,</br> igualzinho o mito das amazonas gregas. Logo, rio das Amazonas.</p>`
        resultado.style.color = 'black'
        resultado.style.fontFamily = 'Arial'
        imagem1.setAttribute('src', 'img/amazonas.jpg');
        document.getElementById('bandeiraEstado').appendChild(imagem1);
    }
    else if(estado == 'RR' || estado == 'rr'){
        resultado.innerHTML += `<p>O seu estado é <strong>Roraima</strong>. Você é roraimense.</p>`
        resultado.innerHTML += `<p>Nº de cidades: 15</br> População: 652.713 hab.</br> Capital: Boa Vista</br></p>`
        resultado.innerHTML += `<p>A palavra "Roraima" vem de línguas indígenas.</br> Sua etimologia lhe emprega três significados:</br> “Monte Verde”, “Mãe dos Ventos” e “Serra do Caju”.</br> Seria a junção de roro (papagaio) e imã (pai, formador).</p>`
        resultado.style.cor = 'black'
        resultado.style.fontFamily = 'Arial'
        imagem1.setAttribute('src', 'img/roraima.jpg');
        document.getElementById('bandeiraEstado').appendChild(imagem1);
    }
    else if(estado == 'SP' || estado =='sp') {
        resultado.innerHTML += `<p>O seu estado é <strong>São Paulo</strong>. Você é paulista.</p>`
        resultado.innerHTML += `<p>Nº de cidades: 645</br> População: 44.749.699 hab.</br> Capital: São Paulo</br></p>`
        resultado.style.color ='black'
        resultado.style.fontFamily = 'Arial'
        imagem1.setAttribute('src', 'img/SaoPaulo.jpeg');
        document.getElementById('bandeiraEstado').appendChild(imagem1);
    }
    else if(estado == 'PR' || estado == 'pr') {
        resultado.innerHTML += `<p>O seu estado é <strong>Paraná</strong>. Você é paranaense.</p>`
        resultado.innerHTML += `<p>Nº de cidades: 399</br> População: 11.597.484 hab.</br> Capital: Curitiba</br></p>`
        resultado.style.color = 'black'
        resultado.style,fontFamily = 'Arial'
        imagem1.setAttribute('src', 'img/Parana.jpeg');
        document.getElementById('bandeiraEstado').appendChild(imagem1);
    }
    else if(estado == 'SC' || estado == 'sc') {
        resultado.innerHTML += `<p>O seu estado é <strong>Santa Catarina</strong>. Você é catarinense.</p>`
        resultado.innerHTML += `<p>Nº de cidades: 295</br> População:7.252.502 hab.</br> Capital: Florianópolis</br></p>`
        resultado.style.color = 'black'
        resultado.style,fontFamily = 'Arial'
        imagem1.setAttribute('src', 'img/SantaCatarina.jpeg');
        document.getElementById('bandeiraEstado').appendChild(imagem1);
    }
    else if(estado == 'RS' || estado == 'rs') {
        resultado.innerHTML += `<p>O seu estado é <strong>Rio Grande do Sul</strong>. Você é riograndense.</p>`
        resultado.innerHTML += `<p>Nº de cidades: 497</br> População: 10.693.929 hab.</br> Capital: Porto Alegre</br></p>`
        resultado.style.color = 'black'
        resultado.style,fontFamily = 'Arial'
        imagem1.setAttribute('src', 'img/RioGrandeDoSul.jpeg');
        document.getElementById('bandeiraEstado').appendChild(imagem1);
    }
    else if(estado == 'MG' || estado == 'mg') {
        resultado.innerHTML += `<p>O seu estado é <strong>Minas Gerais</strong>. Você é mineiro.</p>`
        resultado.innerHTML += `<p>Nº de cidades: 471</br> População: 21.411.923 hab.</br> Capital: Belo Horizonte</br></p>`
        resultado.style.color = 'black'
        resultado.style,fontFamily = 'Arial'
        imagem1.setAttribute('src', 'img/MinasGerais.jpg');
        document.getElementById('bandeiraEstado').appendChild(imagem1);
    }
    else {
        resultado.innerHTML += `<p><strong>SEU ESTADO AINDA NÃO ESTÁ NO BANCO DE DADOS.</strong></p>`
        resultado.style.color = 'red'
        resultado.style.fontFamily = 'Arial'
        imagem1.setAttribute('src', 'img/Brasil.png');
        imagem1.style.width = '500px';
        imagem1.style.height = '500px';
        document.getElementById('bandeiraEstado').appendChild(imagem1);
                
    }
}    