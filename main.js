function addUser()
{
    player1 = document.getElementById("Player1").value;
    player2 = document.getElementById("Player2").value;
    
    localStorage.setItem("Player1", player1);
    localStorage.setItem("Player2", player2);

    window.location = "game_page.html";

}