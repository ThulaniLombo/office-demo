import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Office } from 'src/app/models/Office';
import { OfficeService } from 'src/app/shared/office.service';

@Component({
  selector: 'app-office-navbar',
  templateUrl: './office-navbar.component.html',
  styleUrls: ['./office-navbar.component.css']
})
export class OfficeNavbarComponent implements OnInit {

  constructor(private _officeService:OfficeService,  private route: ActivatedRoute) {  
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

 @Input() office!:Office;
  id:string ="";

  ngOnInit(): void {    
    this.id = this.route.snapshot.paramMap.get('id') as string;    
    this._officeService.getOffice(this.id).subscribe(o => this.office = o);
  }

}
