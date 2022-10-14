import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [HomeComponent, DetailsComponent],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
    CardModule,
    ButtonModule,
  ],
})
export class PagesModule {}
