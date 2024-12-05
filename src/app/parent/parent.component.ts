import { Component, input, viewChild } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  parentMessage: string = '';
  children: any = viewChild(ChildComponent);

  ngOnInit() {
    console.log('children: ', this.children);
  }

  onInputChange(input_name: any) {
    this.parentMessage = input_name.toString()
  }
}
