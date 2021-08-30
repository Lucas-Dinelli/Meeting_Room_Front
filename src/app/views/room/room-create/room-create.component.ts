import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.scss']
})
export class RoomCreateComponent implements OnInit {

  room: Room = {
    name: '',
    date: '', 
    startHour: '',
    endHour: ''
  }

  isToShowAlert: boolean = false;

  alertDetails: string[] = [];
  
  constructor(private roomService: RoomService, private router: Router) { }

  ngOnInit(): void {

  }

  create(): void {
    this.roomService.create(this.room).subscribe((response) => {
      this.showAlert("Created!", "success");
      this.clear();
    }, errorResponse => {
      this.showAlert(this.getErrorMessage(errorResponse), "danger");
    }
    )
    this.setIsToShowAlert(false);
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
    else if(errorResponse.status === 0) {
      return "No connection!";
    }
  }

  clear(): void {
    this.room.name = '';
    this.room.date = '';
    this.room.endHour = '';
    this.room.startHour = '';
  }

}
