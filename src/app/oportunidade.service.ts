import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OportunidadeService {

  apiURL = 'http://localhost:9999/oportunidades';

  constructor(private HttpClient: HttpClient) { }

  listar(){
    return this.HttpClient.get(this.apiURL);
    
  }

 
}
