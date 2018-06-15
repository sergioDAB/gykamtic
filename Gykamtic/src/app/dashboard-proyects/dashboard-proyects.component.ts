import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-proyects',
  templateUrl: './dashboard-proyects.component.html',
  styleUrls: ['./dashboard-proyects.component.css']
})
export class DashboardProyectsComponent implements OnInit {

  //Doughnut
    public doughnutChartLabels:string[] = ['Ejecutados', 'En progreso', 'Atrasados', 'Sin Empezar'];
    public doughnutChartData:number[] = [30, 25, 10, 45];
    public doughnutChartType:string = 'doughnut';
  
    // events
    public chartClicked(e:any):void {
      console.log(e);
    }
  
    public chartHovered(e:any):void {
      console.log(e);
    }

  //Bar Chart
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2016', '2017', '2018'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 60, 31, 56], label: 'Terminados'},
    {data: [28, 48, 40, 19, 66], label: 'Sin Terminar'}
  ];
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

  constructor() { }

  ngOnInit() {
  }

}
