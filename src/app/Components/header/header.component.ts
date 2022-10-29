import { Component, OnInit } from '@angular/core';
import { KnowledgebaseButtonsService } from 'src/app/Services/knowledgebase-buttons.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public knowledgebaseButtonsService: KnowledgebaseButtonsService
  ) {}

  ngOnInit(): void {}
}
