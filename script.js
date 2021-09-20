function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var formAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    //testa o ano e o sexo e retorna a faixa etária
    if(formAno.value.length == 0 || Number(formAno.value) > ano ){
      window.alert('[ERRO] - Dados incorretos, verifique e tente novamente!')
    }else{
     var formSex = document.getElementsByName('radsex')
     var idade = ano - Number(formAno.value)
     var genero = ''
     var img = document.createElement('img')
     img.setAttribute('id','foto')
     if(formSex[0].checked){
       genero = 'Homem'
       if(idade >= 0 && idade <= 10){
         //crianca
         img.setAttribute('src','menino.png')
       }else if(idade < 21){
         //jovem
         img.setAttribute('src','rapaz.png')
       }else if(idade < 50){
         //Adulto
         img.setAttribute('src','homem.png')
       }else{
       //Idoso
       img.setAttribute('src','idoso.png')
       }
     }else if(formSex[1].checked){
       genero = 'Mulher'
       if(idade >= 0 && idade <= 10){
         //crianca
         img.setAttribute('src','menina.png')
       }else if(idade < 21){
         //jovem
         img.setAttribute('src','moca.png')
       }else if(idade < 50){
         //Adulto
         img.setAttribute('src','mulher.png')
       }else{
       //Idoso
       img.setAttribute('src','idosa.png')
       }
       
     }
     res.style.textAlign = 'center'
     res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
     res.appendChild(img)
    }
    
   }