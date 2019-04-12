import { Laptop } from './laptop';

export interface Order {
    buyer: object;
    laptop: Laptop;
    quantity: number;
    status: string;
    price: number;
}