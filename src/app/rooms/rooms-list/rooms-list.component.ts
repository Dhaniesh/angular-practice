import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css',
})
export class RoomsListComponent implements OnInit {
  ngOnInit(): void {
  }
  @Input() rooms: RoomList[] = [];
  @Output() selectedRoom = new EventEmitter()
  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room)
  }

  addRoom(){
    const room: RoomList = {
        roomNumber: '400',
        roomType: 'Private Suite',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 15000,
        photos:
          'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 2.6,
    }
    // this.rooms.push(room)
    this.rooms = [...this.rooms, room]
  }
}