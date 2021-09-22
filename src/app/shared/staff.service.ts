import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {  Observable } from 'rxjs';
import{map} from'rxjs/operators';
import { Staff } from '../models/Staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(public fireServices:AngularFirestore) { 
 
  }

  id:string ="";

  getStaffList():Observable<Staff[]>{
    return this.fireServices.collection<Staff>('staff').snapshotChanges()
                .pipe(
                  map((changes:any) => changes.map((c:any) =>({
                    id: c.payload.doc.id,
                    ... c.payload.doc.data()
                  })))
                );
  }

  getStaff(id:string):Observable<Staff>{
    return this.fireServices.doc<Staff>(`staff/${id}`)
          .snapshotChanges()
          .pipe(
            map((action:any) =>{
              if(action.payload.exists === false){
                return new Object as Staff
              }else{
                const data = action.payload.data() as Staff;
                data.id = action.payload.id;
                return data;
              }
            })
          )
  }

addStaff(staff:Staff){
  this.fireServices.collection<Staff>('staff').add(staff);
}

updateStaff(staff:Staff, staffId:string){
  this.fireServices.collection<Staff>('staff').doc(staffId).update(staff);
}

deleteStaff(staffId:string){
  this.fireServices.doc<Staff>(`staff/${staffId}`).delete();
}
  
}
