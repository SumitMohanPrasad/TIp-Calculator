var billAmount=document.getElementById('billAmount');
var totalPeople=document.getElementById('totalPeople');
var serviceQuality=document.getElementById('serviceQuality');

axios.get('http://localhost:3000/optionList').then((response)=>{
    console.log(response)
    const serviceQuality=document.getElementById('serviceQuality');
    response.data.forEach(option => {
        const optionTag=document.createElement('option')
        optionTag.value=option.value;
        optionTag.text=option.text;
        serviceQuality.appendChild(optionTag);
    });
}).catch((err)=>{
   console.log(err);
});
function calculateTip(){
    if(billAmount.value==="" || billAmount.value==0){
        window.alert("Please enter the amount more than 0")
        return;
    }
    if(totalPeople.value==="" || totalPeople.value<=0){
        window.alert("Please enter the total number of people")
        return;
    }
    axios.get(`http://localhost:3000/calculateBill?billAmount=${billAmount.value}&totalPeople=${totalPeople.value}&serviceQuality=${serviceQuality.value}`).then((result) => {
        console.log(result);
        document.getElementById('eachTip').innerHTML=result.data.value;
        document.getElementById('totaltip').style.display="block"
    }).catch((err) => {
        console.log(err);
    });
}
document.getElementById('totaltip').style.display="none"