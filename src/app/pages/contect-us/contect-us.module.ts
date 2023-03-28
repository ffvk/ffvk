import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContectUsPageRoutingModule } from './contect-us-routing.module';

import { ContectUsPage } from './contect-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContectUsPageRoutingModule
  ],
  declarations: [ContectUsPage]
})
export class ContectUsPageModule {}
