import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CpfBlockService } from 'src/app/services/cpf-block.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-update-cpf-block',
  templateUrl: './update-cpf-block.component.html',
  styleUrls: ['./update-cpf-block.component.css']
})
export class UpdateCpfBlockComponent implements OnInit {

  cpfForm!: FormGroup;
  cpfId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private cpfBlockService: CpfBlockService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cpfForm = this.fb.group({
      cpf: ['', [
        Validators.required,
        Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)
      ]],
      description: ['', Validators.required]
    });

    this.cpfId = this.route.snapshot.paramMap.get('id');

    if (this.cpfId) {
      this.cpfBlockService.getCpfBlockById(this.cpfId).pipe(
        take(1)
      ).subscribe(data => {
        if (data) {
          this.cpfForm.patchValue({
            cpf: data.cpf,
            description: data.description
          });
        }
      });
    }
  }

  onSubmit(): void {
    if (this.cpfForm.invalid || !this.cpfId) {
      return;
    }

    this.cpfBlockService.updateCpfBlock(this.cpfId, this.cpfForm.value)
      .then(() => {
        alert('CPF Block atualizado com sucesso!');
        this.router.navigate(['/']);
      })
      .catch(err => {
        console.error(err);
        alert('Ocorreu um erro ao atualizar o registro.');
      });
  }
}