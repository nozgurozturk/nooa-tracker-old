class ValidationError extends Error {
    constructor(message:string){
        super(message)
        Object.setPrototypeOf(this, ValidationError.prototype);
        this.name = 'ValidationError'
    }
}

class NotFoundError extends Error {
    constructor(message:string){
        super(message)
        Object.setPrototypeOf(this, NotFoundError.prototype);
        this.name = 'NotFoundError'
    }
}
