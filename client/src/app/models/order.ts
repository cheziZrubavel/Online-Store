export class OrderModel {

    public constructor(
        public _id?: string,
        public user_id?: string,
        public cart_id?: string,
        public totalPrice?: Number,
        public city?: string,
        public street?: string,
        public shippingDate?: Date,
        public orderDate?: Date,
        public fourDigitOfCreditCard?: number
    ) { }
}