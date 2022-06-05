import { Component, OnInit } from '@angular/core';
import {IVisitor} from "../../../../shared/interfaces/visitor.interface";
import {visitorsDataMock} from "../../../../../../testing/mocks/visitorsDataMock";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {MatTableDataSource} from "@angular/material/table";
import {DatePipe} from "@angular/common";
import {ITransaction} from "../../../../shared/interfaces/transaction.interface";
import {IUser} from "../../../../shared/interfaces/user.interface";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentDate!: string;
  currentUser: IUser = {} as IUser;

  visitors: IVisitor[] = [];
  currentVisitor: IVisitor | undefined ;

  transactions: ITransaction[] = [];

  array3Strings = [
    "String1",
    "String2",
    "String3"
  ];
  arrayByValue: string[] = [];
  arrayByReference: string[] = [];

  isIncludes: boolean = false;
  isEvery: boolean= false;
  isSome: boolean= false;

  private datePipe: DatePipe;

  constructor(datePipe:DatePipe) {
    this.datePipe = datePipe;
  }

  ngOnInit(): void {
    this.getAllVisitors();
    this.currentVisitor = {...this.visitors[0]};

    this.updateCurrentDate(this.getFormattedDate);
    this.updateUser();

    this.arrayByValue = [...this.array3Strings];
    this.arrayByReference = this.array3Strings;
    this.array3Strings[0] = "changedStringTo";

    this.isIncludes = this.array3Strings.includes("String1");
    this.isSome = this.array3Strings.some(x => x.includes("1"));
    this.isEvery = this.array3Strings.every(x => x.includes("1"));

    this.array3Strings.forEach(x => x = x + "1");
    this.array3Strings = this.array3Strings.map(x => x.replace("To", " ").trim());
  }

  getFormattedDate = (date: Date): void => {
    this.currentDate = `Current date: ${this.datePipe.transform(date, 'MM.dd.yyyy hh:mm a')}`;
  }

  private updateCurrentDate(callback:any):void{
    const date = new Date();
    callback(date);
  }

  private updateUser(date: Date = new Date(), active: boolean = false): void {
    this.currentUser = {
      id: -1,
      name: 'New user',
      updatedAt: date.toISOString(),
      transactions: [...this.transactions],
      active,
    }
  }

  getAllVisitors(id:number = 0, url? : string){
    // TODO: get real endpoint

    this.visitors = [
      ...visitorsDataMock,
      {id: 1,
        fullName: 'Sara',
        email: 'sara@gmail.com',
        counts:99
      }
    ];
  }

}
