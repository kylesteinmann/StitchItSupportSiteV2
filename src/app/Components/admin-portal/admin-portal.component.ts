import { Component, OnInit } from '@angular/core';
import { KnowledgebaseButtonsService } from 'src/app/Services/knowledgebase-buttons.service';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent implements OnInit {

  constructor(public knowledgebaseButtonsService:KnowledgebaseButtonsService) { }

  ngOnInit(): void {
  }

}
