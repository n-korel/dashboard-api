/* class Coord {
	lat: number;
	long: number;

	protected test() {
		
	}

	computeD(newlat: number, newlong: number): number {
		return 0;
	}

	constructor(lat: number, long: number) {
		this.lat = lat;
		this.long = long;
	}
}

const point = new Coord(0, 1);

class MapLocation extends Coord {
	private _name: string;
	
	
	get name() {
		return this._name;
	}

	set name(s: string) {
		this._name = s + '_cool!';
	}
	

	override computeD(newlat: number, newlong: number): number {
		console.log(this._name);
		return 1;
	}

	constructor(lat: number, long: number, name: string) {
		super(lat, long);
	}
}

interface LoggerService {
	log: (s: string) => void;
}

class Logger implements LoggerService {
	public   log(s: string) {
		console.log(s);
	};
}

class Myclass<T> {
	a: T;
}

const b = new Myclass<string>();
b.a


abstract class Base {
	print(s: string) {
		console.log(s);
	}

	abstract error(s: string):void; //обязательная реализация
	
}

class BaseExtended extends Base {
	error(s: string) {
 
	}
}

new BaseExtended()//instance

class Animal {
	name: string;
}

class Dog {
	name: string;
	tail: boolean;
}

const puppy: Animal = new Dog(); */

let a = 'Hey';

let b: typeof a;

type Coord = {
	lat: number;
	long: number;
}

type P = keyof Coord;

let c: P = 'long';