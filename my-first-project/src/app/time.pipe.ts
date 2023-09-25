import { Time } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

options {
  :number,
  :number,
  :number,
  :number
}

@Pipe({name: 'time'})
export class TimePipe implements PipeTransform {
  transform(value: Date, ...args: unknown[]): string {
    return Intl.DateTimeFormat("ES-es", options).format(value);
  }
}
