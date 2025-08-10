import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CpfBlock } from 'src/app/models/cpf-block';
import { CpfBlockService } from 'src/app/services/cpf-block.service';

@Component({
  selector: 'app-list-cpf-block',
  templateUrl: './list-cpf-block.component.html',
  styleUrls: ['./list-cpf-block.component.css']
})
export class ListCpfBlockComponent implements OnInit {

  // A variável que o HTML precisa
  cpfBlocks$!: Observable<CpfBlock[]>;

  constructor(private cpfBlockService: CpfBlockService) { }

  ngOnInit(): void {
    // A lógica para buscar os dados
    this.cpfBlocks$ = this.cpfBlockService.getCpfBlocks();
  }

  // A função que o HTML precisa
  deleteCpf(id: string | undefined): void {
    if (!id) {
      return;
    }
    const confirmDelete = confirm('Tem certeza que deseja excluir este CPF Block?');
    if (confirmDelete) {
      this.cpfBlockService.deleteCpfBlock(id)
        .then(() => {
          alert('CPF Block excluído com sucesso.');
        })
        .catch(err => {
          console.error('Erro ao excluir:', err);
          alert('Ocorreu um erro ao excluir.');
        });
    }
  }
}