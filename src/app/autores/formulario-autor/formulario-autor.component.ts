import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-autor',
  templateUrl: './formulario-autor.component.html',
  styleUrls: ['./formulario-autor.component.css']
})
export class FormularioAutorComponent implements OnInit {

  id: number | null;
 autorFormGroup: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
   ){
    this.id=this.activatedRoute.snapshot.paramMap.get('id') as number | null;
    
    this.autorFormGroup = this.formBuilder.group({
    nome: ['', Validators.required],
    biografia: ['', Validators.required]
   });
  }

  ngOnInit(): void {
  }

}
