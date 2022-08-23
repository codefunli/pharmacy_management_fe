import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  remeberMe: string = '';
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }

  logOut() {
    console.log(localStorage.getItem('rememberMe'));
    if (this.remeberMe === 'false') {
      localStorage.removeItem('userName');
      localStorage.removeItem('code');
    }

    this.router.navigateByUrl('/login');
  }
}
