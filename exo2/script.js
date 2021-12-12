class Fighter{
    constructor(name,weapon, health){
        this.name = name;
        this.weapon = weapon;
        this.health = health;
    }
}


let damage = 0
const rdmDmg = () =>{
    damage = Math.floor(Math.random() * 6)   
    return damage 

    
}

const firstPerso = new Fighter("Théo",1 , 10)
const secPerso = new Fighter("Marc",1 , 10)

const dealDamage = (victime,dealDamage) =>{
    victime.health -= dealDamage
    
}

const showStats = (caractere1, caractere2) =>{
    console.log(`A ma droite ${caractere1.name} avec ${caractere1.health} point de vie restant 
    \net a ma gauche ${caractere2.name} avec ${caractere2.health} point de vie restant `)
}
let weapon1 = 0
const getWeapon = (player) => {
    weapon1 = rdmDmg()
    if (player.weapon >= weapon1) {
        console.log(`${player.name} à trouver une arme mais décide de ne pas la changer`)
    } else{
        player.weapon = weapon1
        console.log(`${player.name} à trouver une arme et souhaite la prendre`);;
    }
}


const game = () => {
    while (firstPerso.health > 0 && secPerso.health > 0){
        console.log(`${getWeapon(firstPerso)}
        \nil aura donc l'honneur d'attaquer en premier
        \nThéo inflige ${firstPerso.weapon} de dégât à Théo 
        \n${getWeapon(secPerso)}
        \nil ne se laisse pas faire et inflige ${secPerso.weapon} de dégat à Théo`)
        dealDamage(secPerso,firstPerso.weapon )
        dealDamage(firstPerso, secPerso.weapon)
        showStats(firstPerso, secPerso)
    
    }
}
game()
if(secPerso.health === firstPerso.health){
    console.log("Égalité entre c'est deux champions c'est incroyable !");
}
else if (firstPerso.health <= 0) {
    console.log(`${secPerso.name}  a gagné ce magnifique combat, applaudissez  le comme il ce doit !`)

}else if(secPerso.health <= 0){
    console.log(`${firstPerso.name} a gagné ce magnifique combat, applaudissez  le comme il ce doit !`)
}