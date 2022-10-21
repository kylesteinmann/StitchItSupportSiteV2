import { Injectable } from '@angular/core'



@Injectable({
  providedIn: 'root'
})
export class KnowledgebaseButtonsService {

  machineTypeButton = [
    {
      type: "Embroidery Machine", brand: "SWF", model: "a series", mediaName:" SWF test", mediaDescription:"SWF tested test", media: "https://console.gotoassist.com/#/console"
    },
    {
      type: "White Toner/Sublimation Printer", brand: "OKI", model: "Pro9541WT", mediaName:"OKI test", mediaDescription:"OKI tested test", media: "https://stitch-it-international-inc.helpscoutdocs.com/article/239-helpful-links-and-tutorials"
    },
    {
      type: "Embroidery Machine", brand: "SWF", model: "a series", mediaName:" SWF test", mediaDescription:"SWF tested test", media: "https://console.gotoassist.com/#/console"
    },
    {
      type: "White Toner/Sublimation Printer", brand: "OKI", model: "Pro9541WT", mediaName:"OKI test", mediaDescription:"OKI tested test", media: "https://stitch-it-international-inc.helpscoutdocs.com/article/239-helpful-links-and-tutorials"
    },
    {
      type: "Embroidery Machine", brand: "SWF", model: "a series", mediaName:" SWF test", mediaDescription:"SWF tested test", media: "https://console.gotoassist.com/#/console"
    },
    {
      type: "White Toner/Sublimation Printer", brand: "OKI", model: "Pro9541WT", mediaName:"OKI test", mediaDescription:"OKI tested test", media: "https://stitch-it-international-inc.helpscoutdocs.com/article/239-helpful-links-and-tutorials"
    }
  ];

  typeClicked: Boolean = true;
  brandClicked: Boolean = false;
  modelClicked: Boolean = false;
  mediaClicked: Boolean = false;
  typeSelected = "";
  brandSelected = "";
  modelSelected = "";
  uniqueType = []
  uniqueBrand = []
  uniqueModel = []
  uniqueMedia = []


  uniqueTypeButtons() {
    const uniqueIds = [];
    let unique = this.machineTypeButton.filter(element => {
      const isDuplicate = uniqueIds.includes(element.type);
      if (!isDuplicate) {
        uniqueIds.push(element.type);
        return true;
      }
      return false;
    });
    return unique
  }


  uniqueBrandButtons() {
    this.typeClicked = !this.typeClicked;;
    this.brandClicked = !this.brandClicked;;
    const filteredTypeArray = this.machineTypeButton.filter(filter => filter.type.trim() === this.typeSelected.trim())
    this.uniqueBrand = filteredTypeArray.filter(element => {
      const isDuplicate = this.uniqueBrand.includes(element.brand);
      if (!isDuplicate) {
        this.uniqueBrand.push(element.brand);
        return true;
      }
      return false;
    });
    return this.uniqueBrand
  }


  uniqueModelButtons() {
    this.brandClicked = !this.brandClicked;
    this.modelClicked = !this.modelClicked;
    const filteredTypeArray = this.machineTypeButton.filter(filter => filter.brand.trim() === this.brandSelected.trim())
    console.log(filteredTypeArray)
    console.log(this.modelSelected)
    this.uniqueModel = filteredTypeArray.filter(element => {
      const isDuplicate = this.uniqueModel.includes(element.model);
      if (!isDuplicate) {
        this.uniqueModel.push(element.model);
        return true;
      }
      return false;
    });
    return this.uniqueModel
  }

  uniqueMediaCards() {
    this.uniqueMedia = this.machineTypeButton.filter(filter => filter.brand.trim() === this.brandSelected.trim())
    this.modelClicked = !this.modelClicked;
    this.mediaClicked = !this.mediaClicked;

    console.log(this.uniqueModel)
  }

}


