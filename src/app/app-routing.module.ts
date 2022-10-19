import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportFormComponent } from './Components/support-form/support-form.component';
import { HeaderComponent } from './Components/header/header.component';
import { SubmitSuccessComponent } from './Components/submit-success/submit-success.component';
import { TrainingComponent } from './Components/training/training.component';




const routes: Routes = [
  {path: 'supportForm', component: SupportFormComponent},
  {path: 'header', component: HeaderComponent},
  {path:'successSubmit', component: SubmitSuccessComponent},
  {path:'training', component:TrainingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
