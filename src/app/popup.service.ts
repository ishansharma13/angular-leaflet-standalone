import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {
  constructor() { }

  makeCapitalPopup(data: any): string { 
   
    return  `
    <div>
    <img src="https://media.istockphoto.com/photos/sunrise-at-the-farmhouse-picture-id1284634579?b=1&k=20&m=1284634579&s=170667a&w=0&h=SfgSMsk34KM-ymnXrAsNWfXCuWrj5Q6DOsYMLM146yY=" style="width: 100%;"/>
    <button type="submit"> Detect </button>
    </div>
    `
  }
}