import { Component, OnInit } from '@angular/core';
import { DevsService } from '../devs.service';
import { NamesService } from '../names.service';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // 1
  // devs: string[] = ['Bia', 'Lays', 'Le']

  // 2
  // devs: any;
  // names: any;

  // 3
  users: any;


  constructor(
    // 2
    // private devsService: DevsService,
    private usersService: UsersService,

    private namesService: NamesService
  ) { }

  ngOnInit(): void {
    // 2
    // this.devs = this.devsService.getDevs()
    // this.names = this.namesService.getNames()
    // console.log(this.names);

    // 3
    this.users = this.usersService.getUser().subscribe((users) => {
      this.users = users;
    });


  }
}
