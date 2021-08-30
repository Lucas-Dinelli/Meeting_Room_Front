import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-connection',
  templateUrl: './no-connection.component.html',
  styleUrls: ['./no-connection.component.scss']
})
export class NoConnectionComponent implements OnInit {

  @Input()
  mainMessage: string = "No connection!";

  @Input()
  supportMessage: string = "Please, try again later.";

  constructor() { }

  ngOnInit(): void {

  }

}
