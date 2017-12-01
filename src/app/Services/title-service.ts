import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { StudentComponent} from '../student/student.component';

@Injectable()
// injecting the Title service
export class TitleService {
  // declaring the title array
  TitleList: string[]= [];
  // initializing the title array through constructor
  constructor() {
    this.TitleList.unshift('Mr.');
    this.TitleList.unshift('Mrs.');
  }
  // getTitle() method to return the title
  getTitle(): string[] {
    return this.TitleList;
  }
}
