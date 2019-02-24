class Auth {
    constructor(){
        this.authanticated = false;
    }

    login(cb){
        this.authanticated = true;
        cb();
    }

    logout(cb){
        this.authanticated = false;
        cb();
    }

    isAuthenticated(){
        return this.authanticated;
    }
}

export default new Auth();