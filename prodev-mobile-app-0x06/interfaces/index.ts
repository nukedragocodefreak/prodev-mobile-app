export interface PropertyListingprops{
    propertyName: string,
    rate: number,
    currency: string,
    amount: PropertyLocationProps,
    location: string;
    favorite: boolean;
    image?: string;
}

export interface PropertyLocationProps{
    street: number,
    city: string,
    country: string
}
export interface PropertListing {
    listings: PropertyListingprops []
}