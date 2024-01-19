import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor() { }

  onSubscribe(){
    // Some Logic
    alert("Subscribe Successfully");
  }
}
