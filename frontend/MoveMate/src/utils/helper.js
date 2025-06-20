
export const changeorder=(str)=>{


    let ans="";
    let myMap=new Map();

    while(ans.length<str.length){
        const x=(Math.round(Math.random()*100))%str.length;
        if(myMap[x]==true){
            continue;
        }
        else{
            myMap[x]=true;
            ans+=str[x];
        }
    }
    return ans;

}

export const validateEmail=(email)=>{
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
