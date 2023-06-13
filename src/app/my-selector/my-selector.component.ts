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
  // $implicit value for let-option support
  $implicit: T | undefined;
  // Required to support *selected syntax as that does not use $implicit
  selected: T | undefined;
}

@Directive({
  selector: 'ng-template[selected]',
})
export class SelectedDirective<T> {

  @Input()
  selected!: T[] | '';

  static ngTemplateContextGuard<TContext>(
    dir: SelectedDirective<TContext>,
    ctx: unknown
  ): ctx is SelectedContext<TContext> {
    return true;
  }
}

interface OptionContext<T> {
  // $implicit value for let-option support
  $implicit: T;
  index: number;
  // Required to support *options syntax as that does not use $implicit
  options: T;
}

@Directive({
  selector: '[options]',
})
export class OptionDirective<T> {

  // If you also want to support users not passing generic array you may
  // need to support the '' for typing so that this directive can be used as
  // <ng-template options let-shark>
  // when the user is not passing the list of options
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
  picked: T | undefined = undefined;

  @Input()
  label: string | undefined;
  @Input()
  options: T[] | undefined;

  @ContentChild(SelectedDirective<T>, { read: TemplateRef })
  selectedTemplateRef: TemplateRef<SelectedContext<T>> | undefined;

  @ContentChild(OptionDirective<T>, { read: TemplateRef })
  optionTemplateRef: TemplateRef<OptionContext<T>> | undefined;

  @Output()
  selectionChanged = new EventEmitter<T>();

  selectOption(option: T) {
    this.picked = option;
    this.selectionChanged.emit(option);
  }
}


