import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export interface Aquarium {
  id: number;
  type: string;
  capacity: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataGetterService {
  baseUrl = 'http://ionic-api/';

  private aquariums: Aquarium[];
  private users = [];
  private fish = [];

  private userName = '';
  private token = '';

  constructor(
    private http: HttpClient
  ) { }

  checkUser(user) {
    return this.http.post<any>(this.baseUrl + '?action=login', user);
  }

  getAquariums(): Observable<Aquarium[]> {
    return this.http.get<any>(this.baseUrl + '?action=get-aquariums&token=' + this.token);
  }

  editAquarium(aquarium) {
    return this.http.post<any>(
      this.baseUrl + '?action=edit-aquarium&token=' + this.token,
      aquarium
    );
  }

  addAquarium(aqua: Aquarium) {
    return this.http.post<any>(
      this.baseUrl + '?action=add-aquarium&token=' + this.token,
      aqua
    );
  }

  deleteAquarium(aqua: Aquarium) {
    return this.http.post<any>(
      this.baseUrl + '?action=del-aquarium&token=' + this.token,
      aqua
    );
  }

  getUser() {
    return this.userName;
  }

  setUser(username: string) {
    this.userName = username;
  }

  setToken(token: string) {
    this.token = token;
  }

  userExists(name: string): boolean {
    return this.users.indexOf(name) !== -1;
  }

  getFish(aquaId: number): Observable<any[]>{
    return this.http.get<any>(
      this.baseUrl + '?action=get-fish&group='+ aquaId + '&token=' + this.token
    );
  }

}
