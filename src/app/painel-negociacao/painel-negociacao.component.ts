import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel-negociacao',
  templateUrl: './painel-negociacao.component.html',
  styleUrls: ['./painel-negociacao.component.css']
})
export class PainelNegociacaoComponent implements OnInit {

  oportunidades = [
    {descricao: 'Projeto de desenvolvimento', nomeProspecto: 'Anderson', valor: 55000},
    {descricao: 'Projeto de Suporte', nomeProspecto: 'Pedro', valor: 35000},
    {descricao: 'Projeto de Vendas', nomeProspecto: 'Jeane', valor: 4560000},
    {descricao: 'Projeto de DEVOPS', nomeProspecto: 'Elaine', valor: 255},
    {descricao: 'Projeto de Implantação', nomeProspecto: 'Anderson', valor: 67500},
    {descricao: 'Projeto de Testes', nomeProspecto: 'Maria da Silva', valor: 200}  
];

  constructor() { }

  ngOnInit() {
  }

}
