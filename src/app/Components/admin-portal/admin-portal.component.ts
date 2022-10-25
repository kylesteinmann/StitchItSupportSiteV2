import { Component, OnInit } from '@angular/core';
import { AdminPortalService } from 'src/app/Services/admin-portal.service';
import { KnowledgebaseButtonsService } from 'src/app/Services/knowledgebase-buttons.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent implements OnInit {
newTypeToggle = false
newBrandToggle = false
newModelToggle = false
  constructor(public knowledgebaseButtonsService:KnowledgebaseButtonsService, public adminPortal:AdminPortalService) { }
  addMediaForm: FormGroup;
  ngOnInit() {
    this.addMediaForm = new FormGroup({
      'type': new FormControl(null),
      'brand': new FormControl(null),
      'model': new FormControl(null),
      'mediaType': new FormControl(null),
      'mediaUrl': new FormControl(null),
      'mediaTitle': new FormControl(null),
      'mediaDescription': new FormControl(null)
    })
  }
resetForm(){
  this.addMediaForm.reset(this.addMediaForm.value);
}
}
