import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionCut'
})
export class DescriptionCutPipe implements PipeTransform {

  transform(value: string, limit:number) {
    if (value.length > limit) {
      return value.substr(0, limit) + "..."
    }
    return value
  }

}
