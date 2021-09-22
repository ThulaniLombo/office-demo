import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Staff } from 'src/app/models/Staff';
import { StaffService } from 'src/app/shared/staff.service';

@Component({
  selector: 'app-add-edit-staff',
  templateUrl: './add-edit-staff.component.html',
  styleUrls: ['./add-edit-staff.component.css']
})
export class AddEditStaffComponent implements OnInit {

  constructor(private _staffServices: StaffService, private route: ActivatedRoute, private router:Router) { }
  @Input() staff:Staff ={
    id: '',
    FirstName: '',
    LastName: '',
    OfficeId: ''
  };
  
  ActivateAddEditStaffComp: boolean = false;
  staffList:Staff[] = [];
  id:string ="";
  firstName!:string;
  lastName!:string;
  officeId!:string;

  ngOnInit(): void {
    this.getStaffList();
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this._staffServices.getStaff( this.id).subscribe(s => this.staff = s);
    
    //assign
    this.id = this.staff.id;
    this.firstName = this.staff.FirstName;
    this.lastName = this.staff.LastName;
    this.officeId = this.staff.OfficeId;
  }

  getStaffList(){
    this._staffServices.getStaffList().subscribe((s:Staff[]) =>{
      this.staffList = s;
    })
  }

  addStaff(staffForm: NgForm){
      if(this.id === "") {
        this._staffServices.addStaff(staffForm.value);      
      }else{  
        this._staffServices.updateStaff(staffForm.value, this.id);
      }  
  }
}
