import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringSlice'
})
export class StringSlicePipe implements PipeTransform {

  transform(value: any, ...args: number[]): string {
    return value.slice(args[0], args[1]);
  }

}
