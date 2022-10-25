import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportFormComponent } from './Components/support-form/support-form.component';
import { HeaderComponent } from './Components/header/header.component';
import { SubmitSuccessComponent } from './Components/submit-success/submit-success.component';
import { TrainingComponent } from './Components/training/training.component';
import { AdminPortalComponent } from './Components/admin-portal/admin-portal.component';
import { KnowledgebaseButtonsService } from './Services/knowledgebase-buttons.service';
import { KnowledgebaseComponent } from './Components/knowledgebase/knowledgebase.component';
import { AuthComponent } from './Components/auth/auth.component';




const routes: Routes = [
  {path: 'supportForm', component: SupportFormComponent},
  {path: 'header', component: HeaderComponent},
  {path:'successSubmit', component: SubmitSuccessComponent},
  {path:'training', component:TrainingComponent},
  {path: 'adminPortal', component:AdminPortalComponent},
  {path:'', component:KnowledgebaseComponent},
  {path: "auth", component:AuthComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
