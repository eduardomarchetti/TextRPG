let name = prompt(`Qual é o nome do seu personagem:`);
let charRole = prompt(`Qual é a classe do seu personagem? (Warrior, Ranger, Rogue)`);
let lowerCharRole = charRole.toLowerCase();

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
    maxHealth: 10,
    currentHealth: 10,

    equippedWeapon: {
        weaponName: `Espada Enferrujada`,
        minDamage: 1,
        maxDamage: 3,
    },
    equippedArmor: {
        armorName: `Armadura de tecido rasgado`,
        attackBarrierBonus: 1,
    },
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
