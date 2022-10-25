import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';



import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { SupportFormComponent } from './Components/support-form/support-form.component';
import { SubmitSuccessComponent } from './Components/submit-success/submit-success.component';
import { TrainingComponent } from './Components/training/training.component';
import { KnowledgebaseComponent } from './Components/knowledgebase/knowledgebase.component';
import { AdminPortalComponent } from './Components/admin-portal/admin-portal.component';
import { AuthComponent } from './Components/auth/auth.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SupportFormComponent,
    SubmitSuccessComponent,
    TrainingComponent,
    KnowledgebaseComponent,
    AdminPortalComponent,
    AuthComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
