import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report1',
  templateUrl: './report1.component.html',
  styleUrls: ['./report1.component.css']
})
export class Report1Component implements OnInit {
  barChartData: any[];
  barChartLabels: string[];
  barChartOptions: any = {
    responsive: true,
    scales:{
      yAxes:[
        {
          ticks:{
            max: 100,
            min: 0,
            stepSize: 1
          }
        }
      ],
      xAxes:[
        {
          stacked: false
        }
      ]
    }
  };
  barChartLegend: boolean = true;
  barChartType: string = `bar`;

  constructor() { }

  ngOnInit() {
    // ส่วนสำคัญของ การสร้าง chart คือต้อง ดึงข้อมูลมาให้เป๊ะ
    this.barChartLabels = [`2006`, `2008`, `2012`];
    this.barChartData = [
      {data : [60,45,81], label:`ข้าว`},
      {data : [40,65,40], label:`น้ำตาล`},
      {data : [50,41,31], label:`มันสำปะหลัง`},

    ]
  }

}
