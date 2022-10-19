import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { SupportFormComponent } from './Components/support-form/support-form.component';
import { SubmitSuccessComponent } from './Components/submit-success/submit-success.component';
import { TrainingComponent } from './Components/training/training.component';
import { KnowledgebaseComponent } from './Components/knowledgebase/knowledgebase.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SupportFormComponent,
    SubmitSuccessComponent,
    TrainingComponent,
    KnowledgebaseComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
