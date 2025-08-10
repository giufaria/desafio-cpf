import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CpfBlock } from '../models/cpf-block';

@Injectable({
  providedIn: 'root'
})
export class CpfBlockService {

  // Referência para a coleção 'cpfBlocks' no Firestore
  private cpfBlocksCollection: AngularFirestoreCollection<CpfBlock>;

  constructor(private readonly db: AngularFirestore) {
    // Apontamos para a coleção que queremos usar no banco de dados
    this.cpfBlocksCollection = db.collection<CpfBlock>('cpfBlocks');
  }

  // READ (Todos): Retorna todos os CPF Blocks da coleção
  getCpfBlocks(): Observable<CpfBlock[]> {
    // Usamos snapshotChanges para pegar os dados e também o ID de cada documento
    return this.cpfBlocksCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as CpfBlock;
        const id = a.payload.doc.id;
        return { id, ...data }; // Retorna o objeto com os dados e o id
      }))
    );
  }

  // READ (Apenas um): Retorna um CPF Block específico pelo seu ID
  getCpfBlockById(id: string): Observable<CpfBlock | undefined> {
    return this.cpfBlocksCollection.doc<CpfBlock>(id).valueChanges();
  }

  // CREATE: Adiciona um novo CPF Block na coleção
  createCpfBlock(cpfBlock: CpfBlock) {
    return this.cpfBlocksCollection.add(cpfBlock);
  }

  // UPDATE: Atualiza um CPF Block existente
  updateCpfBlock(id: string, data: Partial<CpfBlock>) {
    return this.cpfBlocksCollection.doc<CpfBlock>(id).update(data);
  }

  // Checa se um CPF já existe no banco de dados
  async checkCpfExists(cpf: string): Promise<boolean> {
    // Cria uma referência para a coleção com uma consulta (query)
    const collectionRef = this.db.collection<CpfBlock>('cpfBlocks', ref => ref.where('cpf', '==', cpf));
    
    // Executa a consulta uma única vez
    const snapshot = await collectionRef.get().toPromise();
    
    // Se a snapshot não estiver vazia (size > 0), significa que encontrou um documento.
    return !snapshot.empty;
  }

  // DELETE: Exclui um CPF Block pelo seu ID
  deleteCpfBlock(id: string) {
    return this.cpfBlocksCollection.doc<CpfBlock>(id).delete();
  }
}