import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";
import { CrudComponent } from './crud/crud.component';
import { HomeComponent } from "./home/home.component";
import { EmojiService } from './services/emoji-service';
import { ParentComponent } from "./parent/parent.component";

@Component({
  selector: 'app-root',
  standalone: true,
  viewProviders: [EmojiService],
  imports: [RouterOutlet, CrudComponent, HomeComponent, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(public emoji: EmojiService){}
  title = 'app component'
}