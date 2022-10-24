import { Component, OnInit } from '@angular/core';
import { KnowledgebaseButtonsService } from 'src/app/Services/knowledgebase-buttons.service';

@Component({
  selector: 'app-knowledgebase',
  templateUrl: './knowledgebase.component.html',
  styleUrls: ['./knowledgebase.component.css']
})
export class KnowledgebaseComponent implements OnInit {



  constructor(public knowledgebaseButtonsService:KnowledgebaseButtonsService) { }

  ngOnInit(): void {
    this.knowledgebaseButtonsService.fetchMedia()
  }

}
