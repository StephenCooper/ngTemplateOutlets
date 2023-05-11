import {
  Component,
  ContentChild,
  Directive,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from "@angular/core";

interface SelectedContext<T> {
  $implicit: T;
}

@Directive({
  selector: 'ng-template[selectedTemplate]',
})
export class SelectedDirective<T> {

  @Input()

  static ngTemplateContextGuard<TContext>(
    dir: SelectedDirective<TContext>,
    ctx: unknown
  ): ctx is SelectedContext<TContext> {
    return true;
  }

}

interface OptionContext<T> {
  $implicit: T;
  index: number;
  optionTemplate: T;
}

@Directive({
  selector: 'ng-template[optionTemplate]',
})
export class OptionDirective<T> {

  @Input()
  options!: T[];

  static ngTemplateContextGuard<TContext>(
    dir: OptionDirective<TContext>,
    ctx: unknown
  ): ctx is OptionContext<TContext> {
    return true;
  }

}

@Component({
  selector: "app-my-selector",
  templateUrl: "./my-selector.component.html",
})
export class MySelectorComponent<T extends { name: string }> {
  picked: T | undefined;

  @Input()
  label: string | undefined;
  @Input()
  options: T[] | undefined;

  @ContentChild(SelectedDirective<T>, { read: TemplateRef })
  selectedTemplateRef: TemplateRef<unknown> | undefined;

  @ContentChild(OptionDirective<T>, { read: TemplateRef })
  optionTemplateRef: TemplateRef<OptionContext<T>> | undefined;

  @Output()
  selectionChanged = new EventEmitter<T>();

  selectOption(option: T) {
    this.picked = option;
    this.selectionChanged.emit(option);
  }
}


