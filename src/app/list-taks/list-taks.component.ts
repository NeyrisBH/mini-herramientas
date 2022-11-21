import { Component, OnInit } from '@angular/core';
import { ListTaksService } from './list-taks.service'

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

  constructor(
    private listtaksService: ListTaksService
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.listtaksService.create(this.nuevaTarea)
    .subscribe((data: any) => this.nuevaTarea = data)
  }

  crear() {
    this.listtaksService.create(this.nuevaTarea)
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
    this.listtaksService.delete(data)
    .subscribe(() => {
      this.listtaksService.getAll();
    })
  }

}
