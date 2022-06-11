import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {
  currentTime = '';

  transform(value: Date, format?: string): string {
    if(!value || !(value instanceof Date)){
      return "";
    }

    let dateString = "";

    switch (format){
      case "min":
        dateString = `${value.getMinutes()}mins`;
        break;
      default:
        dateString = `${value.getMinutes()}mins`;
    }
    return dateString + " ago";
  }

}
