import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-delete',
  templateUrl: './room-delete.component.html',
  styleUrls: ['./room-delete.component.scss']
})
export class RoomDeleteComponent implements OnInit {

  room: Room = {
    id: 0,
    name: '',
    date: '', 
    startHour: '',
    endHour: ''
  }

  isItFound: boolean = true;

  messageError: string = "Room not found!";
  supportMessage: string = "Check the connection or the value informed.";

  constructor(private roomService: RoomService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.room.id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.findRoom(this.room.id);
  }

  delete(): void {
    this.roomService.delete(this.room.id!).subscribe((response) => {
      this.router.navigate(['']);
    })
  }

  findRoom(id: number) {
    this.roomService.findById(this.room.id!).subscribe((response) => {
      this.room.name = response.name;
      this.room.date = response.date;
      this.room.startHour = response.startHour;
      this.room.endHour = response.endHour;
    }, errorResponse => {
      this.isItFound = false;
    })
  }

}
