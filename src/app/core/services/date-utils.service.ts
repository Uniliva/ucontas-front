import { DatePipe } from "@angular/common";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DateUtilsService {
  constructor(private datePipe: DatePipe) {}

  convertToStringWithDash(data: Date) {
    return this.datePipe.transform(data, 'dd-MM-yyyy').toString();
  }

  convertDateStringWithDashToDate(dataString: string) {
    let data = null;
    if (dataString) {
      let arr: string[] = dataString.split('-');
      data = new Date(parseInt(arr[2]), parseInt(arr[1]) - 1, parseInt(arr[0]));
    }
    return data;
  }
}
