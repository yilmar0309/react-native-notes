export interface UserBodyAuthEntity {
    username: string;
    password: string;
}

export interface UserBodyRegisterEntity {
    name: string;
    lastname: string;
    password: string;
    email: string;
    age: string;
}

export interface UserEntity {
    name: string;
    lastname: string;
    username: string;
    age: string;
}

export interface UserAndJWT {
    user: UserEntity;
    access_token: string;
}