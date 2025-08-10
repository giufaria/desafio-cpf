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

  cpfForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cpfBlockService: CpfBlockService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cpfForm = this.fb.group({
      cpf: ['', [
        Validators.required,
        Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)
      ]],
      description: ['', Validators.required]
    });
  }

  async onSubmit(): Promise<void> {
    if (this.cpfForm.invalid) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }

    try {
      const cpf = this.cpfForm.value.cpf;
      const CpfJaExiste = await this.cpfBlockService.checkCpfExists(cpf);

      if (CpfJaExiste) {
        alert('Este CPF já está cadastrado!');
        return;
      }

      await this.cpfBlockService.createCpfBlock(this.cpfForm.value);
      alert('CPF Block criado com sucesso!');
      this.router.navigate(['/']);

    } catch (err) {
      console.error(err);
      alert('Ocorreu um erro ao verificar ou criar o registro.');
    }
  }
}