

let Name=JSON.parse(localStorage.getItem("name"))||0;
let w=document.querySelector("#name").innerText=name;

function storeData(){
    let Name=document.querySelector("#name").value;
    // let name=JSON.parse(localStorage.getItem("name"))||0;
    let email=document.querySelector("#email").value;
    let address=document.querySelector("#address").value;
    localStorage.setItem(name,Name)
    Name=JSON.parse(localStorage.getItem("name"))
    let w=document.querySelector("#name").innerText=Name



}

// let amnt=localStorage.getItem("wallet_balance")
// let prm=JSON.parse(localStorage.getItem("voucher_list"))
// const getdata=async ()=>{
//     try{
//         let strm=await fetch('https://masai-vouchers-api.herokuapp.com/api/vouchers')
//         let collect =await strm.json();
//         console.log(collect)
//         let data=collect[0].vouchers;
//         console.log(data)
//         display(data)
//         showwallet();

        
//     } catch(err){
//         console.log(err)
//     }
//     // let collect=await strm.json()
    
// }   
//   getdata();

//   function display(data){
//       document.querySelector("#voucher_list")
//   }