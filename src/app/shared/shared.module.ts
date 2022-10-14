import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

import { ListComponent } from './list/list.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, ListComponent],
  exports: [HeaderComponent, ListComponent],
  imports: [CommonModule, CardModule, ButtonModule, RouterModule],
})
export class SharedModule {}
