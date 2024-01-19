import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chid',
  standalone: true,
  imports: [],
  templateUrl: './chid.component.html',
  styleUrl: './chid.component.css'
})
export class ChidComponent {
  @Input() varChild ;


  // Child To Prent
  @Output() eventData= new EventEmitter<string>();

  data:string="Child Data";
  EventEmiiterFunction(){
    this.eventData.emit(this.data);
  }

}
