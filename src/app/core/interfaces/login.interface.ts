/**
 * @description An interface for login params
 */

export interface LoginParams {
    userName: string;
    password: string;
}

/**
 * @description Interface for login api response.
 */
export interface LoginResponse {
    token: string;
    userDetails: UserDetails;
}

/**
 * @description Interface for userdetails after login.
 */
export interface UserDetails {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}
