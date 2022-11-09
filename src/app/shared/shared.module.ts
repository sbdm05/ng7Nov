import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';
import { TotalClientPipe } from './pipes/total-client.pipe';



@NgModule({
  declarations: [TotalPipe, BtnComponent, TotalClientPipe],
  imports: [CommonModule, RouterModule],
  exports: [TotalPipe, BtnComponent, TotalClientPipe],
})
export class SharedModule {}
