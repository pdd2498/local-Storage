const submit = document.querySelector("#submit");

submit.addEventListener("click" , collectData);


function collectData(){
    const fname = document.querySelector("#FirstName").value
    const lname = document.querySelector("#LastName").value
    const faname = document.querySelector("#FathetName").value
    const mname = document.querySelector("#MotherName").value
    const dob = document.querySelector("#bodin").value
    const state = document.querySelector("#state").value
    const city = document.querySelector("#City").value

    localStorage.setItem('f' , fname);
    localStorage.setItem('l' , lname);
    localStorage.setItem('fa' , faname);
    localStorage.setItem('m' , mname);
    localStorage.setItem('d' , dob);
    localStorage.setItem('s' , state);
    localStorage.setItem('c' , city);
    
    const input = document.querySelector(".input");
    

    showData()
    console.log(fname , lname , faname , mname , dob , state , city);
}

function showData(){
    const box = document.querySelector(".box");
    let div = document.createElement("div");
    let fname = document.createElement("span");
    let faname = document.createElement("span");
    let mname = document.createElement("span");
    let dob = document.createElement("span");
    let state = document.createElement("span");
    let city = document.createElement("span");
    let but = document.createElement('button');
    let re = document.createElement('input')
    re.type = "submit";

    fname.innerText = "NAME :-"+localStorage.getItem("f")+" "+localStorage.getItem("l");
    faname.innerText = "Father Name :- "+localStorage.getItem('fa');
    mname.innerText = "Mother Name :- "+localStorage.getItem('m');
    dob.innerText = "DOB :- "+localStorage.getItem('d');
    state.innerText = "State :- "+localStorage.getItem('s');
    city.innerText = "City :- "+localStorage.getItem('c');
    but.innerHTML = "reomve"
    but.addEventListener('click' , ()=>{
        localStorage.clear();
        showData();
    })

    div.className = "input"

    box.innerHTML = "";
    div.append(fname,faname,mname,dob,state,city,but);

    box.append(div);
}
