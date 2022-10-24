import { Component, OnInit } from '@angular/core';
import { AdminPortalService } from 'src/app/Services/admin-portal.service';
import { KnowledgebaseButtonsService } from 'src/app/Services/knowledgebase-buttons.service';

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

  ngOnInit(): void {
  }

}
