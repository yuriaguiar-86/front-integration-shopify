import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Operation } from '../../../../core/interface/operation';
import { OperationService } from '../../../../shared/services/operation/operation-service';
import { ShopifyService } from '../../../../shared/services/shopify/shopify-service';

@Component({
  selector: 'app-form-operation-component',
  standalone: false,
  templateUrl: './form-operation-component.html',
  styleUrl: './form-operation-component.css',
})
export class FormOperationComponent {
  operation: Operation | null = null;
  operationForm! : FormGroup;
  isEdit: boolean = false;
  editingOperationId: any | null = null;

  constructor(
    private operationService: OperationService,
    private shopifyService: ShopifyService,
    private route : ActivatedRoute,
    private formBuilder: FormBuilder,
    private router : Router
  ) {
      this.operationForm = this.formBuilder.group({
      name: '',
      white_store: '',
      white_client: '',
      white_secret: '',

      black_store: '',
      black_client: '',
      black_secret: '',
    });

    const id = this.route.snapshot.params["id"];

    if (id) {
      this.isEdit = true;
      this.loadOperation(id);
    }
  }

  loadOperation(id: any): void {
    this.editingOperationId = id;

    this.operationService.getOperationById(id).subscribe({
      next: (operationData) => {
        this.operationForm.patchValue({
          name: operationData.name,

          white_store: operationData.white_store,
          white_client: operationData.white_client,
          white_secret: operationData.white_secret,

          black_store: operationData.black_store,
          black_client: operationData.black_client,
          black_secret: operationData.black_secret,
        })
      },
      error: (error) => {
        console.log("Erro editar a operação: ", error)
      }
    });
  }

  onSubmit(): void {
    const formValue = this.operationForm.value;

    if (this.isEdit && this.editingOperationId) {
      this.updateOperation(this.editingOperationId, formValue);

    } else {
      this.createOperation(formValue)
    }
  }

  updateOperation(id: any, post: Operation) {
    this.operationService.updateOperation(id, post).subscribe({
      next: () => {
        this.router.navigate(['/produtos'], {
          queryParams: {
            white_domain: localStorage.getItem('white_domain'),
            white_access: localStorage.getItem('white_access'),
            black_domain: localStorage.getItem('black_domain'),
            black_access: localStorage.getItem('black_access')
          }
        });
      },
      error: (error) => {
        console.log("Erro editar a operação: ", error);
      }
    });
  }

  createOperation(operation: Operation) {
    this.operationService.createOperation(operation).subscribe({
      next: () => {
        this.router.navigate(['/produtos'], {
          queryParams: {
            white_domain: localStorage.getItem('white_domain'),
            white_access: localStorage.getItem('white_access'),
            black_domain: localStorage.getItem('black_domain'),
            black_access: localStorage.getItem('black_access')
          }
        });
      },
      error: (error) => {
        console.log("Error Logged", error);
      }
    });
  }

  connectStore(type: 'white' | 'black') {
    const store = this.operationForm.get(`${type}_store`)?.value;
    const client = this.operationForm.get(`${type}_client`)?.value;
    const secret = this.operationForm.get(`${type}_secret`)?.value;

    if (!store || !client || !secret) {
      alert(`Preencha todos os dados da loja ${type.toUpperCase()}`);
      return;
    }

    this.shopifyService.getAccessToken(store, client, secret).subscribe({
      next: (shopify) => {
        localStorage.setItem(`${type}_domain`, store);
        localStorage.setItem(`${type}_access`, shopify.access_token);
      },
      error: (error) => {
        console.log("Error shop", error);
      }
    });
  }
}
