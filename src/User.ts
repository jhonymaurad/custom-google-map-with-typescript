import faker from 'faker';
import { Imappable } from './CustomMap';

export class User implements Imappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'blue';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `user name: ${this.name}`;
  }
}
