

/*Constructors for zoo animals*/

    function Fox(name, age){
        this.name = name;
        this.age = age;
        this.type = "Fox"
        this.img = "fox.jpg"
    }

    function Tiger(name, age){
        this.name = name;
        this.age = age;
        this.type = "Siberian Tiger"
        this.img = "tiger.jpg"
    }

    function Leopard(name, age){
        this.name = name;
        this.age = age;
        this.type = "Snow Leopard"
        this.img = "leopard.jpg"
    }

    function Lynx(name, age){
        this.name = name;
        this.age = age;
        this.type = "Lynx"
        this.img = "lynx.png"
    }

/* Array of zoo animals and their properties*/

    var animals = [ new Fox(), new Tiger(), new Leopard(), new Lynx()];
    var ages = ["Lara", "Megahn", "Olaf", "Zori"];


    function generateRandomIndex(maxIndex){
        var randNum = Math.floor(Math.random()*maxIndex);
        console.log(randNum);
    }