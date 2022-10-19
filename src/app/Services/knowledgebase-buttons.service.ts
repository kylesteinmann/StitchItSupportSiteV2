import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class KnowledgebaseButtonsService {

  machineTypeButton = [
    {
      type: "Embroidery Machine",
      brandRoute: "/embroideryBrands",
      brand: "SWF",
      modelsRoute: "/swfModels",
      model: "a series",
      modelInfoRoute: ""
    },
    {
      type: "White Toner/Sublimation Printer",
      brandRoute: "/printerBrands",
      brand: "OKI",
      modelsRoute: "/printerModels",
      model: "Pro9541WT",
      modelInfoRoute: ""
    }, {
      type: "White Toner/Sublimation Printer",
      brandRoute: "/printerBrands",
      brand: "OKI",
      modelsRoute: "/printerModels",
      model: "8432",
      modelInfoRoute: ""
    }
  ];

  uniqueTypeButtons() {
    const uniqueIds = [];

    const unique = this.machineTypeButton.filter(element => {
      const isDuplicate = uniqueIds.includes(element.type);

      if (!isDuplicate) {
        uniqueIds.push(element.type);

        return true;
      }

      return false;
    });

    return unique

  }

}
