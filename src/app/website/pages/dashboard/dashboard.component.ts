import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  userRole:any = localStorage.getItem('role');

  ngOnInit(): void {
    
  }

  get isAdmin(){
    if(this.userRole == 'ROLE_ADMIN'){
    return true;
  }
  return false;
}

}
