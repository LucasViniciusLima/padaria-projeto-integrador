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
  selector: 'chart-quantidade',
  templateUrl: './chart-quantidade.component.html',
  styleUrls: ['./chart-quantidade.component.css']
})
export class ChartQuantidadeComponent implements OnInit {
  
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
          data: [this.quantidadeTotal(), this.totalPedidos()]
        }
      ],
      chart: {
        height: 200,
        width: 400,
        type: "bar",
      },
      xaxis: {
        categories: ["Total", "Hoje"]
      }
    }
  }

  quantidadeTotal() {
    return this.pedidos?.length;
  }

  totalPedidos(){
    return this.pedidos.filter(pedido=>pedido.data.getDate() == this.currentDate.getDate()).length;
  }

}
