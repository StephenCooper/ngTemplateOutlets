import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from "@angular/core";

@Component({
  selector: "app-my-selector",
  templateUrl: "./my-selector.component.html",
})
export class MySelectorComponent<T extends { name: string }> {
  picked: T;

  @Input()
  label: string;
  @Input()
  options: T[];

  @ContentChild("selectedTemplate", { static: false })
  selectedTemplateRef: TemplateRef<any>;

  @ContentChild("optionTemplate", { static: false })
  optionTemplateRef: TemplateRef<any>;

  @Output()
  selectionChanged = new EventEmitter<T>();

  selectOption(option: T) {
    this.picked = option;
    this.selectionChanged.emit(option);
  }
}
