export interface IEvent {
    id: number
    name: string
    date: Date
    time: string
    price: number
    imageUrl: string
    location?: {
        address: string
        city: string
        state: string
    }
    onlineUrl?: string
    sessions: ISession[]
    country: string
}

export interface ISession {
    id: number
    name: string
    presenter: string
    duration: number
    level: string
    abstract: string
    voters: string[]
}