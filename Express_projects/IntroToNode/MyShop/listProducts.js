var faker=require("faker");
// console.log(faker.address.city());
// console.log(faker.name.findName());
// console.log(faker.company.companyName());));
// console.log(faker.commerce.product());
// console.log(faker.commerce.productName());
// console.log(faker.finance.amount(
function fake(){
    for(var i=0;i<10;i++){
        console.log("Welcome To My Shop");
        console.log(faker.commerce.productName()+' -  $'+faker.finance.amount());
    }
}
fake();