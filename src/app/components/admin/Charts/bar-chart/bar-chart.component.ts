import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements AfterViewInit {
  @ViewChild('chart')
  private chartContainer!: ElementRef;

  ngAfterViewInit() {
    let element = this.chartContainer.nativeElement;
    let svg = d3.select(element)
      .attr('width', 500)
      .attr('height', 300);
  
    let data = [10, 20, 30, 40, 50];
  
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 50)
      .attr('y', d => 300 - d)
      .attr('width', 40)
      .attr('height', d => d)
      .attr('fill', 'steelblue');
  }

}