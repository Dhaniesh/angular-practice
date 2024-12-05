import { Component } from '@angular/core';
import { DataService } from '../services/data-service';
import { CommonModule } from '@angular/common';
import { EmojiService } from '../services/emoji-service';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule],
  providers: [DataService],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {
  constructor(private data_service: DataService) {
  }
  public user_data_list: Array<object> = [];
  onSubmit(user_data: object) {
    this.data_service.setData(user_data)
  }
  listUser() {
    this.user_data_list = this.data_service.getData()

  }
}
