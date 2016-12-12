export class ApiService {

	getData() {
		return [
			{ name: "Bar One" },
			{ name: "Pub Two" }
		]
	}

  // public name: Engine;
  // constructor() {
  //   this.tires = new Tires();
  // }
  // // Method using the name and tires
  // drive() {
  //   return `${this.description} car with ` +
  //     `${this.name.cylinders} cylinders and ${this.tires.make} tires.`;
  // }
}
