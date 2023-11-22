import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { MahasiswaPage } from './mahasiswa.page';

const routes: Routes = [
  {
    path: '',
    component: MahasiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), IonicModule],
  exports: [RouterModule],
})
export class MahasiswaPageRoutingModule {}
