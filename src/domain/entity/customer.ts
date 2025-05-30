import Address from "../value-object/address";

export default class Customer {
  private _id: string;
  private _name: string;
  private _address?: Address;
  private _rewardPoints: number = 0;
  private _active: boolean = true;

  constructor(id: string, name: string, address?: Address) {
    this._id = id;
    this._name = name;
    this._address = address;

    this.validate();
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error("Id is required");
    }

    if (this._name.length === 0) {
      throw new Error("Name is required");
    }

    return true;
  }

  changeName(name: string) {
    this._name = name;
  }

  isActive(): boolean {
    return this._active;
  }

  activate() {
    if (this._address === undefined) {
      throw new Error("Address is mandatory to activate a customer");
    }

    this._active = true;
  }

  deactivate() {
    this._active = false;
  }

  addRewardPoints(points: number) {
    this._rewardPoints += points;
  }

  set Address(address: Address) {
    this._address = address;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get rewardPoints(): number {
    return this._rewardPoints;
  }
}
