import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() child_name: any = 'hello';
  ngOnChanges() {
    console.log('child onChanges');

  }
  ngOnInit() {
    console.log('child init');

  }
}
