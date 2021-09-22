import { Component, Input, OnInit } from '@angular/core';
import { Office } from 'src/app/models/Office';
import{Staff} from 'src/app/models/Staff'
import { StaffService } from 'src/app/shared/staff.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-staff',
  templateUrl: './show-staff.component.html',
  styleUrls: ['./show-staff.component.css']
})
export class ShowStaffComponent implements OnInit {

  constructor(private _staffServices: StaffService, private route: ActivatedRoute) { 
    this.staff={
      id:"",
      OfficeId: "",
      FirstName: "",
      LastName: ""
    };
  }

@Input() staff!:Staff;
office!:Office;
ActivateAddEditStaffComp: boolean = false;
ModalTitle!:string;
staffList:Staff[] = [];
NumberOfOccupants!:number;
id:string ="";
maxNumberOfOccupants!: number;

  ngOnInit(): void {
    this.refreshStaffList();   
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this._staffServices.getStaff( this.id).subscribe(s => this.staff  = s);
  }

  addClick(){
    this.staff={
      id:"",
      OfficeId: "",
      FirstName: "",
      LastName: ""
    };
    this.ModalTitle = "Add Staff";
    this.ActivateAddEditStaffComp = true;
  }

  closeClick(){
    this.ActivateAddEditStaffComp=false;
    this.refreshStaffList();
  }

  editStaff(item:Staff){
    this.staff = item;
    this.ModalTitle = "Edit Staff";
    this.ActivateAddEditStaffComp = true;
  }

  deleteStaff(item:Staff){
    if(confirm('Are you sure you want to delete staff member?')){
     this._staffServices.deleteStaff(item.id);
    }
  }

  refreshStaffList(){
    this._staffServices.getStaffList().subscribe((s:Staff[]) =>{
      this.staffList = s;
    });
  }
}
