
function add() {
    let arr = new Array(10);
    i=0;
    if (i<arr.length) {
        input = document.getElementById("user").value;
        arr[i] = input
        i++;
        //display
        document.getElementById("data").innerText = arr.slice(0,i).join(",");
        
    }
}



