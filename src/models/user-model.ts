export class User {
    id: string
    phone: string
    pseudo: string
    password: string
    balance: number
    verification: boolean
    createdAt: Date
    updatedAt: Date
    constructor(
        id: string,
        phone: string,
        pseudo: string,
        password: string,
        balance: number,
        verification: boolean,
        createdAt: Date,
        updatedAt: Date
    ) {
        this.id = id
        this.phone = phone
        this.pseudo = pseudo
        this.password = password
        this.balance = balance
        this.verification = verification
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}