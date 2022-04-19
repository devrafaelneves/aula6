$.support.cors = true;

$(document).ready(
    function(){
        $('#conteudo').load("pages/pagina1.html")
    }
    
);


$('#BtPágina1').click(
    function(){
        alert('Hello, JAVA');
    }
)
$('#BtPágina2').click(
    function(){
        //console.log('Clique do botão 2');
        $('#conteudo').load("pages/pagina2.html")
    }
)
$('#BtPágina3').click(
    function(){
        $('#conteudo').load("pages/pagina3.html")
    }
)


