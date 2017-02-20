import {FormGroup} from "@angular/forms";
import {AppValidators} from "./app.validators";
import {OnInit} from "@angular/core";

export abstract class FormReactiveComponent implements OnInit {

  protected form: FormGroup;

  abstract ngOnInit(): any;

  invalid(name: string): boolean {
    return AppValidators.invalid(this.form, name);
  }

  invalidKey(name: string, error: string): boolean {
    return AppValidators.invalidKey(this.form, name, error);
  }
}
