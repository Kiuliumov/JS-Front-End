function cats(info){
    const cats = [];

    class Cat{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for(currentCat of info){
        const [catName, catAge] = currentCat.split(' ');
        const cat = new Cat(catName, catAge);
        cat.meow();
    }
}