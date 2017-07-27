import {Component, OnInit} from '@angular/core';
import { Service, Employee, State } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service]
})
export class AppComponent implements OnInit {
  title = 'app';
  dataSource: Employee[];
  states: State[];

  constructor(private service: Service) {
  }

  ngOnInit() {
    this.dataSource = this.service.getEmployees();
    this.states = this.service.getStates();
  }

}
