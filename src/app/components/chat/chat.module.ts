import { NgModule } from "@angular/core";
import { ChatComponent } from "./chat.component";
import { MessageComponent } from './message/message.component';

@NgModule({
	declarations: [
		ChatComponent,
  MessageComponent,
	],
	exports: [
		ChatComponent
	]
})
export class ChatModule {}