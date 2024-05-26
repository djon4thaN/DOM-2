const allcards = document.querySelectorAll('#card');

allcards.forEach(newCard => {
    newCard.setAttribute('id', 'cardOrange');
});

const alltitles = document.querySelectorAll('#titulo-card');

alltitles.forEach(newTitle => {
    newTitle.setAttribute('id', 'newTitle');
    newTitle.innerText = "Meu Card"
});

const description = document.querySelectorAll('#descricao-card');

description.forEach(newP =>{
    newP.innerText = "Descrição modificada pelo JavaScript";
    newP.setAttribute('id', 'newDescription')
});

const btnG = document.querySelectorAll('#botao-editar');

btnG.forEach(newBtn =>{
    newBtn.setAttribute('id', 'btnGreen');
});

const btnR = document.querySelectorAll('#botao-apagar');

btnR.forEach(newBtn =>{
    newBtn.setAttribute('id', 'btnRed');
});

function editarCard(){
    alert('Clicou em editar!');
    return;
}
function apagarCard(){
    const deleteCard = confirm('Deseja apagar o card?');

    if(deleteCard){
        alert('Confirmado!');
        return;
    } else{
        alert('Cancelou!');
        return;
    }
}