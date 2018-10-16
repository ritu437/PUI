

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
    var names = ["Lara", "Megahn", "Olaf", "Zori", "Bellize", "Telig"];
    var ages = [1, 2, 2.5, 1.25, 3.5, 6]
/* Random Name & Age Generator Functions */
    function generateRandomIndex(maxIndex){
        var randNum = Math.floor(Math.random()*maxIndex);
        console.log(randNum);
        return randNum;
    }
    function generateRandomName(){
        var randIndex = generateRandomIndex(names.length);
        var randName = names[randIndex];
        console.log(randName);
        return randName;
    }
    function generateRandomAge(){
        var randIndex = generateRandomIndex(ages.length);
        var randAge = ages[randIndex];
        console.log(randAge);
        return randAge;
    }