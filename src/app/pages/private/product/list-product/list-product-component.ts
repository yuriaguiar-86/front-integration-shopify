import { Component } from '@angular/core';
import { Product } from '../../../../core/interface/product';
import { ShopifyService } from '../../../../shared/services/shopify/shopify-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-product-component',
  standalone: false,
  templateUrl: './list-product-component.html',
  styleUrl: './list-product-component.css',
})
export class ListProductComponent {
  whiteProducts: Product[] = [];
  blackProducts: Product[] = [];

  constructor(
    private shopifyService: ShopifyService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['white_domain'] && params['white_access']) {
        this.loadProducts(
          'white',
          params['white_domain'],
          params['white_access']
        );
      }

      if (params['black_domain'] && params['black_access']) {
        this.loadProducts(
          'black',
          params['black_domain'],
          params['black_access']
        );
      }
    });
  }

  loadProducts(type: 'white' | 'black', domain: string, access: string) {
    this.shopifyService.getAllProducts(domain, access)
      .subscribe({
        next: (products) => {
          type === 'white'
            ? this.whiteProducts = products
            : this.blackProducts = products;

            // console.log(products);

        },
        error: (error) => {
          console.error(`Erro ao buscar produtos ${type}`, error);
        }
      });
  }
}
