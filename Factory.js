class SportCompany {
    constructor() {  }

    Create() {  }
}

class Adidas extends SportCompany {
    constructor() {  
        super();      
        this._companyBrand = 'Adidas';
    }

    Create(){
        return new AdidasBoots();
    }
}


class Nike extends SportCompany {
    constructor() {        
        super();
        this._companyBrand = 'Nike';
    }

    Create() {
        return new NikeBoots();
    }
}

class Boots {
  constructor() {}
}

class AdidasBoots extends Boots {
    constructor() {
        super();
        this._bootsMark = 'AdidasBoots';
    }
}

class NikeBoots extends Boots {
    constructor() {
        super();
        this._bootsMark = 'NikeBoots';
    }
}


/*use example

 let adidas = new Adidas();
 let adidasBoots = adidas.Create();*/