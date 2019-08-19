import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-graficas-don',
  templateUrl: './graficas-don.component.html',
  styles: []
})
export class GraficasDonComponent implements OnInit {

  @Input('ChartLabels') doughnutChartLabels: Label[] = [];
  @Input('ChartData') doughnutChartData: MultiDataSet = [];
  @Input('ChartType') doughnutChartType: ChartType;
  constructor() {
  }

  ngOnInit() {
  }

}
