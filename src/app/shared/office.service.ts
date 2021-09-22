import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{AngularFirestore} from'@angular/fire/compat/firestore';
import { Office } from '../models/Office';
import{map} from'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  id: string="";
  office!:Office;
  
  constructor(public fireServices:AngularFirestore) { 
    
  }

  getOfficeList():Observable<Office[]>{
    return this.fireServices.collection<Office>('Office').snapshotChanges()
                            .pipe(
                              map((changes: any) => changes.map((c:any) =>
                               ({
                                 id: c.payload.doc.id,
                                 ... c.payload.doc.data()
                               }) 
                              ))
                            );

  }
  
  getOffice(id: string):Observable<Office>{ 
    return this.fireServices.doc<Office>(`Office/${id}`)
                      .snapshotChanges()
                      .pipe(
                        map((action:any) =>{
                          if(action.payload.exist === false){
                            return new Object as Office;
                          }else{
                            const data = action.payload.data() as Office;
                            return data;
                          }
                        })
                      );
  }

  addOffice(office:Office):void{
    this.fireServices.collection<Office>("Office").add(office);
  }

  updateOffice(office:Office, officeId:string){
      this.fireServices.collection<Office>("Office").doc(officeId).update(office);
  }

  deleteOffice(officeId:string){
    this.fireServices.doc<Office>(`Office/${officeId}`).delete();
  }
}
