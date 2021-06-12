import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "tableSort",
  pure: false,
})
export class TableSortPipe implements PipeTransform {
  transform(value: Array<any>, key, order, ...args: unknown[]): Array<any> {
    if (typeof value === "undefined" || !value) {
      return [];
    }
    if (typeof key === "undefined" || !key) {
      return value;
    }
    if (typeof order === "undefined" || !order) {
      return value;
    }

    if (value.length > 0) {
      const _direction = order === "asc" ? -1 : 1,
        _isArray = Array.isArray(value),
        _type = typeof value[0],
        _flagObject =
          _isArray && _type === "object"
            ? true
            : _isArray && _type !== "object"
            ? false
            : true;
      value.sort((first, second) => {
        first = _flagObject ? first[key] : first;
        second = _flagObject ? second[key] : second;
        if (typeof first === "string") {
          return first > second ? -1 * _direction : 1 * _direction;
        } else if (typeof first === "number") {
          return first - second > 0 ? -1 * _direction : 1 * _direction;
        }
      });
    }
    return value;
  }
}
