import { Injectable } from '@angular/core';
import { filter } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class KnowledgebaseButtonsService {

  machineTypeButton = [
    {
      type: "Embroidery Machine", brandRoute: "/embroideryBrands", brand: "SWF", modelsRoute: "/swfModels", model: "a series", modelInfoRoute: ""
    },
    {
      type: "White Toner/Sublimation Printer", brandRoute: "/printerBrands", brand: "OKI", modelsRoute: "/printerModels", model: "Pro9541WT", modelInfoRoute: ""
    }, {
      type: "White Toner/Sublimation Printer", brandRoute: "/printerBrands", brand: "OKI", modelsRoute: "/printerModels", model: "8432", modelInfoRoute: ""
    }
  ];

  typeClicked: Boolean = true;
  brandClicked: Boolean = false;
  modelClicked: Boolean = false;
  typeSelected = "";
  brandSelected = "";
  modelSelected = "";
  uniqueType = []
  uniqueBrand =[]
  uniqueModel=[]


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

    this.brandClicked = true;

    const filteredTypeArray = this.machineTypeButton.filter(filter => filter.type == this.typeSelected)
    console.log(filteredTypeArray)
    console.log(this.typeSelected)


    let unique = filteredTypeArray.filter(element => {
      const isDuplicate = this.uniqueBrand.includes(element.brand);
      if (!isDuplicate) {
        this.uniqueBrand.push(element.brand);
        return true;
      }
      return false;
    });
    console.log(unique)
    return unique


  }}
