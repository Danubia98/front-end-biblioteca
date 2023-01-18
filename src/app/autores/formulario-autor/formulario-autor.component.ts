import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-autor',
  templateUrl: './formulario-autor.component.html',
  styleUrls: ['./formulario-autor.component.css']
})
export class FormularioAutorComponent implements OnInit {

  id: number | null;


  constructor(private activatedRoute: ActivatedRoute) {
    this.id=this.activatedRoute.snapshot.paramMap.get('id') as number | null;
   }

  ngOnInit(): void {
  }

}
