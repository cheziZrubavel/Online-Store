export class ProductModel {

    public constructor(
        public _id?: string,
        public productName?: string,
        public categoryId?: string,
        public price?: string,
        public image?: string | File
    ) { }
}