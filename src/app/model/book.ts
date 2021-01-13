import { Author } from "./author";

export class Book {
    id: number;
    title: string;
    authorList: Author[];
}

/**
 *  book {
 *   ....
 *   author: [
 *  {}, {}
 * ]
 * }
 * Author {
 *    Book: [
 *  {}, {}
 * ]
 * }
 *  1 -> n
 *  a    b1 -> a
 *       b2 -> a
 * new Book(..., new Author(....))
 * 
 * export class Car {
 *  carStatus: CarStatus;
 * }
 * 
 * export class CarStatus {
 *   name : string;
 * }
 * 
 * --- componente
 *  car: Car;
 * 
 * ....
 *  
 * <select  [(ngModel)]="CarStatus.description"
 *     -> Available 
 *     -> Clean
 * 
 * console.log(car);
 *  this.http.put(id, car)
 * 
 * 
 * 
 * 
 */