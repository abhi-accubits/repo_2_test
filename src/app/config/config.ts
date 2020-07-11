/**
 * Define application level constants that don't change based on environments
 */

export class Config {

    /**
     * Password Policy for the application.
     * Used in Registration, Forgot password and reset password.
     */
    static readonly passwordPolicy = /^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/;
}
