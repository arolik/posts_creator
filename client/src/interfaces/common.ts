
export interface RegisterPropsModalI {
    isOpen: boolean,
    setOpen: (isOpen: boolean) => void
}

export interface LoginPropsModalI {
    isOpen: boolean,
    setOpen: (isOpen: boolean) => void
}

export interface UserI {
    username: string,
    token: string,
    message: string,
    loading: boolean
}

export interface UserStateI {
    username: string,
    token: string,
    status: string,
    loading: boolean
}