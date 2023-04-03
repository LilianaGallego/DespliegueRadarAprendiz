import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userRole:any = localStorage.getItem('role');

  constructor(private router: Router, private toast: ToastrService) { }
  ngOnInit(): void {

  }

  get isAdmin(){
    if(this.userRole == 'ROLE_ADMIN'){
    return true;
  }
  return false;
}

  logout() {
    localStorage.clear();

    this.toast.success('Sesión cerrada.', 'Redireccionado al login...')
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }
}
