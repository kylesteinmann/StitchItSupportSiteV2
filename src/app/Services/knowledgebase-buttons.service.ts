import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { MediaData } from '../Models/media-data';

@Injectable({
  providedIn: 'root',
})
export class KnowledgebaseButtonsService {
  constructor(private http: HttpClient) {
  }

  machineTypeButton:MediaData[] = [
    {type:"Embroidery Machine", brand:"SWF", model:"A series", media:"www.google.com", mediaDescription:"This is a test to see if this app will function correctly!", mediaName:"Test"},
    {type:"White Toner Printer", brand:"Crio", model:"9541", media:"www.google.com", mediaDescription:"This is a test to see if this app will function correctly!", mediaName:"Test"}


  ];
  newMedia = {};
  typeClicked: Boolean = true;
  brandClicked: Boolean = false;
  modelClicked: Boolean = false;
  mediaClicked: Boolean = false;
  typeSelected = '';
  brandSelected = '';
  modelSelected = '';
  uniqueType = [];
  uniqueBrand = [];
  uniqueModel = [];
  uniqueMedia = [];

  uniqueTypeButtons() {
    const uniqueIds = [];
    let unique = this.machineTypeButton.filter((element) => {
      const isDuplicate = uniqueIds.includes(element.type);
      if (!isDuplicate) {
        uniqueIds.push(element.type);
        return true;
      }
      return false;
    });
    return unique;
  }

  uniqueBrandButtons() {
    this.typeClicked = !this.typeClicked;
    this.brandClicked = !this.brandClicked;
    const filteredTypeArray = this.machineTypeButton.filter(
      (filter) => filter.type.trim() === this.typeSelected.trim()
    );
    this.uniqueBrand = filteredTypeArray.filter((element) => {
      const isDuplicate = this.uniqueBrand.includes(element.brand);
      if (!isDuplicate) {
        this.uniqueBrand.push(element.brand);
        return true;
      }
      return false;
    });
    return this.uniqueBrand;
  }

  uniqueModelButtons() {
    this.brandClicked = !this.brandClicked;
    this.modelClicked = !this.modelClicked;
    const filteredTypeArray = this.machineTypeButton.filter(
      (filter) => filter.brand.trim() === this.brandSelected.trim()
    );
    console.log(filteredTypeArray);
    console.log(this.modelSelected);
    this.uniqueModel = filteredTypeArray.filter((element) => {
      const isDuplicate = this.uniqueModel.includes(element.model);
      if (!isDuplicate) {
        this.uniqueModel.push(element.model);
        return true;
      }
      return false;
    });
    return this.uniqueModel;
  }

  uniqueMediaCards() {
    this.fetchMedia();
    this.uniqueMedia = this.machineTypeButton.filter(
      (filter) => filter.model.trim() === this.modelSelected.trim()
    );
    this.modelClicked = !this.modelClicked;
    this.mediaClicked = !this.mediaClicked;

    console.log(this.uniqueModel);
  }

  startOver() {
    this.typeClicked = true;
    this.brandClicked = false;
    this.modelClicked = false;
    this.mediaClicked = false;
    this.typeSelected = '';
    this.brandSelected = '';
    this.modelSelected = '';
    this.uniqueType = [];
    this.uniqueBrand = [];
    this.uniqueModel = [];
    this.uniqueMedia = [];
  }

  addMedia(newMedia) {
    this.http
      .post<{name:string}>(
        'https://console.firebase.google.com/project/stitch-it-support-site/database/stitch-it-support-site-default-rtdb/data/~2F/media.json',
        newMedia
      )
      .subscribe((responseData) => {
        console.log(newMedia);
      });
  }

  private fetchMedia() {
    this.http
      .get<{[key: string] : MediaData}>(
        'https://console.firebase.google.com/project/stitch-it-support-site/database/stitch-it-support-site-default-rtdb/data/~2F/media.json'
      )
      .pipe(
        map((responseData) => {
          const mediaArray:MediaData[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              mediaArray.push({ ...responseData[key], id: key });
            }
          }
          return mediaArray;
        })
      )
      .subscribe((media) => {
        this.machineTypeButton = media
      });
  }
}
