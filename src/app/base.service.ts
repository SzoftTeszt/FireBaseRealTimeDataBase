import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  ref:AngularFireList<Book>

  constructor(private db:AngularFireDatabase) { 
    this.ref=db.list("/books");
  }

  getAll(){
    return this.ref;
  }

  update(key:string, body:any){
    return this.ref.update(key,body);
  }

  add(body:any)
  {
    return this.ref.push(body);
  }

  delete(key:string){
    return this.ref.remove(key);
  }

  deleteAll(){
    return this.ref.remove();
  }
}
