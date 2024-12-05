import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RoomList } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from "./rooms-list/rooms-list.component";
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, RoomsListComponent, HttpClientModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
  providers: [HttpClient],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsComponent implements OnInit, OnChanges {
  roomList: RoomList[] = [
    {
      roomNumber: '100',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.5,
    },
    {
      roomNumber: '200',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 3.45654,
    },
    {
      roomNumber: '300',
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 15000,
      photos:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 2.6,
    },
  ]
  ngOnInit(): void {
    console.log('ngoninit just executed')
    console.log(this.fetchData())
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ng on changes just executed with changes', changes)
  }
  selectedRoom(room: RoomList) {
    console.log(room)
    console.log(this.roomList)
  }
  constructor(private http: HttpClient) {
    console.log('constructor just executed')

  }
  data: any;
  fetchData(): void {
    this.http.get('', {
      headers: {
        ["Access-Control-Allow-Headers"]: "Content-Type",
        ["Access-Control-Allow-Methods"]: "GET, POST, OPTIONS",
        ["Access-Control-Allow-Origin"]: "*.google.com",

      }
    }) // Replace with your API endpoint
      .subscribe(response => {
        this.data = response;
        console.log(this.data);
      }, error => {
        console.error('Error fetching data:', error);
      });
  }



}
