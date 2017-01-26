import { Component, OnInit } from '@angular/core';

import { TaskModel } from '../models/task.model';

@Component({
  selector: 'my-app',
  templateUrl: 'app/views/shared/layout.html'
})

export class LayoutComponent implements OnInit{

    tasks: Array<TaskModel> = [
      {"title": "Tare 1", "description": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.", "isDone": true},
      {"title": "Tare 2", "description": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.", "isDone": false},
      {"title": "Tare 3", "description": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.", "isDone": false}            
    ]
    
    ngOnInit() {
        console.log(this.tasks);
    }

    clickEnAlgo(e:any){
      console.log(e);
      //alert("Click en algo");
      return false;
    }

}