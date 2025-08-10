import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCpfBlockComponent } from './components/list-cpf-block/list-cpf-block.component';
import { CreateCpfBlockComponent } from './components/create-cpf-block/create-cpf-block.component';
import { UpdateCpfBlockComponent } from './components/update-cpf-block/update-cpf-block.component';
import { DetailCpfBlockComponent } from './components/detail-cpf-block/detail-cpf-block.component';
import { DeleteCpfBlockComponent } from './components/delete-cpf-block/delete-cpf-block.component';

const routes: Routes = [
  // Rota principal: quando a URL for '.../', carrega a lista.
  { path: '', component: ListCpfBlockComponent },
  
  // Rota para criar um novo item
  { path: 'novo', component: CreateCpfBlockComponent },
  
  // Rota para editar um item existente
  { path: 'editar/:id', component: UpdateCpfBlockComponent },

  { path: 'detalhe/:id', component: DetailCpfBlockComponent },

  { path: 'excluir/:id', component: DeleteCpfBlockComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }