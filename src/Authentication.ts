class Authentication {
    loggedIn: Boolean;
    constructor(){
        this.loggedIn = false;
    }
    login(callBack: any){
        this.loggedIn = true;
        callBack()
    }
    logout(callBack: any){
        this.loggedIn = false;
        callBack()
    }
    isLoggedIn(){
        return this.loggedIn;
    }
}

export default new Authentication();