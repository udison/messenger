import { Component } from "@angular/core";
import { faChevronLeft, faPhoneAlt, faEllipsisV, faPlus, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: [ 'chat.component.scss' ]
})
export class ChatComponent {
	backIcon = faChevronLeft;
	callIcon = faPhoneAlt;
	optionsIcon = faEllipsisV;
	plusIcon = faPlus;
	sendIcon = faPaperPlane;

	contact = {
		name: 'Anya Taylor-Joy',
		photo: 'https://www.famousbirthdays.com/headshots/anya-taylor-joy-1.jpg',
		status: 'Online'
	}

	constructor() { }
}