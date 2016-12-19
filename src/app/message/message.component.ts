import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  key: string;
  description: string;
  user: string;

  items: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.items = this.af.database.list('https://metold-97f86.firebaseio.com');
  }

  ngOnInit() {


  }

  selected(selected: any) {
    console.log(selected.value.user);
    console.log(selected.value.description);
    console.log(selected.$key);

    this.user = selected.value.user;
    this.description = selected.value.description;
    this.key = selected.$key;
  }
  save(value: any) {
    console.log(value);
    this.items.push({ value });
  }

  update(value:any){
    this.items.update(this.key,{value});

  }

  delete():void{
    this.items.remove(this.key);
  }

  deleteall():void{
    this.items.remove();
  }
}
