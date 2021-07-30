const TABLE = {
    0 : "keyboard",
    1 : "mouse",
    2 : "monitor",
}
TABLE[Symbol.iterator] = function () {
    const obj = this;
    return {
        i : 0,
        next() {
            const value = obj[this.i];
            this.i += 1;
            if(value){
                return { value, done : false};
            }
            return { done : true };
        }
    }
}

console.log(...TABLE);