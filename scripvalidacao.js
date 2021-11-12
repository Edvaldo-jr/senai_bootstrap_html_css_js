function Verifica() {
    var nome = document.getElementById("primeironome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var usuario = document.getElementById("usuario").value;
    var cidade = document.getElementById("cidade").value;
    var estado = document.getElementById("validationDefault04").value;
    var cep = document.getElementById("validationDefault05").value;
    if (nome =='' || sobrenome == '' || usuario == '' || cidade == ''|| cep =='' || estado == '')
    
        alert ("Todos os campos devem ser preenchidos."); 
    

    else
        alert ("Cadastro realizado com sucesso !!!");
    
 
}

   


