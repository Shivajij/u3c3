
     

const objData=async()=>{
    try {
        let res=await fetch(
            "https://masai-vouchers-api.herokuapp.com/api/vouchers"
        );
        let join =await res.json();
        console.log(join);
        let data=join[0].vouchers;
        console.log(data)
        getData(data);
        showAmount();
    }catch(err){
        console.log(err)
    }
    

}
objData()



function getData(data)
{

    document.querySelector(".voucher").innerHTML=null
    data.map(function(ele){
        let div = document.createElement("div")
        div.setAttribute("id","voucher_list")

        let img = document.createElement('img')
        img.src = ele.image

        let name = document.createElement('p')
        name.innerText = ele.name
        

        let pric = document.createElement('p')
        pric.innerText = ele.price
        

        let btn = document.createElement("button")
        btn.innerText = "Buy"
        btn.setAttribute("class", "buy_voucher")
        btn.addEventListener("click", function(){
            addproducts(ele)
        });
        div.append(img,name,pric,btn)
        document.querySelector(".voucher").append(div)
    })
}