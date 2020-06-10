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
        deliveryTime: 72,
    },
    {
        id: 1,
        name: "DHL",
        price: 79,
        deliveryTime: 24,
    },
    {
        id: 2,
        name: "Instabox",
        price: 200,
        deliveryTime: 8,
    },
];
