import { Component, OnInit } from '@angular/core';
import {DataGetterService} from '../services/data-getter.service';
import {SharedDataService} from '../services/shared-data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.page.html',
  styleUrls: ['./fish.page.scss'],
})
export class FishPage implements OnInit {
  aquaId: number;
  fish: any[];
  textData: string;

  constructor(
    private dataGetter: DataGetterService,
    private route: ActivatedRoute,
    private sharedData: SharedDataService
  ) { }

  ngOnInit() {
    this.aquaId = +this.route.snapshot.paramMap.get('aqua_id');
    this.dataGetter.getFish(this.aquaId).subscribe(
      data => {
        this.fish = data;
      }
    );
  }

  passData() {
    this.sharedData.setTextData(this.textData);
  }

}
