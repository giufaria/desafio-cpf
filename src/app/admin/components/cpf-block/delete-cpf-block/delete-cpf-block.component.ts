// src/app/components/delete-cpf-block/delete-cpf-block.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CpfBlock } from 'src/app/models/cpf-block';
import { CpfBlockService } from 'src/app/services/cpf-block.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-delete-cpf-block',
  templateUrl: './delete-cpf-block.component.html',
  styleUrls: ['./delete-cpf-block.component.css']
})
export class DeleteCpfBlockComponent implements OnInit {

  cpfBlock$!: Observable<CpfBlock | undefined>;
  cpfId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cpfBlockService: CpfBlockService
  ) { }

  ngOnInit(): void {
    this.cpfId = this.route.snapshot.paramMap.get('id');
    if (this.cpfId) {
      this.cpfBlock$ = this.cpfBlockService.getCpfBlockById(this.cpfId);
    }
  }

  confirmDelete(): void {
    if (this.cpfId) {
      this.cpfBlockService.deleteCpfBlock(this.cpfId)
        .then(() => {
          alert('CPF Block excluído com sucesso!');
          this.router.navigate(['/']);
        })
        .catch(err => {
          console.error(err);
          alert('Ocorreu um erro ao excluir.');
        });
    }
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}