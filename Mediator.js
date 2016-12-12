class Mediator {
	send(message,colleague) {	}
}


class ManagerMediator extends Mediator {
	constructor(){
		super()
	}
	send(message,colleague) {

		if (colleague instanceof Customer){
			this._programmist.notify(message);
		} 
		else if (colleague instanceof Programmist){
			this._tester.notify(message);
		}
		else if (colleague instanceof Tester){
			this._customer.notify(message);
		}
	}
}


class Colleague {
	constructor(mediator) {
		this._mediator = mediator;
	}

	send(message) {
		this._mediator.send(message,this);
	}

	notify(message) {}
}


class Customer extends Colleague {
	constructor(mediator) {
		super(mediator);
	}

	notify(message) {
		console.log('Message to customer: ' +  message);
	}
}


class Tester extends Colleague {
	constructor(mediator) {
		super(mediator);
	}

	notify(message) {
		console.log('Message to tester: ' +  message);
	}
}
class Programmist extends Colleague {
	constructor(mediator) {
		super(mediator);
	}

	notify(message) {
		console.log('Message to programmist: ' +  message);
	}
}

/*use example

let mediator = new ManagerMediator();

let customer = new Customer(mediator);
let programmist = new Programmist(mediator);
let tester = new Tester(mediator);

mediator._customer = customer;
mediator._programmist = programmist;
mediator._tester = tester;

customer.send('need to fix new bug');
programmist.send('bug is fixed');
tester.send('bug is tested and doesn\'t block users anymore ');
*/