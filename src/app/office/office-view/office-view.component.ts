import { Component, OnInit } from '@angular/core';
import { Office } from 'src/app/models/Office';

@Component({
  selector: 'app-office-view',
  templateUrl: './office-view.component.html',
  styleUrls: ['./office-view.component.css']
})
export class OfficeViewComponent implements OnInit {

  constructor() {
    this.office={
      id:"",
      OfficeId: "",
      OfficeName: "",
      OfficeLocation: "",
      OfficeEmail: "",
      OfficeTellNumber: "",
      OfficeMaxNumberOfOccupants: 0,
      color: ""      
    };  
   }

  office!:Office;
  ngOnInit(): void {
  }

}
