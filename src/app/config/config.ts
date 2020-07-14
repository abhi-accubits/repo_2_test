/**
 * Define application level constants that don't change based on environments
 */

export class Config {

    /**
     * @description Password Policy for the application.
     * Used in Registration, Forgot password and reset password.
     */
    static readonly passwordPolicy = /^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/;

    /**
     * @description LoggedIn user token, You can change it for your need,
     * the below value will be stored in localstorage as a key for the token
     */
    static readonly userToken = 'token';
}
