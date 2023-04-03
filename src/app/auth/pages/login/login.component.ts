import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthfireService } from 'src/app/services/authfire.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  emailpass = new FormControl('');


  constructor(private auth: AuthfireService,
    private router: Router,
    private toast: ToastrService,
    private userService:UserService){

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  async login(){

    const email = this.form.value.email;
    const password = this.form.value.password;
    console.log(this.form.value, 'formulario');

    this.auth.login(this.form.value)
    .then(res => {
      console.log(email,'email');
      
      this.userService.getRoleUser(email).subscribe((rol) => {
        console.log(rol, 'el rol');
        
        localStorage.setItem('role', rol)
        this.toast.success('Logeado correctamente...', 'Redireccionando.')
      setTimeout(()=> {
        this.router.navigate(['/website']);
      },1000); 
      
      })
      
      
    })
    .catch(err =>{ 
      this.toast.error('Rectifique los datos...', 'Contraseña o correo incorrecto.')
      console.log(err)
    })

  }


  async onReset(){
    try{
    const email = this.emailpass.value;
    
   await this.auth.resetPassword(email!);
   this.toast.success('Correo enviado...', 'Revise porfavor su bandeja de entrada')

    }catch(err){console.log(err);
      this.toast.error("Correo incorrecto.","Rectifique los datos")
    }

  }
}
