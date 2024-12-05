import { Component } from '@angular/core';
import { CrudComponent } from "../crud/crud.component";
import { EmojiService } from '../services/emoji-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CrudComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(){}
}
