import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShopifyAccessToken } from '../../../core/interface/shopify-access-token';
import { Product } from '../../../core/interface/product';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopifyService {
  private apiUrl = '/api/v1/shopify';

  constructor(private http: HttpClient) { }

  getAccessToken(
    domain: string,
    clientId: string,
    clientSecret: string
  ) {
    return this.http.post<ShopifyAccessToken>(this.apiUrl + '/access-token', {
      domain, clientId, clientSecret
    });
  }

  getAllProducts(domain: string, access: string) {
    return this.http.post<{ data: { products: { nodes: Product[] } } }>(
      this.apiUrl + '/products',
      {
        domain,
        accessToken: access,
        query: `
          query GetProducts {
            products(first: 50) {
              nodes {
                id
                title
                handle
              }
            }
          }
        `
      }
    ).pipe(map(response => response.data.products.nodes));
  }
}
