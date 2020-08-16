export class CartItemsModel {

    public constructor(
        public _id?: string,
        public productName?: string,
        public categoryId?: string,
        public price?: number,
        public quantity?: number,
        public cartId?: number
    ) { }
}