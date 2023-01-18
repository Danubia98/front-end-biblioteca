import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario-livro',
  templateUrl: './formulario-livro.component.html',
  styleUrls: ['./formulario-livro.component.css']
})
export class FormularioLivroComponent implements OnInit {

 id: number | null;
 livroFormGroup: FormGroup

  constructor(
    private activatedRoute: ActivatedRoute, 
    private formBuilder: FormBuilder
    ){
    this.id=this.activatedRoute.snapshot.paramMap.get('id') as number | null;
    
    this.livroFormGroup= this.formBuilder.group({
     titulo: ['', Validators.required],
     anoLancamento: ['', Validators.required],
     autoresIds: ['', Validators.required]
   })
   }

  ngOnInit(): void {
  }

}
