export class User {
    id: number;
    username: string;
    password?: string;
    mobile: string;
    // token: string;

    constructor() 
    {
        this.id= 0;
        this.username= '';
        this.password= '';
        this.mobile= '';
        // this.token= '';
   }
}