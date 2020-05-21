import Buyable from './Buyable'

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly year: number,
        readonly price: number,
        readonly durationMinutes: number,
        readonly tagline: string,
        readonly country: string,
        readonly filmGenre: string,
    ) { }
}