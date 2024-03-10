
/*
<p>Student name : Lawson Port</p>
<p>email : lport@iastate.edu</p>
<p>date : Febuary 26, 2024</p>
*/


fetch("./data.json")
.then(response => response.json())
.then(myGames => loadGame(myGames));

function loadGame(myGames){



        let title = myGames.games[2].title;
        let year = myGames.games[2].year;
        let description = myGames.games[2].description;
        let lawsons_review = myGames.games[2].lawsons_review;
        let michaels_review = myGames.games[2].michaels_review;
        let img1 = myGames.games[2].url_1;
        let img2 = myGames.games[2].url_2;
        let img3 = myGames.games[2].url_3;




        //for first text box
        var mainContainer1 = document.getElementsByClassName("wrap_2");
        let div1 = document.createElement("div");
        div1.innerHTML = `
        <div class ="center">
    
        <h1 style="color:#52D1DC">Game Description</h1>

        <p>${description}</p>
        </div>
        `;
        mainContainer1[0].appendChild(div1);

        //for second text box
        var mainContainer2 = document.getElementsByClassName("left");
        let div2 = document.createElement("div");
        div2.innerHTML = `

        <h1 style="color:#52D1DC">Lawson's Review</style></h1>
        ${lawsons_review}

        `;
        mainContainer2[0].appendChild(div2);


        //for third text box
        var mainContainer3 = document.getElementsByClassName("right");
        let div3 = document.createElement("div");
        div3.innerHTML = `

        <h1 style="color:#52D1DC">Michael's Review</style></h1>
        ${michaels_review}

        `;
        mainContainer3[0].appendChild(div3);

        //for first image
        var mainContainer4 = document.getElementsByClassName("carousel-item active");
        let div4 = document.createElement("div");
        div4.innerHTML = `
        <img src="${img1}" alt="minecraft_1" style="height: 100%; width: 100%">
    <div class="container">
      <div class="carousel-caption text-start">
        <h1>Minecraft.</h1>
        <p class="opacity-75">The classic survival game</p>
        <p><a class="btn btn-lg btn-primary" href="https://www.minecraft.net/en-us">Sign up today</a></p>
      </div>
    </div>
        `;
        mainContainer4[0].appendChild(div4);
}