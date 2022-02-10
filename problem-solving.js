
const task=([
    {name:"Mr Rashed", birthYear:1999, currentYear:2022, district:"Dhaka", postNo:1200, priority:2},
    {name:"Mr Raju", birthYear:1995, currentYear:2022, district:"Rajshahi", postNo:1211, priority:1}
])


function cardDistribution(val) {
    const length=val.length;
    const random="00000";
    const numbers= new Array(length).fill(1).map( (_, i) => i+1 )

    const res= val.map((i,index)=>{
        const district=i.district.slice(0,2).toUpperCase();
        const year=i.currentYear.toString().slice(2,4);
        const post=i.postNo.toString().slice(0,2);
        const birthDate=i.birthYear;
        const output=district+post+birthDate+year;
        const number=random+(index+1);
        const result=output+number;
        return result;
    })
    const final=res.map(item=>{
        const str=item.slice(0,2);
        const number=parseInt(item.slice(2,16));
        const obg={cardNumber:item,gift:"",pririoty:""};
        if(number%2==0){
            obg.gift="R"
        }else{
            obg.gift="W"
        }
        console.log(obg);
    });
}
cardDistribution(task);