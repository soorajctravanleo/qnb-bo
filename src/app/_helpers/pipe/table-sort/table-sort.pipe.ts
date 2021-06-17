import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'tableSort',
  pure: false,
})
export class TableSortPipe implements PipeTransform {
  transform(value: Array<any>, filterObj, ...args: unknown[]): Array<any> {
    if (typeof value === 'undefined' || !value) {
      return [];
    }
    if (
      typeof filterObj === 'undefined' ||
      !filterObj ||
      Object.keys(filterObj).length === 0
    ) {
      return value;
    }

    if (value.length > 0) {
      if (typeof filterObj.type !== 'undefined') {
        const _direction = filterObj.filter === 'asc' ? -1 : 1;
        switch (filterObj.type) {
          case 'string':
            value.sort((first, second) => {
              return first[filterObj.key] > second[filterObj.key]
                ? -1 * _direction
                : 1 * _direction;
            });
            break;
          case 'number':
            value.sort((first, second) => {
              return first[filterObj.key] - second[filterObj.key] > 0
                ? -1 * _direction
                : 1 * _direction;
            });
            break;
          case 'date':
            value.sort((first, second) => {
              first = moment(first[filterObj.key], 'DD/MM/YYYY')
                .toDate()
                .getTime();
              second = moment(second[filterObj.key], 'DD/MM/YYYY')
                .toDate()
                .getTime();
              return first - second > 0 ? -1 * _direction : 1 * _direction;
            });
            break;
            case 'dateTime':
              value.sort((first, second) => {
                first = moment(first[filterObj.key])
                  .toDate()
                  .getTime();
                second = moment(second[filterObj.key])
                  .toDate()
                  .getTime();
                return first - second > 0 ? -1 * _direction : 1 * _direction;
              });
              break
        }
      } else {
        const _direction = filterObj.filter === 'asc' ? -1 : 1,
          _isArray = Array.isArray(value),
          _type = typeof value[0],
          _flagObject =
            _isArray && _type === 'object'
              ? true
              : _isArray && _type !== 'object'
              ? false
              : true;

        value.sort((first, second) => {
          first = _flagObject ? first[filterObj.key] : first;
          second = _flagObject ? second[filterObj.key] : second;
          if (typeof first === 'string') {
            return first > second ? -1 * _direction : 1 * _direction;
          } else if (typeof first === 'number') {
            return first - second > 0 ? -1 * _direction : 1 * _direction;
          }
        });
      }
    }
    return value;
  }
}
