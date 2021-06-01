import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";
import { StoreService } from 'src/app/store.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'chart-status-pedindg',
  templateUrl: './chart-status-pedindg.component.html',
  styleUrls: ['./chart-status-pedindg.component.css']
})
export class ChartStatusPedindgComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<any>;
  
  pedidos: Array<any> = new Array<any>();
  currentDate: Date = new Date();

  constructor(private store: StoreService) { 
    this.store.getItems().subscribe(items => {
      this.pedidos = items;
      this.preencherDadosGrafico();      
    });
  }

  ngOnInit(): void {
    this.chartOptions = {};
  }

  preencherDadosGrafico(){
    this.chartOptions = {
      series: [
        {
          name: "Pedidos",
          data: [this.pendentesHoje(), this.concluidosHoje()]
        }
      ],
      chart: {
        height: 200,        
        width: 400,
        type: "bar",
      },
      xaxis: {
        categories: ["Pendentes", "Concluidos"]
      }
    }
  }

  quantidadeTotal(){
    return this.pedidos?.length;
  }

  totalPedidos(){
    return this.pedidos.filter(pedido=>pedido.data.getDate() == this.currentDate.getDate()).length;
  }

  pendentesHoje(){
    return this.pedidos.filter(pedido=>!pedido.finalizado).length;
  }

  concluidosHoje(){
    return this.pedidos.filter(pedido=>pedido.finalizado).length;
  }



}
