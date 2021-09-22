import { Component, OnInit, Input } from '@angular/core';
import { Office } from 'src/app/models/Office';
import {OfficeService} from'src/app/shared/office.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-office',
  templateUrl: './add-edit-office.component.html',
  styleUrls: ['./add-edit-office.component.css']
})
export class AddEditOfficeComponent implements OnInit {

  constructor(private _officeService:OfficeService, private router: Router, private route: ActivatedRoute) { 
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

//Properties
 @Input() office:Office; 
 id:string = "";
 OfficeName!:any;
 OfficeLocation!:string;
 OfficeEmail!:string;
 OfficeTellNumber!:string;
 OfficeMaxNumberOfOccupants:number = 0;
 color!:string;
 OfficeList: Office[] = [];
 
  ngOnInit(): void {    
    this.getOfficeList();   
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this._officeService.getOffice(this.id).subscribe(o => this.office = o);

    //assign properties
    this.id = this.office.id;
    this.OfficeName = this.office.OfficeName;
    this.OfficeLocation = this.office.OfficeLocation;
    this.OfficeEmail = this.office.OfficeEmail;
    this.OfficeTellNumber = this.office.OfficeTellNumber;
    this.OfficeMaxNumberOfOccupants = this.office.OfficeMaxNumberOfOccupants;
    this.color = this.office.color;
  }

  getOfficeList(){       
    this._officeService.getOfficeList().subscribe((o:Office[]) => {
      this.OfficeList = o;
    });
  }  

  saveOffice(officeForm: NgForm){
    if(this.id === "") {
      this._officeService.addOffice(officeForm.value);      
    }else{    
      this._officeService.updateOffice(officeForm.value, this.id);
    }
  }
}
