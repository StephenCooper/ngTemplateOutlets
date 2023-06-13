import {
  Component,
  ContentChild,
  Directive,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from "@angular/core";

interface IOption {
  name: string;
}
interface SimpleOptionContext {
  $implicit: IOption;
  index: number;
}

@Directive({
  selector: '[simpleOption]',
})
export class SimpleOptionDirective {

  static ngTemplateContextGuard(
    dir: SimpleOptionDirective,
    ctx: unknown
  ): ctx is SimpleOptionContext {
    return true;
  }
}

@Component({
  selector: "app-my-simple-selector",
  templateUrl: "./my-simple-selector.component.html",
})
export class MySimpleSelectorComponent {
  picked: IOption | undefined = undefined;

  @Input()
  label: string | undefined;
  @Input()
  options: IOption[] | undefined;

  @ContentChild(SimpleOptionDirective, { read: TemplateRef })
  optionTemplateRef: TemplateRef<SimpleOptionContext> | undefined;

  @Output()
  selectionChanged = new EventEmitter<IOption>();

  selectOption(option: IOption) {
    this.picked = option;
    this.selectionChanged.emit(option);
  }
}


