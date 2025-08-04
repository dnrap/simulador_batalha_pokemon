//armazenar pokemons e seus atributos
const pokemons = {
    pikachu: {name: 'pikachu', life : 2000 , atk_points: 1125, pts_defesa: 400},
    bulbassaur: {name: 'bulbassaur', life : 2300 , atk_points: 900, pts_defesa: 1000},
    charizard: {name: 'charizard', life : 2000 , atk_points: 1500, pts_defesa: 1000},
    charmander: {name: 'charmander', life : 1000 , atk_points: 560, pts_defesa: 400},
    gengar: {name: 'gengar', life : 1200 , atk_points: 1200, pts_defesa: 450},
}

//definir jogadores
let jogador, cpu;

function atacar(){

}

function escolha(name){
    jogador = [...pokemons[name]];
    let opcoes = pokemons.filter(opcao=> opcao !== name);
    let aleatorio = opcoes[Math.floor(Math.random() * 100 - 1)];
    cpu = [...pokemons[aleatorio]];
    document.getElementById('pokemons').style.display = 'none';
    document.getElementById('batalha').style.display = 'block';

    pegarImagens(jogador, cpu);
    atualizarStatus('a batalha iniciou');

}

function limparBtn(){
    document.getElementById('button-ataque').value = '';

}

function pegarImagens(jogador, cpu){

}
function atulizarStatus(msg){

}