import { Component } from "@angular/core";

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: [ 'chat.component.scss' ]
})
export class ChatComponent {

	contact = {
		name: 'Anya Taylor-Joy',
		photo: 'https://www.famousbirthdays.com/headshots/anya-taylor-joy-1.jpg',
		status: 'Online'
	}

	constructor() { }
}