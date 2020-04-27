import { Component, OnInit } from '@angular/core';
import { BurgersService } from '../rest/api/burgers.service';

@Component({
  selector: 'app-list-burgers',
  templateUrl: './list-burgers.component.html',
  styleUrls: ['./list-burgers.component.css']
})
export class ListBurgersComponent implements OnInit {
  burgers;
  constructor(private burgerService: BurgersService) { }

  ngOnInit(): void {
    this.getBurgers();
  }

  getBurgers() : void {
    this.burgers = this.burgerService.listBurgers()
        .subscribe(burgers => this.burgers = burgers);
  }

}
