import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report4',
  templateUrl: './report4.component.html',
  styleUrls: ['./report4.component.css']
})
export class Report4Component implements OnInit {
  options: Object;

  constructor() { }

  ngOnInit() {
    this.options = {
      chart: {
        type: 'pie',
      },
      title: {
        text: 'report 4 highchart with pie single data'
      },
      plotOptions: {
        pie: {
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          },
          showInLegend: true,
          credits: { enabled: false }
        }
      },
      series: [
        {
          name: 'department',
          data: [
            {
              name: 'IT',
              y: 32
            },
            {
              name: 'Finance',
              y: 40
            },
            {
              name: 'Marketing',
              y: 10
            }

          ]
        }
      ]
    }
  }

}
