//header interfaces

export interface IRegisterPropsModal {
    isOpen: boolean,
    setOpen: (isOpen: boolean) => void
}

export interface ILoginPropsModal {
    isOpen: boolean,
    setOpen: (isOpen: boolean) => void
}

export interface IFormValues {
    login: string,
    password: string
}

// export interface LoginFieldI {
//     username: string,
//     handleUsernameField: (username: string) => void
// }

// export interface PasswordFieldI {
//     password: string,
//     handlePasswordField: (password: string) => string
// }

//user interfaces

export interface IUserData {
    username: string,
    createdAt: string,
    updatedAt: string,
    posts: [],
    _id: string
}

export interface IUser {
    token: string,
    message: string,
    user: IUserData
}

export interface IUserState {
    username: string,
    token: string | null,
    status: string | null,
    loading: boolean
}