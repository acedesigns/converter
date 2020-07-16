/* =======================================================
 *
 * Created by anele on 2020/07/15.
 * @anele_ace
 *
 * =======================================================
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FormsModule,
        HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
