import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public email: string;
  public name: string = "guest";

  constructor() { }

  ngOnInit() {
    if(localStorage.getItem("user")){
      let loggedInUser = JSON.parse(localStorage.getItem("user"));
      this.name = loggedInUser.user[0].firstName;
      this.email = loggedInUser.user[0].username;
    }
  }

}
