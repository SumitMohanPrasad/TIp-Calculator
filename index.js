const express=require('express')
const cors=require('cors')
const app=express();

app.use(cors());
app.use(express.json());

const optionList=[
    {value:0.3,text:"outstanding"},
    {value:0.2,text:"good"},
    {value:0.15,text:"It was okay"},
    {value:0.1,text:"bad"}

];
app.get('/calculateBill', (req, res) => {
    const { billAmount, totalPeople, serviceQuality } = req.query;
    let total = (Number(billAmount) * Number(serviceQuality)) / Number(totalPeople);
    res.json({ value: total });
})

app.get('/optionList',(req,res)=>{
    res.json(optionList);
})
app.listen(3000,()=>{
    console.log("Server is running")
})
