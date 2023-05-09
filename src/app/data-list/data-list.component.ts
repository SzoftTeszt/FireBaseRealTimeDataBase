import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  
  // konyvek=[
  //   {id:1, cim:"Könyv1", iro:"Kitalált Ember1"},
  //   {id:2, cim:"Könyv2", iro:"Kitalált Ember2"},
  //   {id:3, cim:"Könyv3", iro:"Kitalált Ember3"},
  // ];

  konyvek:any;
  oszlopok=["key","cim","iro"];
  ujKonyv:any={}

  constructor(private bs: BaseService) { 
    this.bs.getAll().snapshotChanges()
    .pipe(
      map((valtozo:any)=>
        valtozo.map((c:any)=>({key:c.payload.key, ...c.payload.val()})
        ))).subscribe({
        next:adat=>{this.konyvek=adat; console.log("Frissítés!"); console.log(this.konyvek)},
        error:err=>console.log(err)
      })    
    }

  ngOnInit(): void {
  }

  addBook(body:any){
      this.bs.add(body)
      .then(()=>console.log("Könyv hozzáadva"))
      .catch((err)=>console.log(err))
  }
  deleteBook(body:any){
      this.bs.delete(body.key)
      .then(()=>console.log("Könyv törölve"))
      .catch((err)=>console.log(err))
  }

  updateBook(body:any){
      this.bs.update(body.key, body)
      .then(()=>console.log("Könyv törölve"))
      .catch((err)=>console.log(err))
  }
}
