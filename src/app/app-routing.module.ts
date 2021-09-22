import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfficeViewComponent } from './office/office-view/office-view.component';
import { ShowOfficeComponent } from './office/show-office/show-office.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: ShowOfficeComponent},
  {path: 'office/:id', component:OfficeViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
