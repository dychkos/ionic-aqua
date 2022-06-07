import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataGetterService} from '../services/data-getter.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userName: string;

  constructor(
    private router: Router,
    private dataGetter: DataGetterService,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  login() {
    if (this.dataGetter.userExists(this.userName)) {
      this.dataGetter.setUser(this.userName);
      this.router.navigate(['/home']);
    } else {
      this.userNotExistsAlert();
    }
  }

  async userNotExistsAlert() {
    const alert = await this.alertController.create({
      header: 'Увага',
      subHeader: 'Помилка унтефікації',
      message: `Користувача ${this.userName} не знайдено`,
      buttons: ['OK']
    });

    await alert.present();
  }

}
