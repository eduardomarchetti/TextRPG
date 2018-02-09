let name = prompt(`Qual é o nome do seu personagem:`);
let charRole = prompt(`Qual é a classe do seu personagem? (Warrior, Ranger, Rogue)`);
let lowerCharRole = charRole.toLowerCase();

/*if(lowerCharRole  === `warrior`){
    console.log(charRole);
}else if(lowerCharRole === `ranger`){
    console.log(charRole);
}else if(lowerCharRole === `rogue`){
    console.log(charRole);
}else {
    charRole = prompt(`${charRole} não é valido, escola um dos 3: Warrior, Ranger, Rogue`);
}*/

switch (lowerCharRole){
    case `warrior`:
        console.log(charRole);
        break;
    case `ranger`:
        console.log(charRole);
        break; 
    case `rogue`:
        console.log(charRole);
        break;
    default:
        charRole = prompt(`${charRole} não é valido, escola um dos 3: Warrior, Ranger, Rogue`);
        break;
}

const hero = {
    name: name,
    skills: {
        attack: 0,
        persuasion: 0,
        sneak: 0,
    }
}

const checkClass = (hero, charRole) =>{
    let lowerCharRole = charRole.toLowerCase();
    
    switch (lowerCharRole){
        case `warrior`:
            hero.skills.attack += 3;
            //hero.skills.persuasion ++;
            hero.skills.sneak -- ;
            
            break;
        case `ranger`:
            hero.skills.attack ++ ;
            hero.skills.persuasion ++ ;
            hero.skills.sneak ++ ;
            break; 
        case `rogue`:
            hero.skills.attack --;
            //hero.skills.persuasion ++;
            hero.skills.sneak += 3 ;
            break;
        default:
            charRole = prompt(`${charRole} não é valido, escola um dos 3: Warrior, Ranger, Rogue`);
            checkClass(hero, charRole);
            break;

}
