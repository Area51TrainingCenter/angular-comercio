import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName: string;
  private userService: UserService;
  constructor() {
    const injector: any = ReflectiveInjector.resolveAndCreate([UserService])
  }


  signIn(): void {
    this.userService.setUser({
      name: 'Sergio'
    })

    this.userName = this.userService.getUser().name;

    console.log(this.userName)

  }


  ngOnInit() {
  }

}
