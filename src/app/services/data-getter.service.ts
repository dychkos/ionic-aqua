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

}