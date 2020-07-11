import { ValidatorFn, FormGroup } from '@angular/forms';

export class CustomValidators {
    static confirmPassword(passwordInput = 'password', confirmPasswordInput = 'confirmPassword'): ValidatorFn {
        return (controls: FormGroup): { [key: string]: any } | null => {
            const password = controls.get(passwordInput);
            const confirmPassword = controls.get(confirmPasswordInput);

            return password && confirmPassword && password.value === confirmPassword.value ? null :
                { confirmPassword: true };
        };
    }
}
