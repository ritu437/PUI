

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
        this.type = "Tiger"
        this.img = "tiger.jpg"
    }

    function Leopard(name, age){
        this.name = name;
        this.age = age;
        this.type = "Leopard"
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
    var names = ["Lara", "Megahn", "Olaf", "Zori", "Bellize", "Telig", "Loranzo", "Tai", "Theori", "Meju", "Gerrudie"];
    var ages = [1, 2, 2.5, 1.25, 3.5, 6, 5, 4, 4.25]

/* Random Name, Age, and Animal Generator Functions */
    function generateRandomIndex(maxIndex){
        var randNum = Math.floor(Math.random()*maxIndex);
        return randNum;
    }
    function generateRandomName(){
        var randIndex = generateRandomIndex(names.length);
        var randName = names[randIndex];
        return randName;
    }
    function generateRandomAge(){
        var randIndex = generateRandomIndex(ages.length);
        var randAge = ages[randIndex];
        return randAge;
    }
    function generateRandomAnimal(){
        var randIndex = generateRandomIndex(animals.length);
        var randAnimal = animals[randIndex];
        if(randAnimal instanceof Fox){
            return new Fox(generateRandomName(), generateRandomAge());
        }
        if(randAnimal instanceof Tiger){
            return new Tiger(generateRandomName(), generateRandomAge());
        }
        if(randAnimal instanceof Leopard){
            return new Leopard(generateRandomName(), generateRandomAge());
        }
        if(randAnimal instanceof Lynx){
            return new Lynx(generateRandomName(), generateRandomAge());
        }
    }


$(document).ready(function(){
    var animal = generateRandomAnimal();
    $(".animal-name").text(animal.name);
    $(".animal-img").attr("src", animal.img);
    $(".animal-age").text("Age: " + animal.age + " years old");
})
