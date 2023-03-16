import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students = [
    {id: 1, fname: "John Wick", age: 34, department: "Computer Science"},
    {id: 2, fname: "Jennifer Lopez", age: 44, department: "Maths"},
    {id: 3, fname: "Jimmy Jones", age: 32, department: "Sales"},
  ];

  constructor() { }
}
