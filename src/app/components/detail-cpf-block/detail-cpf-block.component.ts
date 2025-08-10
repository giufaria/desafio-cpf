import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CpfBlock } from 'src/app/models/cpf-block';
import { CpfBlockService } from 'src/app/services/cpf-block.service';

@Component({
  selector: 'app-detail-cpf-block',
  templateUrl: './detail-cpf-block.component.html',
  styleUrls: ['./detail-cpf-block.component.css']
})
export class DetailCpfBlockComponent implements OnInit {

  cpfBlock$!: Observable<CpfBlock | undefined>;

  constructor(
    private route: ActivatedRoute,
    private cpfBlockService: CpfBlockService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cpfBlock$ = this.cpfBlockService.getCpfBlockById(id);
    }
  }
}