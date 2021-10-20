function verificar() {
    //area de capitação dos dados da data.
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById("txtano");
    let res = document.querySelector("#res");

    if (fano.value.length == 0 || fano.value > ano ) {
        window.alert("[ERRO] : Verifique os Dados e tente novamente!");


    } else {
        //verificação de idade e sexo .
        let fsex = document.getElementsByName('radsexo');
        let idade = ano - Number(fano.value);
        let genero = '';
        let img = document.createElement('img');
        img.setAttribute('id','foto');
        
        //sexo masculino
        if (fsex[0].checked) {
           
            if (idade >= 0 && idade < 10) {
                // criança
                genero = 'Menino'
                img.setAttribute('src','/img/bebe.png');
                res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`;
                res.appendChild(img)

            } else if ( idade < 21) {
                //jovem
                genero = 'Adolecente'
                img.setAttribute('src','/img/jovem.png');
                res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`;
                res.appendChild(img)

            } else if (idade < 50) {
                //adulto
                genero = 'Homem'
                img.setAttribute('src','/img/adultoh.png');
                res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`;
                res.appendChild(img)

            } else {
                //idoso
                genero = 'Idoso'
                img.setAttribute('src','/img/idoso.png');
                res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`;
                res.appendChild(img)

            }
            //sexo feminino

        } else if (fsex[1].checked) {
           
            if (idade >= 0 && idade < 10) {
                // criança
                genero = "Menina"
                img.setAttribute('src','/img/bebef.png');
                res.innerHTML = `Detectamos uma ${genero} com ${idade} anos.`;
                res.appendChild(img)

            } else if ( idade < 21) {
                //jovem
                genero = "Adolecente"
                img.setAttribute('src','/img/jovemf.png');
                res.innerHTML = `Detectamos uma ${genero} com ${idade} anos.`;
                res.appendChild(img)

            } else if (idade < 50) {
                //adulto
                genero = "Mulher"
                img.setAttribute('src','/img/adultom.png');
                res.innerHTML = `Detectamos uma ${genero} com ${idade} anos.`;
                res.appendChild(img)

            } else {
                //idoso
                genero = "Idosa"
                img.setAttribute('src','/img/idosa.png');
                res.innerHTML = `Detectamos uma ${genero} com ${idade} anos.`;
                res.appendChild(img) 
                   
            }

        }
        
        
    }


}