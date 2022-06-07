import { Component } from '@angular/core';
import { DataGetterService, Aquarium } from '../services/data-getter.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  showNew = false;
  showEdit = -1;
  userName: string;
  aquariums: Aquarium[];

  constructor(private dataGetter: DataGetterService) {
    this.dataGetter.getAquariums().subscribe(
      data => {
        this.aquariums = data;
      }
    );
    this.userName = this.dataGetter.getUser();
  }

  add() {
    this.showNew = true;
  }

  delete(index: number) {
    this.dataGetter.deleteAquarium(index);
  }

  addAquarium(aquarium: Aquarium) {
    this.dataGetter.addAquarium(aquarium);
    this.showNew = false;
  }

}
