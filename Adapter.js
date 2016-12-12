class Animal {
    say() {
        console.log('abstract word');
    }
}

class Cat {
    meow() {
        console.log('meow meow meeeeoooow');
    }
}


class CatAdapter extends Animal {
    constructor() {
        super()
        this.cat = new Cat();
    }

    say() {
        this.cat.meow();
    }
}


/*use example
 let catAdapter = new CatAdapter();
 catAdapter.say();*/