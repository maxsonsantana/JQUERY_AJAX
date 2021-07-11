function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = `https://viacep.com.br/ws/${cep}/json/`
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            //alert(response.logradouro);
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            $("#logradouro").html(response.logradouro);            
            //document.getElementById("bairro").innerHTML = response.bairro;
            $("#bairro").html(response.bairro);
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;
            document.getElementById("numCep").innerHTML =`CEP: ${response.cep}`;
            $(".cep").show  ();
        }
    })
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
})

