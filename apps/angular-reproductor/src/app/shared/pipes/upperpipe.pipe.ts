import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperpipe',
  standalone: true,
})
export class UpperpipePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
