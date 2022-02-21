import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { UserJphInterface } from 'src/app/servicios/http/interface/user-jph.interface';
import {UserJphService} from '../../servicios/http/user-jph.service';

@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.scss']
})
export class RutaUsuarioComponent implements OnInit {
  arreglo: UserJphInterface[] = [];
  buscarUsuario="";
  constructor(
    private readonly userJphService: UserJphService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    const parametrosConsulta$ = this.activatedRoute
      .queryParams;

    parametrosConsulta$
      .subscribe(// AQUI EMPIEZA A EJECUTARSE EL OBSERVABLE
        {
          next: (queryParams) => { // TRY
            this.buscarUsuario = queryParams["name"];
            this.buscarUsuarios();
          },
          error: () => { // Catch
          },
          complete: () => { // Finally
          }
        }
      );
  }

  actualizarParametrosDeConsulta() {
    this.router
      .navigate(
        ['/app', 'usuario'], // armamos la URL /app/usuario
        {
          queryParams: {
            name: this.buscarUsuario // ?name=Adrian
          }
        });
  }

  buscarUsuarios(){
    this.userJphService
      .buscarTodos({
        name:this.buscarUsuario
      })
      .subscribe({
        next:( datos ) => {
          this.arreglo = datos;
          this.buscarUsuario = '';
        },
        error:(error) => {
          console.log({error});
        }
      });
  }

  gestionarUsuario(idUsuario: number){
    const ruta = ['/app','usuario',idUsuario];
    this.router.navigate(ruta);
  }
}
