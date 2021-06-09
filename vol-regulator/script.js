let volume = 50
function render(){
    let screen = document.getElementById('player').firstElementChild;
   // let screen = document.getElementsByTagName("input")[0]

    let slider = document.getElementById('player').children[1].children[1];
   // let slider = document.getElementsByTagName("input")[1]

    screen.value = volume
    slider.value = volume


// Variabila - volume este utilizata  pentru setarea volumului audio/video. Proprietatea acestuia seteaza 
// sau returneaza volumul curent al player-ului .

}
function up(){
   volume++
   render()
}

function down(){
    volume--
    render()
}

function change(){
}
