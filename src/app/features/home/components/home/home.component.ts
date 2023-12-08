import { Component } from '@angular/core';
import { MessageService } from 'src/app/core/services/message-service/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private messageService: MessageService) {

  }

  success() {
    this.messageService.success("123456")
  }

  error() {
    this.messageService.error("123456")
  }

  warning() {
    this.messageService.warning("123456")
  }

}
