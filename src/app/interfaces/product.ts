export interface Product {
    id: number;
    name: string;
    brand: string;
    brandImage: string;
    kind: string;
    kindImage: string;
    price: number;
    favorite?: boolean;
}
