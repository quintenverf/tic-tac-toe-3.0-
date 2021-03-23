let keuze = true;
let keuze1 = true;





// isWinningCombination(getBoard()[0][2],getBoard()[1][1], getBoard()[2][0])

function WinEen(){
    if([1], [2], [3] == true){
        console.log("gewonnen");
    }
}

  document.getElementById("klik").addEventListener("click", function(){
    console.log("click");
    Click();
});

    document.getElementById("klik1").addEventListener("click", function(){
        console.log("click");
        Switch1();
        Click();

    });

        document.getElementById("klik2").addEventListener("click", function(){
            console.log("click");
            Switch2();
            Click();
        });

            document.getElementById("klik3").addEventListener("click", function(){
                console.log("click");
                Switch3();
                Click();
            });

                document.getElementById("klik4").addEventListener("click", function(){
                    console.log("click");
                    Switch4();
                    Click();
                });

                    document.getElementById("klik5").addEventListener("click", function(){
                        console.log("click");
                        Switch5();
                        Click();
                    });

                        document.getElementById("klik6").addEventListener("click", function(){
                            console.log("click");
                            Switch6();
                            Click();
                        });

                            document.getElementById("klik7").addEventListener("click", function(){
                                console.log("click");
                                Switch7();
                                Click();
                            });

                                document.getElementById("klik8").addEventListener("click", function(){
                                    console.log("click");
                                    Switch8();
                                    Click();
                                });

                                    document.getElementById("klik9").addEventListener("click", function(){
                                        console.log("click");
                                        Switch9();
                                        Click();
                                    });

function Click() {
    if(keuze == true) {
        document.getElementById("currentPlayer").innerText = "speler1 = X";
        // document.getElementById("output1").innerText = "O";
        // document.getElementById("output2").innerText = "X";
         keuze = false;
    } else {
        document.getElementById("currentPlayer").innerText = "speler2 = O";
        // document.getElementById("output1").innerText = "X";
        // document.getElementById("output2").innerText = "O";
        keuze = true;
    } 
}

function Switch1() {
    
    if (keuze1 == true) {
        document.getElementById("output1").innerText = "X";
        keuze1 = false;
    } else {
        document.getElementById("output1").innerText = "O";
        keuze1 = true;
    }
}

function Switch2() {
    
    if (keuze1 == true) {
        document.getElementById("output2").innerText = "X";
        keuze1 = false;
    } else {
        document.getElementById("output2").innerText = "O";
        keuze1 = true;
    }

}

function Switch3() {
   
    if (keuze1 == true) {
        document.getElementById("output3").innerText = "X";
        keuze1 = false;
    } else {
        document.getElementById("output3").innerText = "O";
        keuze1 = true;
    }

    
}

function Switch4() {
    if (keuze1 == true) {
        document.getElementById("output4").innerText = "X";
        keuze1 = false;
    } else {
        document.getElementById("output4").innerText = "O";
        keuze1 = true;
    }
}

function Switch5() {
    if (keuze1 == true) {
        document.getElementById("output5").innerText = "X";
        keuze1 = false;
    } else {
        document.getElementById("output5").innerText = "O";
        keuze1 = true;
    }
}

function Switch6() {
    if (keuze1 == true) {
        document.getElementById("output6").innerText = "X";
        keuze1 = false;
    } else {
        document.getElementById("output6").innerText = "O";
        keuze1 = true;
    }
}

function Switch7() {
    if (keuze1 == true) {
        document.getElementById("output7").innerText = "X";
        keuze1 = false;
    } else {
        document.getElementById("output7").innerText = "O";
        keuze1 = true;
    }
}

function Switch8() {
    if (keuze1 == true) {
        document.getElementById("output8").innerText = "X";
        keuze1 = false;
    } else {
        document.getElementById("output8").innerText = "O";
        keuze1 = true;
    }
}

function Switch9() {
    if (keuze1 == true) {
        document.getElementById("output9").innerText = "X";
        keuze1 = false;
    } else {
        document.getElementById("output9").innerText = "O";
        keuze1 = true;
    }
}


function WinEen(een, twee, drie) {
    if (WinEen() == true) {
        console.log("je hebt gewonnen");
    }
}






