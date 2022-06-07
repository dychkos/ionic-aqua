import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

export interface Aquarium {
  id: number;
  type: string;
  capacity: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataGetterService {

  private aquariums: Aquarium[] = [
    {
      id: 1,
      type: 'square',
      capacity: 200
    },
    {
      id: 2,
      type: 'circle',
      capacity: 50
    }
  ];

  private userName = '';

  private users = ['Admin', 'Aqua'];

  private fish = [
    {id: 1, name: 'Colorado', weight: 100, aquaId: 1},
    {id: 1, name: 'Xwego', weight: 100, aquaId: 1},
    {id: 1, name: 'Pulbo', weight: 100, aquaId: 1},
  ];

  constructor() { }

  getAquariums(): Observable<Aquarium[]> {
    return of(this.aquariums);
  }

  addAquarium(aqua: Aquarium) {
    this.aquariums.push(aqua);
  }

  deleteAquarium(index: number) {
    this.aquariums.splice(index, 1);
  }

  getUser() {
    return this.userName;
  }

  setUser(username: string) {
    this.userName = username;
  }

  userExists(name: string): boolean {
    return this.users.indexOf(name) !== -1;
  }

  getFish(aquaId: number): Observable<any[]>{
    return of(this.fish.filter(fi => fi.aquaId === aquaId));
  }

}
