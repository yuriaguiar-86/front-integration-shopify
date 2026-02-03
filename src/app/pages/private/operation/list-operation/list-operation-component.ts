import { Component } from '@angular/core';
import { Operation } from '../../../../core/interface/operation';
import { OperationService } from '../../../../shared/services/operation/operation-service';

@Component({
  selector: 'app-list-operation-component',
  standalone: false,
  templateUrl: './list-operation-component.html',
  styleUrl: './list-operation-component.css',
})
export class ListOperationComponent {
  operations : Operation[] = [];

  constructor(private operationService: OperationService) {
    this.getAllOperations();
  }

  getAllOperations() {
    this.operationService.getAllOperations().subscribe({
      next: (operationsData) => {
        this.operations = operationsData;
      },
      error: (error) => {
        console.log("Erro em buscar as operações: ", error);
      }
    })
  }

  deleteOperation(id: number) {
    if (confirm("Tem certeza que deseja remover a operação?")) {
      this.operationService.deleteOperation(id).subscribe({
        next: () => {
          this.operations = this.operations.filter(operation => operation.id != id);
        },
        error: (error) => {
          console.log("Falha ao remover a operação: ", error);
        }
      })
    }
  }
}
