import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-block-button',
  standalone: true,
  imports: [],
  templateUrl: './block-button.component.html',
  styleUrl: './block-button.component.css'
})
export class BlockButtonComponent {
  @Input("title") title: string = "";
  @Input("icon") icon: string = "";
  @Output("action") action = new EventEmitter();

  onClick() {
    console.log(`Button clicked: ${this.title}`);
    this.action.emit();
  }
}
