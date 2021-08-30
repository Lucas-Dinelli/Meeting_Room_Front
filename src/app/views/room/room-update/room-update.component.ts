import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-update',
  templateUrl: './room-update.component.html',
  styleUrls: ['./room-update.component.scss']
})
export class RoomUpdateComponent implements OnInit {

  room: Room = {
    id: 0,
    name: '',
    date: '', 
    startHour: '',
    endHour: ''
  }

  isToShowAlert: boolean = false;

  alertDetails: string[] = [];

  isItFound: boolean = true;

  messageError = "Room not Found!";
  supportMessage: string = "Check the connection or the value informed.";

  constructor(private roomService: RoomService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.room.id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.findRoom(this.room.id);
  }

  update(): void {
    this.roomService.update(this.room.id!, this.room).subscribe((response) => {
      this.showAlert("Updated!", "success");
    }, errorResponse => {
      this.showAlert(this.getErrorMessage(errorResponse), "danger");
    }
    )
    this.setIsToShowAlert(false);
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

  setIsToShowAlert(isToShow: boolean): void {
    this.isToShowAlert = isToShow;
  }

  showAlert(message: string, type: string) {
    this.setIsToShowAlert(true);
    this.alertDetails[0] = message;
    this.alertDetails[1] = type.toLowerCase();
  }

  getErrorMessage(errorResponse: any): any {
    let errorMessage = errorResponse.error.message;
    if(errorMessage === this.roomService.getErrorMessages().get("fieldValidation")) {
      return errorResponse.error.fieldValidationList[0].message;
    }
    else if(errorMessage === this.roomService.getErrorMessages().get("startHourNoLessThanEndHour")) {
      return errorMessage;
    }
  }

  back() {
    if(this.alertDetails[1] === "success") {
      this.router.navigate(['']);
    }
  }

}
