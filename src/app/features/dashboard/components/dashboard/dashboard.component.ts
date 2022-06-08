import {Component, OnInit, ViewChild} from '@angular/core';
import {IVisitor} from "../../../../shared/interfaces/visitor.interface";
import {ng2ChartTableDataMock, visitorsDataMock} from "../../../../../../testing/mocks/visitorsDataMock";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {MatTableDataSource} from "@angular/material/table";
import {DatePipe} from "@angular/common";
import {ITransaction} from "../../../../shared/interfaces/transaction.interface";
import {IUser} from "../../../../shared/interfaces/user.interface";
import {ChartConfiguration, ChartEvent, ChartType} from "chart.js";
import {BaseChartDirective} from "ng2-charts";
import {UsersService} from "../../../../shared/services/users.service";

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

  showMessage = false;

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: ng2ChartTableDataMock,
        label: 'Series A',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
    ],
    labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
  }

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0':
        {
          position: 'left',
        },
      'y-axis-1': {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red'
        }
      }
    },

    plugins: {
      legend: { display: true },
    }
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  constructor(
    private datePipe:DatePipe,
    private usersService: UsersService) {
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

    this.usersService.currentUser
      .subscribe((user: IUser) => {
        if (user?.name) {
          this.showMessage = true;
          this.currentUser = user;

          setTimeout(() => {
            this.showMessage = false;
          }, 3000);
        }
      });
  }

  private static generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  public randomize(): void {
    for (let i = 0; i < this.lineChartData.datasets.length; i++) {
      for (let j = 0; j < this.lineChartData.datasets[i].data.length; j++) {
        this.lineChartData.datasets[i].data[j] = DashboardComponent.generateNumber(i);
      }
    }
    this.chart?.update();
  }

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
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
