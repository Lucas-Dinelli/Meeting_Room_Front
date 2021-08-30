import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {
  
  rooms: Room[] = []

  isConnected: boolean = true;
  
  messageError = "No connection to list!";

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void { 
    this.roomService.findAll().subscribe({
      next: room => {
          this.rooms = room;
      },
      error: errorResponse => {
        this.isConnected = false;
      }
    }
    )
  }
  
}