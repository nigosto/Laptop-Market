import { Laptop } from './laptop';

export interface Order {
    _id: string;
    buyer: object;
    laptop: Laptop;
    quantity: number;
    status: string;
    price: number;
}