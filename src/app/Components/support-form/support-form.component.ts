import { Component, OnInit } from '@angular/core';

import { TicketService } from 'src/app/Services/ticket.service';
@Component({
  selector: 'app-support-form',
  templateUrl: './support-form.component.html',
  styleUrls: ['./support-form.component.css'],
})
export class SupportFormComponent implements OnInit {
  constructor(public ticketService: TicketService) {}

  jotFormUrl = "https://submit.jotform.us/submit/93375041647157/"

  ngOnInit(): void {}
}
