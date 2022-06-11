import { Component, OnInit } from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [DatePipe]
})
export class LoginComponent implements OnInit {

  constructor(
    private datePipe: DatePipe,
  ) { }

  ngOnInit(): void {

  }

}
