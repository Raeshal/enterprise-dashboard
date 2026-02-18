import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { debounceTime, map, Subject, switchMap } from 'rxjs';
import { DataService } from './data-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private searchSubject = new Subject<string>();
  result: any;
  value:any

  constructor(private service: DataService) {}

  ngOnInit() {
    this.searchSubject.pipe(
      debounceTime(400),
      switchMap((value) => this.service.search(value))
    ).subscribe((res) => {
      this.result = res;
      console.log(res);
    });
  }

  searchWithInput(value: string) {

    this.searchSubject.next(value);
  }
}
