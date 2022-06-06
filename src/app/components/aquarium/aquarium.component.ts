import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Aquarium } from 'src/app/services/data-getter.service';

@Component({
  selector: 'app-aquarium',
  templateUrl: './aquarium.component.html',
  styleUrls: ['./aquarium.component.scss'],
})
export class AquariumComponent implements OnInit {

  @Input() aqua: Aquarium;
  @Input() isNew: boolean;

  @Output() addAquarium = new EventEmitter();
  @Output() cancelAddingAquarium = new EventEmitter();

  title: string;

  constructor() { }

  ngOnInit() {
    if(this.isNew) {
      this.aqua = {
        id: null,
        capacity: null,
        type: ''
      };
      this.title = 'Новий акваріум';
    }
  }

  addNew() {
    if (this.isNew) {
      this.addAquarium.emit(this.aqua);
    }
  }

  cancelAdding() {
    if (this.isNew) {
      this.cancelAddingAquarium.emit();
    }
  }

}