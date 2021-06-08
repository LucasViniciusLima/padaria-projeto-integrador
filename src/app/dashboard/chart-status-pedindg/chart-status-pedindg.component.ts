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

  preencherDadosGrafico() {
    this.chartOptions = {
      series: [
        {
          name: 'pedidos',
          data: [this.pendentesHoje(), this.concluidosHoje()]
        }
      ],
      plotOptions: {
        bar: {
          distributed: true
        }
      },
      legend: {
        show: false
      },
      chart: {
        height: 200,
        width: 380,
        type: "bar",
      },
      xaxis: {
        categories: ["Pendentes", "Concluidos"]
      },
      fill: {
        colors: ['#E91E63', '#9C27B0']
      }
    }
  }

  quantidadeTotal() {
    return this.pedidos?.length;
  }

  totalPedidos() {
    return this.pedidos.filter(pedido => pedido.data.getDate() == this.currentDate.getDate()).length;
  }

  pendentesHoje() {
    return this.pedidos.filter(pedido => !pedido.finalizado).length;
  }

  concluidosHoje() {
    return this.pedidos.filter(pedido => pedido.finalizado).length;
  }



}
