import { Component, EventEmitter, Input, Output, OnInit, OnChanges, DoCheck, 
  AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit,OnChanges,DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,
AfterViewInit,
OnDestroy {
  @Input() postImg: string ="";
  @Output() imgSelected = new EventEmitter<string>();

  constructor(){}

  ngOnInit(){}

  ngOnChanges(){}

  ngDoCheck(){}

  ngAfterContentChecked(): void {
      
  }

  ngAfterContentInit(): void {
      
  }

  ngAfterViewChecked(): void {
      
  }

  ngAfterViewInit(): void {
      
  }

  ngOnDestroy(): void {
      
  }
}
