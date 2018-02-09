class Carro{
    constructor(name, color, turnOn) {
        this.name = name;
        this.color = color;
        this.turnOn = turnOn;
    };
    speak() {
        //Ifs mostram se o carro esta ligado ou desligado!
        let onOff;
        this.turnOn ? onOff = 'Ligado' : onOff = 'Desligado';
        console.log(`O ${this.name} está ${onOff} `);
        /*if(this.turnOn === true){
            let onOff = 'Ligado'
                console.log(`O ${this.name} está ${onOff} `);
        } else {
            let onOff = 'Desligado'
                console.log(`O ${this.name} está ${onOff} `);
        }
        console.log(`O ${this.name} é da cor ${this.color}`);*/
    } 

    buzina(){
        console.log("Buzina");
    }    
};
class Nissan extends Carro {
    constructor(name,color,turnOn){
        super(name,color,turnOn);
        this.fabricator = `nissan`;
    }
speak(){
    super.speak(); //função que retorna o speak da classe Carro usando o super.speak();
    console.log(`${this.fabricator} é a montadora`);
    console.log(`${this.name} tem motor r34`);
    }
}

const car = new Nissan(`Carro Genérico`, `Cor Genérica` , true);
