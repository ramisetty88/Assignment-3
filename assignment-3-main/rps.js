function game(){
    let options = ["rock","paper","scissors"];

    let i = Math.floor(Math.random() * 3);
    let co = options[i];
    document.getElementById("co").innerText = `Computer's choice: ${co}`;

    let uo = document.getElementById("uo").value;

    if(uo == co){
        document.getElementById("res").innerText = "Tie";
    } else if (
        (uo == "rock" && co == "scissors") ||
        (uo == "scissors" && co == "paper") ||
        (uo == "paper" && co == "rock")
    ) {
        document.getElementById("res").innerText = "User Won";
    } else {
        document.getElementById("res").innerText = "Computer Won";
    }
}
