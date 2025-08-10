import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CpfBlockService } from 'src/app/services/cpf-block.service';

@Component({
  selector: 'app-create-cpf-block',
  templateUrl: './create-cpf-block.component.html',
  styleUrls: ['./create-cpf-block.component.css']
})
export class CreateCpfBlockComponent implements OnInit {

  // Declara a propriedade que vai guardar o formulário
  cpfForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cpfBlockService: CpfBlockService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Quando o componente inicia, cria o formulário
    this.cpfForm = this.fb.group({
      cpf: ['', [
        Validators.required,
        Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)
      ]],
      description: ['', Validators.required]
    });
  }

  // Função que será chamada quando o formulário for enviado
  onSubmit(): void {
    if (this.cpfForm.invalid) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }

    this.cpfBlockService.createCpfBlock(this.cpfForm.value)
      .then(() => {
        alert('CPF Block criado com sucesso!');
        this.router.navigate(['/']);
      })
      .catch(err => {
        console.error(err);
        alert('Ocorreu um erro ao criar o registro.');
      });
  }
}