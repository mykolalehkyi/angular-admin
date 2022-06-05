import {IVisitor} from "../../src/app/shared/interfaces/visitor.interface";

export const visitorsDataMock: IVisitor[] = [
  {
    id: 0,
    fullName: 'Josef',
    email: 'josef@gmail.com',
    counts:10
  },
  {
    id: 1,
    fullName: 'Sara',
    email: 'sara@gmail.com',
    counts:99
  },
  {
    id: 2,
    fullName: 'George',
    email: 'george@gmail.com',
    counts:43
  },
];

export const ng2ChartTableDataMock: number[] = [ 65, 59, 80, 81, 56, 55, 40, 39, 99, 32, 43, 89 ];
