import { Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { KnowledgebaseButtonsService } from './knowledgebase-buttons.service';
import { HttpBackend, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdminPortalService implements OnInit {
  constructor(
    private http: HttpClient,
    private knowledgebaseButtonsService: KnowledgebaseButtonsService
  ) {}

  ngOnInit(): void {
    this.addMediaForm = new FormGroup({
      type: new FormControl(null),
      brand: new FormControl(null),
      model: new FormControl(null),
      mediaType: new FormControl(null),
      mediaURL: new FormControl(null),
      MediaTitle: new FormControl(null),
      MediaDescription: new FormControl(null),
    });
  }

  addMediaForm: FormGroup;

  types() {
    const uniqueIds = [];
    let unique = this.knowledgebaseButtonsService.machineTypeButton.filter(
      (element) => {
        const isDuplicate = uniqueIds.includes(element.type);
        if (!isDuplicate) {
          uniqueIds.push(element.type);
          return true;
        }
        return false;
      }
    );
    return unique;
  }

  brands() {
    const uniqueIds = [];
    let unique = this.knowledgebaseButtonsService.machineTypeButton.filter(
      (element) => {
        const isDuplicate = uniqueIds.includes(element.brand);
        if (!isDuplicate) {
          uniqueIds.push(element.brand);
          return true;
        }
        return false;
      }
    );
    return unique;
  }

  models() {
    const uniqueIds = [];
    let unique = this.knowledgebaseButtonsService.machineTypeButton.filter(
      (element) => {
        const isDuplicate = uniqueIds.includes(element.model);
        if (!isDuplicate) {
          uniqueIds.push(element.model);
          return true;
        }
        return false;
      }
    );
    return unique;
  }

  addMedia(newMedia: {
    type: string;
    brand: string;
    model: string;
    media: string;
    mediaType: string;
    mediaName: string;
    mediaDescription: string;
  }) {
    this.http
      .post(
        'https://stitch-it-support-site-default-rtdb.firebaseio.com/media.json',
        newMedia
      )
      .subscribe();
  }
}
