import { Component, OnInit } from '@angular/core';
import { ListareasService } from 'src/app/sevices/listareas.service';

@Component({
  selector: 'app-list-taks',
  templateUrl: './list-taks.component.html',
  styleUrls: ['./list-taks.component.css']
})
export class ListTaksComponent implements OnInit {

  tareas: any[] = [];
  nuevaTarea = {
    id: '',
    descripcion: '',
    estado: ''
  }

  constructor(private listareasService: ListareasService) { }

  ngOnInit(): void {
    this.load();
  }

  // ver(){
  //   this.listareasService.getAll()
  //   .subscribe(data => {
  //     this.tareas = data
  //   })
  // }

  load(){
    this.listareasService.create(this.nuevaTarea)
    .subscribe((data: any) => this.nuevaTarea = data)
  }

  crear() {
    this.listareasService.create(this.nuevaTarea)
    .subscribe(() => {
      this.load();
      this.nuevaTarea = {
        id: '',
        descripcion: '',
        estado: ''
      }
    })
  }

  edit(tareas: any){
    this.tareas = tareas
  }

  delete(data: any){
    this.listareasService.delete(data)
    .subscribe(() => {
      this.listareasService.getAll();
    })
  }

}
