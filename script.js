const some_players = document.querySelector(".some_players");
const typical_lineup = document.querySelector(".typical_lineup");

class Player {
    constructor(height, weight, age, name){
        this.height = height;
        this.weight = weight;
        this.age = age;
        this.name = name;
    }


}

function players(image_source, player_name){
    const div = document.createElement("div");

   

    const player = new Player();
    player.name = player_name;

    let a = document.createElement("a");
    a.innerText = player.name;
    a.href = "player_profile.html";

    div.style.width = "auto";
    div.style.background = "var(--city-colour)"

    div.style.borderBottomLeftRadius = "10px";
    div.style.borderTopLeftRadius = "10px";
    div.style.borderBottomRightRadius = "10px";
    div.style.borderTopRightRadius = "10px";
    div.style.marginTop = "10px";

    let image = new Image();
    image.src = image_source;
    image.style.width = "200px";

    div.appendChild(image);
    div.appendChild(a);
    div.appendChild(a);
    some_players.appendChild(div);
    
};

function lineup(shirt_number, position){
    const player = document.createElement("div");
    const number = document.createElement("span");

    number.innerText = shirt_number;

    player.style.position = "absolute";

    player.style.borderRadius = "50%";
    player.style.width = "40px";
    player.style.height = "40px";
    player.style.background = "var(--city-colour)";

    player.appendChild(number)
    typical_lineup.appendChild(player);

    switch (position){
        case "striker":
            player.style.left = "140px";
            break;
        case "left_mid":
            player.style.top = "140px";
            break;
        case "left_attacking_mid":
            player.style.top = "140px";
            player.style.left = "80px";
            break;
        case "right_attacking_mid":
            player.style.top = "140px";
            player.style.left = "200px";
            break;
        case "right_mid":
            player.style.top = "140px";
            player.style.left = "280px";
            break;
        case "defensive_mid":
            player.style.top = "240px"
            player.style.left = "140px";
            break;
        case "left_back":
            player.style.top = "340px";
            break;
        case "left_centre_back":
            player.style.top = "340px";
            player.style.left = "80px"
            break;
        case "right_centre_back":
            player.style.top = "340px";
            player.style.left = "200px"
            break;
        case "right_back":
            player.style.top = "340px";
            player.style.left = "280px";
            break;
        case "goal_keeper":
            player.style.left = "140px";
            player.style.top = "440px";
            break;
    }
}



players("https://www.mancity.com/meta/media/ub2ohc3d/rico-lewis.png", "Rico Lewis");
players("https://www.mancity.com/meta/media/txmc4mj3/john-stones.png", "John Stones");
players("https://www.mancity.com/meta/media/w2paltzq/ruben-dias.png", "Ruben Dias");
players("https://www.mancity.com/meta/media/qasnvbyk/rodrigo.png", "Rodri");
players("https://i.namu.wiki/i/M8MRcvPVRU6XCdGWmjt_Bx3UeKUpww5KYAEesgp_PssemdUNf3yHifzg33yxmqS7639sJwEmz_WNqxz2WwUxNQ.webp", "Haaland");

lineup(9, "striker");
lineup(10, "left_mid");
lineup(19, "left_attacking_mid");
lineup(20, "right_attacking_mid");
lineup(26, "right_mid");
lineup(8, "defensive_mid");
lineup(24, "left_back");
lineup(3, "left_centre_back");
lineup(5, "right_centre_back");
lineup(82, "right_back");
lineup(31, "goal_keeper");