import { Component } from '@angular/core';
import { Operation } from '../../../../core/interface/operation';
import { OperationService } from '../../../../shared/services/operation/operation-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-operation-component',
  standalone: false,
  templateUrl: './view-operation-component.html',
  styleUrl: './view-operation-component.css',
})
export class ViewOperationComponent {
  operation : Operation|null = null;

  constructor(
    private operationService: OperationService,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.params['id'];
    this.showOperation(id);
  }

  showOperation(id : any) {
    this.operationService.getOperationById(id).subscribe({
      next: (operationData) => {
        this.operation = operationData;
      },
      error: (error) => {
        console.log("Erro em buscar as operação: ", error)
      }
    })
  }
}
