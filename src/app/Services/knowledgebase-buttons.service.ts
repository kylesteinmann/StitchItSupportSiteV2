import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { MediaData } from '../Models/media-data';

@Injectable({
  providedIn: 'root',
})
export class KnowledgebaseButtonsService implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  machineTypeButton: MediaData[] = [];
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
      (filter) =>
        filter.brand.trim() === this.brandSelected.trim() &&
        filter.type.trim() === this.typeSelected.trim()
    );

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
      (filter) =>
        filter.model.trim() === this.modelSelected.trim() &&
        filter.brand.trim() === this.brandSelected.trim() &&
        filter.type.trim() === this.typeSelected.trim()
    );
    this.modelClicked = !this.modelClicked;
    this.mediaClicked = !this.mediaClicked;
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

  public fetchMedia() {
    this.http
      .get<{ [key: string]: MediaData }>(
        'https://stitch-it-support-site-default-rtdb.firebaseio.com/media.json'
      )
      .pipe(
        map((responseData) => {
          const mediaArray: MediaData[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              mediaArray.push({ ...responseData[key], id: key });
            }
          }
          return mediaArray;
        })
      )
      .subscribe((media) => {
        this.machineTypeButton = media;
      });
  }
}
