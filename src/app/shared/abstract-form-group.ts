// import { FormGroup } from '@angular/forms';
//
// export abstract class AbstractFormGroup extends FormGroup {
//   private errorMessages = {
//     required: 'O campo %s é obrigatório.',
//     format: '%s inválido.',
//     email: '%s está incorreto.',
//     pattern: '%s inválida, permitida somente números'
//   };
//
//   public markAllAsTouched(): void {
//     for (let controlName in this.controls) {
//       this.get(controlName).markAsTouched();
//       this.get(controlName).markAsDirty();
//     }
//   }
//
//   public getFirstErrorFrom(controlName: string, label: string): string {
//     return this.errorMessages[Object.keys(this.get(controlName).errors)[0]];
//   }
//
//   public addErrorMessages(indice: any, mensagem: string) {
//     this.errorMessages[indice] = mensagem;
//   }
// }
