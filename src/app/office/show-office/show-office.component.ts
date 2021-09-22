import { Component, OnInit } from '@angular/core';
import { Office } from 'src/app/models/Office';
import {OfficeService} from'src/app/shared/office.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-office',
  templateUrl: './show-office.component.html',
  styleUrls: ['./show-office.component.css']
})
export class ShowOfficeComponent implements OnInit {

  constructor(private _officeService: OfficeService, private route: ActivatedRoute) { 
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

  id:string="";
  OfficeList!: any[];
  ModalTitle!:string;
  ActivateAddEditOfficeComp:boolean=false;
  office!:Office;
  OfficeName!:any;
  OfficeLocation!:string;
  OfficeEmail!:string;
  OfficeTellNumber!:string;
  OfficeMaxNumberOfOccupants:number = 0;

  ngOnInit(): void {
    this.refreshOfficeList();  
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
  }

  getOfficeList(){   
    this._officeService.getOfficeList().subscribe((o:Office[]) => {
      this.OfficeList = o;
    });
  }

  addClick(){  
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
    this.ModalTitle="Add Office";
    this.ActivateAddEditOfficeComp=true;    
  }

  refreshOfficeList(){
    this._officeService.getOfficeList().subscribe((o:Office[]) => {
      this.OfficeList = o;
    });
  }

  editOffice(item:Office){    
    this.office = item; 
    this.ModalTitle="Edit Office";
    this.ActivateAddEditOfficeComp=true;
  }
  
  deleteOffice(item:Office){
    if(confirm("Are you sure you want to delete " +item.OfficeName+" Office?")){
      this._officeService.deleteOffice(item.id);
    }    
  }

  closeClick(){
    this.ActivateAddEditOfficeComp=false;
    this.refreshOfficeList();
  }
}
