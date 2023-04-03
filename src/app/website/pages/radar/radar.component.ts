import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RadarService } from '../../../services/radar.service';
import { ToastrService } from 'ngx-toastr';
import { Radar } from 'src/shared/models/radar';
@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})
export class RadarComponent {

  formCreateRadar !: FormGroup;

  radarList !: Radar[];

  constructor(
    private toast: ToastrService,
    private _formBuilder: FormBuilder,
    private route: Router,
    private radarService: RadarService) {
      this.initForm();
      this.radarService.listRadars().subscribe(response => {

        this.radarList = response;
        console.log('RADAR LIST :>> ', this.radarList);

      });
     }

     initForm(): void {
      this.formCreateRadar = this._formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(4)]],
      })
    }


    get nameNoValido() {
      return this.formCreateRadar.get('name')?.invalid && this.formCreateRadar.get('name')?.touched
    }


    onSubmitformCreateRadar(){
      console.log("Entramos");

      if (this.formCreateRadar.invalid) {

        this.toast.error('Intenta de nuevo', 'Error en los datos!');
        return Object.values(this.formCreateRadar.controls).forEach(control => {
          control.markAllAsTouched();
        })
      }

      const createRadar: any = {
        name: this.formCreateRadar.value.name
      }

      console.log('CREATE ', createRadar);

      this.radarService.saveRadar(createRadar).subscribe({
        next: (response) => {
          console.log('response :>> ', response);
        },
        error: (error) => {
          console.log('error :>> ', error);
          return this.toast.error('Error inesperado', 'Vuelve a intentarlo, por favor.');

        },
        complete: () => {
          this.toast.success('Guardando...', 'Registro exitoso!');
          setTimeout(() => {
            window.location.reload();
           }, 1500);

        }
      });

    }

// radarList: any[] = [
//   {name:'radar1'},
//   {name: 'radar2'},
//   {name: 'radar3'},
//   {name: 'radar4'},
//   {name: 'radar5'},
//   {name: 'radar6'}];

}
