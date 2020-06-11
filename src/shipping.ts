
export interface Shipping {
    id: number;
    name: string;
    price: number;
    deliveryTime: number;
}


export const shippingAlternatives: Shipping[] = [
    {
        id: 0,
        name: "Postnord",
        price: 39,
        deliveryTime: 3,
    },
    {
        id: 1,
        name: "DHL",
        price: 79,
        deliveryTime: 2,
    },
    {
        id: 2,
        name: "Instabox",
        price: 200,
        deliveryTime: 1,
    },
];

