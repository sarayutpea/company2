export class Member {
    constructor(
        public fullname:string,
        public email:string,
        public password:string,
        public gender:string,
        public education:string,
        public isSubscribe?:boolean //จะเลือกหรือไม่เลือกก็ได้ เรียกว่า Optional
    ){

    }
}
