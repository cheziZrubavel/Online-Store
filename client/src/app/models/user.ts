export class UserModel {

    public constructor(
        public _id?: number,
        public firstName?: string,
        public lastName?: string,
        public username?: string,
        public identity?: number,
        public password?: string,
        public city?: string,
        public street?: string,
        public role?: string
    ) { }
}