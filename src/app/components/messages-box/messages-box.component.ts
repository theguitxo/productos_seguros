import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-messages-box',
  templateUrl: './messages-box.component.html',
  styleUrls: ['./messages-box.component.scss']
})
export class MessagesBoxComponent {

  @Input('message') message: string; // the message that shows in the box
  @Input('type') type: string; // the type of message, can be of info or error

  constructor() { }

}
