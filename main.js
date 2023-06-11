function AddRecord()
{
    let inputRef = document.querySelector("#text1")
    let message = inputRef.value;
    let uri = `http://localhost:4000/addrecord?message=${message}`;
    //help to connect backend
    fetch(uri);

    // for clearing the box
    inputRef.value = "";
}

// connect mongodb with day11-backend

async function ReadRecord()
{
    let uri = `http://localhost:4000/findAll`;
    let res = await fetch(uri);
    //console.log(res);
    let list = await res.json();
    console.log(list);

   
for (let item of list) {
    let parentRef = document.querySelector("#parent");
    let existingValue = parentRef.innerHTML;
    let newValue = `<h1>${item.message}</h1>`;

    parentRef.innerHTML = newValue + existingValue;
  }
}

