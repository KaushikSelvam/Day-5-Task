// write  a person class to hold all the details 

class person{
    constructor(firstName,lastName,Age,EmailId,Address,phoneNo){
        this.firstName = firstName;
        this.lastName = lastName;
        this.Age = Age;
        this.EmailId = EmailId;
        this.Address = Address;
        this.phoneNo = phoneNo;
    }
    getfullName(){
        return this.firstName+" "+this.lastName;
    }
    getAge(){
        return this.Age;
    }
    getEmailId(){
        return this.EmailId;
    }
    getAddress(){
        return this.Address;
    }
    getphoneNo(){
        return this.phoneNo;
    }
    setfirstName(firstName){
        this.firstName = firstName;

    }
    setlastName(lastName){
        this.lastName = lastName;
    }
    setAge(Age){
        this.Age = Age;
    }
    setEmailID(EmailId){
        this.EmailId = EmailId;
    }
    setAddress(Address){
        this.Address = Address;
    }
    setphoneNO(phoneNo){
        this.phoneNo = phoneNo;
    }
}

let person1 = new person('kaushik','selvam',21,'kaushikselvam05@gmailcom',"Theni",8838472600)
console.log(person1.getfullName());
console.log(person1.getAge());
console.log(person1.getEmailId());
console.log(person1.getAddress());
console.log(person1.getphoneNo());

//write a class to calculate the uber price

class UberPricing{
    constructor(baseFare,costPerMinute,costPerMile,bookingFee){
        this.baseFare = baseFare;
        this.costPerMinute = costPerMinute;
        this.costPerMile = costPerMile;
        this.bookingFee = bookingFee;
    }
    calculatedPrice(distanceInMiles, timeInMinutes){
        const distanceCost = distanceInMiles * this.costPerMile;
        const timeCost = timeInMinutes * this.costPerMinute;
        const totalCost = this.baseFare + distanceCost + timeCost + this.bookingFee;
        return totalCost;
    }

}
//Example usage:

const uberX = new UberPricing(2.5,4,0.5,10);
const distance = 10;
const time = 30;
const price = uberX.calculatedPrice(distance,time);
console.log('The estimated price for the ride: $'+ price.toFixed(1));




