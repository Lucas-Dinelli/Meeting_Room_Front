import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private urlRoom: string = 'http://localhost:8080/v1/room/'

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Room[]> {
    return this.httpClient.get<Room[]>(this.urlRoom);
  }

  findById(id: number): Observable<Room> {
    return this.httpClient.get<Room>(this.urlRoom + id);
  }

  create(room: Room): Observable<Room> {
    return this.httpClient.post<Room>(this.urlRoom, room);
  }

  update(id: number, room: Room): Observable<Room> {
    return this.httpClient.put<Room>(this.urlRoom + id, room);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.urlRoom + id);
  }
  
  getErrorMessages(): Map<string, string> {
    let errorMessages = new Map<string, string>();
    errorMessages.set("fieldValidation", "Error in field validation");
    errorMessages.set("startHourNoLessThanEndHour", "The start hour must be less than end hour");
    return errorMessages;
  }

}
