
const task=([
    {name:"Mr Rashed", birthYear:1999, currentYear:2022, district:"Dhaka", postNo:1200, priority:2},
    {name:"Mr Raju", birthYear:1995, currentYear:2022, district:"Rajshahi", postNo:1211, priority:1}
])


function cardDistribution(val) {
    const length=val.length;
    const random="00000";
    const numbers= new Array(length).fill(1).map( (_, i) => i+1 )
    

    for (const element of val){
        const district=element.district.slice(0,2).toUpperCase();
        const year=element.currentYear.toString().slice(2,4);
        const post=element.postNo.toString().slice(0,2);
        const birthDate=element.birthYear;
        const digits= numbers.map(number=> random+number)
        const output=district+post+birthDate+year+digits;
        const result=output.slice(0,16);
        // const numbers=[...Array(2).keys()]
        

        console.log( result);
    }
}
cardDistribution(task);