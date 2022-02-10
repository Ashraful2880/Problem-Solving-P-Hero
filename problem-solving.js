
const task=([
    {name:"Mr Rashed", birthYear:1999, currentYear:2022, district:"Dhaka", postNo:1200, priority:2},
    {name:"Mr Raju", birthYear:1995, currentYear:2022, district:"Rajshahi", postNo:1211, priority:1}
])


function cardDistribution(val) {
    const random="00000";
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
        const number=parseInt(item.slice(2,16));
        const obg={cardNumber:item,gift:"",pririoty:""};
        if(number%2==0){
            obg.gift="R"
            obg.pririoty=1
        }else{
            obg.gift="W"
            obg.pririoty=2
        }
        return obg;
    });
    const last = final.sort((a, b) => a.pririoty - b.pririoty);
    return last;
}
const ff= cardDistribution(task);
console.log(ff);
