import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminPortalService } from 'src/app/Services/admin-portal.service';
import { KnowledgebaseButtonsService } from 'src/app/Services/knowledgebase-buttons.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css'],
})
export class AdminPortalComponent implements OnInit, OnDestroy {
  private userSub: Subscription;

  newTypeToggle = false;
  newBrandToggle = false;
  newModelToggle = false;

  constructor(
    public knowledgebaseButtonsService: KnowledgebaseButtonsService,
    public adminPortal: AdminPortalService,
    public authService: AuthService
  ) {}

  addMediaForm: FormGroup;

  ngOnInit() {
    this.addMediaForm = new FormGroup({
      type: new FormControl(null),
      brand: new FormControl(null),
      model: new FormControl(null),
      mediaType: new FormControl(null),
      mediaUrl: new FormControl(null),
      mediaTitle: new FormControl(null),
      mediaDescription: new FormControl(null),
    });

    this.userSub = this.authService.user.subscribe(
      (user) => (this.authService.isAuthenticated = !!user)
    );
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
