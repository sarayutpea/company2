import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report3',
  templateUrl: './report3.component.html',
  styleUrls: ['./report3.component.css']
})
export class Report3Component implements OnInit {
  options: Object;
  month: string[] = ['2015', '2016', '2017'];

  constructor() { }

  ngOnInit() {

    this.options = {
      chart: {
        type: 'line' // type: column
      },
      title: {
        text: 'Report 3 highchart'
      },
      credits: {
        enabled: false
      },
      legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical',
        borderWidth: 2,
        borserRadius: 5
      },
      xAxis: {
        title: { text: 'month' },
        categories: this.month //ตัวอย่างการใช้ตัวแปรที่กำหนดไว้แล้วมาใช้
      },
      yAxis: {
        title: { text: 'point of sale' }
      },
      series: [
        {
          name: 'ข้าว',
          data: [29, 71, 34]
        },
        {
          name: 'น้ำตาล',
          data: [121, 11, 73]
        }
      ]
    };
  }

}
