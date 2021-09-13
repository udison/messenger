import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ChatComponent } from "./chat.component";
import { MessageComponent } from './message/message.component';

@NgModule({
	declarations: [
		ChatComponent,
  	MessageComponent,
	],
	imports: [
		FontAwesomeModule
	],
	exports: [
		ChatComponent
	]
})
export class ChatModule {}