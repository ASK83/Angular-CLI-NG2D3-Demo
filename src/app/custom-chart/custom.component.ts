import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnDestroy,
  AfterViewInit,
  ElementRef,
  NgZone,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { BaseChart } from 'ng2d3';
import * as d3 from 'd3';

@Component({
  selector: 'custom-chart',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomChartComponent extends BaseChart implements OnChanges, OnDestroy, AfterViewInit{
  dims: any;
  xScale: any;
  yScale: any;
  xDomain: any;
  yDomain: any;
  colors: Function;
  colorScheme: any = ['#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded', '#a95963', '#8796c0', '#7ed3ed', '#50abcc', '#ad6886'];

  @Input() view;
  @Input() results;

  @Output() clickHandler = new EventEmitter();

  constructor(private element: ElementRef, private cd: ChangeDetectorRef, zone: NgZone) {
    super(element, zone, cd);
  }

  ngAfterViewInit(): void {
    this.bindResizeEvents(this.view);
  }

  ngOnDestroy() {
    this.unbindEvents();
  }

  ngOnChanges() {
    this.update();
  }

  update() {
    super.update();

    this.dims = {
      width: this.width,
      height: this.height
    };

    this.xScale = this.getXScale();
    this.yScale = this.getYScale();

    this.setColors();
  }

  getXScale() {
    const spacing = 0.2;
    this.xDomain = this.getXDomain();
    return d3.scaleBand()
      .rangeRound([0, this.dims.width])
      .paddingInner(spacing)
      .domain(this.xDomain);
  }

  getYScale() {
    this.yDomain = this.getYDomain();
    return d3.scaleLinear()
      .range([this.dims.height, 0])
      .domain(this.yDomain);
  }

  getXDomain() {
    return this.results.map(d => d.name);
  }

  getYDomain() {
    let values = this.results.map(d => d.value);
    let min = Math.min(0, ...values);
    let max = Math.max(...values);
    return [min, max];
  }

  click(data) {
    this.clickHandler.emit(data);
  }

  setColors() {
    this.colors = d3.scaleOrdinal()
      .range(this.colorScheme)
      .domain(this.getXDomain());
  }
}
