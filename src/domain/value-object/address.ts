export default class Address {
  _street: string = "";
  _number: number = 0;
  _zipCode: string = "";
  _city: string = "";

  constructor(street: string, number: number, zipCode: string, city: string) {
    this._street = street;
    this._number = number;
    this._zipCode = zipCode;
    this._city = city;

    this.validate();
  }

  private validate() {
    if (this._street.length === 0) {
      throw new Error("Street is required");
    }
    if (this._number <= 0) {
      throw new Error("Number is invalid");
    }
    if (this._zipCode.length === 0) {
      throw new Error("ZipCode is required");
    }
    if (this._city.length === 0) {
      throw new Error("City is required");
    }
  }

  toString() {
    return `${this._street}, ${this._number}. ${this._zipCode} - ${this._city}`;
  }
}
