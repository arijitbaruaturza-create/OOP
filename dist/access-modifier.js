"use strict";
/**
 * balance
 * pin
 * phone
 * history
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Access modifier:  public, private, protected
class BkashAccount {
    phone;
    balance;
    pin;
    history = [];
    constructor(phone, balance, pin) {
        this.phone = phone;
        this.balance = balance;
        this.pin = pin;
    }
    // Method/Sub-class
    getBalance(pin) {
        if (this.pin === pin) {
            return this.balance;
        }
        return `PIN is wrong!`;
    }
}
const bkashAcc = new BkashAccount("01234567", 5000, 123);
console.log(bkashAcc.getBalance(123));
// console.log(bkashAcc.balance, bkashAcc.pin)
//# sourceMappingURL=access-modifier.js.map