import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AdminComponent } from './admin/admin.component';
import { AdminManageAccountComponent } from './admin-manage-account/admin-manage-account.component';
import { PartnershipComponent } from './partnership/partnership.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProgramComponent } from './program/program.component';
import { FacultyPartnersComponent } from './faculty-partners/faculty-partners.component';
import { FacultyComponent } from './faculty/faculty.component';

const routes: Routes = [
  {path: '', component: SignInComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'admin-page', component: AdminComponent},
  {path: 'program', component: ProgramComponent},
  {path: 'manage-account', component: AdminManageAccountComponent},
  {path: 'partnership', component: PartnershipComponent},
  {path: 'faculty-partners', component: FacultyPartnersComponent},
  {path: 'faculty', component: FacultyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
