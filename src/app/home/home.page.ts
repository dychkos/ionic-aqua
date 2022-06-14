import { Component } from '@angular/core';
import { DataGetterService, Aquarium } from '../services/data-getter.service';
import  { SharedDataService } from '../services/shared-data.service';

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

  title = 'Aquariums';

  constructor(
    private dataGetter: DataGetterService,
    private sharedData: SharedDataService
  ) {
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

  delete(aqua: Aquarium) {
    this.dataGetter.deleteAquarium(aqua).subscribe(
      res => {
        this.dataGetter.getAquariums().subscribe(
          data => {
            this.aquariums = data;
          }
        );
      }
    );
  }

  addAquarium(aquarium: Aquarium) {
    this.dataGetter.addAquarium(aquarium).subscribe(
      res => {
        this.dataGetter.getAquariums().subscribe(
          data => {
            this.aquariums = data;
          }
        );
      }
    );
    this.showNew = false;
  }

  ionViewDidEnter() {
    if(this.sharedData.getTextData() !== '') {
      this.title = this.sharedData.getTextData();
    }
  }

}
