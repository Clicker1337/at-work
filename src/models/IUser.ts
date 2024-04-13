export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IAddress,
    phone: string,
    website: string,
    company: ICompany,
    isArchived?: boolean,
    isHidden?: boolean,

    [key: string]: any,
}

export interface ICompany {
    name: string,
    catchPhrase: string,
    bs: string,
}

export interface IAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
}
