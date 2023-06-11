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