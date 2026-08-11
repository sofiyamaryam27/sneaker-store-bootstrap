// ================================
// SNEAKER SIZE CALCULATOR
// ================================


function calculateSize(){


    let footLength = document.getElementById("footLength").value;


    let result = document.getElementById("result");



    if(footLength === ""){


        result.innerHTML = "Please enter your foot length";


        return;

    }




    let cm = Number(footLength);



    let uk;
    let us;
    let eu;



    // Size Calculation


    if(cm <= 24.5){

        uk = 5;
        us = 6;
        eu = 39;

    }


    else if(cm <= 25.5){

        uk = 6;
        us = 7;
        eu = 40;

    }


    else if(cm <= 26.5){

        uk = 7;
        us = 8;
        eu = 41;

    }


    else if(cm <= 27.5){

        uk = 8;
        us = 9;
        eu = 42;

    }


    else if(cm <= 28.5){

        uk = 9;
        us = 10;
        eu = 43;

    }


    else{


        uk = 10;
        us = 11;
        eu = 44;


    }




    result.innerHTML = `

    Your Perfect Sneaker Size 👟

    <br><br>

    UK Size : ${uk}

    <br>

    US Size : ${us}

    <br>

    EU Size : ${eu}

    `;



}