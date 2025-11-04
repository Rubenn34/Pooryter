// Atribui a função contar() ao evento de digitação do campo textarea#msg
msg.oninput = contar;

function contar(){
    // Atribui o tamanho (length) do conteúdo do textarea#msg para o span#contagem
    contagem.innerText = msg.value.length;
}