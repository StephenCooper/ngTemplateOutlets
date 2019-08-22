import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-my-selector',
  templateUrl: './my-selector.component.html',
  styleUrls: ['./my-selector.component.css']
})
export class MySelectorComponent {

   picked: string;
 
  @Input()
  label: string;
  @Input()
  options: string[];

 @ContentChild('selectedTemplate', {static: false})
  selectedTemplateRef: TemplateRef<any>;
  
  @ContentChild('optionTemplate', {static: false})
  optionTemplateRef: TemplateRef<any>;
 

  @Output()
  selectionChanged = new EventEmitter<string>();

  selectOption(option: string){
    this.picked = option;
    this.selectionChanged.emit(option)
  }

}