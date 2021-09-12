import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
	host: {
		'[style.alignSelf]': 'sent ? "flex-end" : "flex-start"'
	}
})
export class MessageComponent {

	@Input() message = '';
	@Input() sent = true;

  constructor() { }

}
