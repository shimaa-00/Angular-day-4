export interface IUser {
    address: {
        city: string;
        street: string;
        number:number;
    };
    id: number;
    email: string;
    username: string;
    password: string;
    name: {
        firstname: "";
        lastname: "";
    };
    phone: string;
    __v: number;
}
