let inputCA1;
let inputCA2;
let inputCA3;
let inputCA4;
let inputCA5;
let inputCA6;
let inputCA7;
let inputCA8;
let inputCA9;
let inputCA10;

let inputExam1;
let inputExam2;
let inputExam3;
let inputExam4;
let inputExam5;
let inputExam6;
let inputExam7;
let inputExam8;
let inputExam9;
let inputExam10;


let sum1;
let sum2;
let sum3;
let sum4;
let sum5;
let sum6;
let sum7;
let sum8;
let sum9;
let sum10;


let total1 = document.getElementById("total1");
let total2 = document.getElementById("total2");
let total3 = document.getElementById("total3");
let total4 = document.getElementById("total4");
let total5 = document.getElementById("total5");
let total6 = document.getElementById("total6");
let total7 = document.getElementById("total7");
let total8 = document.getElementById("total8");
let total9 = document.getElementById("total9");
let total10 = document.getElementById("total10");

let letterGrade1;
let letterGrade2;
let letterGrade3;
let letterGrade4;
let letterGrade5;
let letterGrade6;
let letterGrade7;
let letterGrade8;
let letterGrade9;
let letterGrade10;

let unit1;
let unit2;
let unit3;
let unit4;
let unit5;
let unit6;
let unit7;
let unit8;
let unit9;
let unit10;

let gradePoint1;
let gradePoint2;
let gradePoint3;
let gradePoint4;
let gradePoint5;
let gradePoint6;
let gradePoint7;
let gradePoint8;
let gradePoint9;
let gradePoint10;


let gpaResult1;
let gpaResult2;
let gpaResult3;
let gpaResult4;
let gpaResult5;
let gpaResult6;
let gpaResult7;
let gpaResult8;
let gpaResult9;
let gpaResult10;


let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");
let result3 = document.getElementById("result3");
let result4 = document.getElementById("result4");
let result5 = document.getElementById("result5");
let result6 = document.getElementById("result6");
let result7 = document.getElementById("result7");
let result8 = document.getElementById("result8");
let result9 = document.getElementById("result9");
let result10 = document.getElementById("result10");

let gpaResult;

let gpaResultSemiFinal;

let gpaResultFinal = document.getElementById("gpaResultFinal");

let myBtn = document.getElementById("myBtn");

myBtn.onclick = function(){


    inputCA1 = Number(document.getElementById("inputCA1").value);
    inputExam1 = Number(document.getElementById("inputExam1").value);

    sum1 = Number(inputCA1 + inputExam1);

    total1.textContent = sum1;


    inputCA2 = Number(document.getElementById("inputCA2").value);
    inputExam2 = Number(document.getElementById("inputExam2").value);

    sum2 = Number(inputCA2 + inputExam2);

    total2.textContent = sum2;


    inputCA3 = Number(document.getElementById("inputCA3").value);
    inputExam3 = Number(document.getElementById("inputExam3").value);

    sum3 = Number(inputCA3 + inputExam3);

    total3.textContent = sum3;


    inputCA4 = Number(document.getElementById("inputCA4").value);
    inputExam4 = Number(document.getElementById("inputExam4").value);

    sum4 = Number(inputCA4 + inputExam4);

    total4.textContent = sum4;


    inputCA5 = Number(document.getElementById("inputCA5").value);
    inputExam5 = Number(document.getElementById("inputExam5").value);

    sum5 = Number(inputCA5 + inputExam5);

    total5.textContent = sum5;


    inputCA6 = Number(document.getElementById("inputCA6").value);
    inputExam6 = Number(document.getElementById("inputExam6").value);

    sum6 = Number(inputCA6 + inputExam6);

    total6.textContent = sum6;


    inputCA7 = Number(document.getElementById("inputCA7").value);
    inputExam7 = Number(document.getElementById("inputExam7").value);

    sum7 = Number(inputCA7 + inputExam7);

    total7.textContent = sum7;


    inputCA8 = Number(document.getElementById("inputCA8").value);
    inputExam8 = Number(document.getElementById("inputExam8").value);

    sum8 = Number(inputCA8 + inputExam8);

    total8.textContent = sum8;


    inputCA9 = Number(document.getElementById("inputCA9").value);
    inputExam9 = Number(document.getElementById("inputExam9").value);

    sum9 = Number(inputCA9 + inputExam9);

    total9.textContent = sum9;


    inputCA10 = Number(document.getElementById("inputCA10").value);
    inputExam10 = Number(document.getElementById("inputExam10").value);

    sum10 = Number(inputCA10 + inputExam10);

    total10.textContent = sum10;




    unit1 = Number(document.getElementById("unit1").value);
    unit2 = Number(document.getElementById("unit2").value);
    unit3 = Number(document.getElementById("unit3").value);
    unit4 = Number(document.getElementById("unit4").value);
    unit5 = Number(document.getElementById("unit5").value);
    unit6 = Number(document.getElementById("unit6").value);
    unit7 = Number(document.getElementById("unit7").value);
    unit8 = Number(document.getElementById("unit8").value);
    unit9 = Number(document.getElementById("unit9").value);
    unit10 = Number(document.getElementById("unit10").value);





    

    switch(true){
        case sum1 >= 70:
            letterGrade1 = "A";
            result1.textContent = letterGrade1;
            gradePoint1 = 5;
            gpaResult1 = unit1 * gradePoint1;
            break;

        case sum1 >= 60:
            letterGrade1 = "B";
            result1.textContent = letterGrade1;
            gradePoint1 = 4;
            gpaResult1 = unit1 * gradePoint1;
            break;

        case sum1 >= 50:
            letterGrade1 = "C";
            result1.textContent = letterGrade1;
            gradePoint1 = 3;
            gpaResult1 = unit1 * gradePoint1;
            break;

        case sum1 >= 45:
            letterGrade1 = "D";
            result1.textContent = letterGrade1;
            gradePoint1 = 2;
            gpaResult1 = unit1 * gradePoint1;
            break;

        case sum1 >= 40:
            letterGrade1 = "E";
            result1.textContent = letterGrade1;
            gradePoint1 = 1;
            gpaResult1 = unit1 * gradePoint1;
            break;

        default:
            letterGrade1 = "F"
            result1.textContent = letterGrade1;
            gradePoint1 = 0;
            gpaResult1 = unit1 * gradePoint1;
    }



    switch(true){
        case sum2 >= 70:
            letterGrade2 = "A";
            result2.textContent = letterGrade2;
            gradePoint2 = 5;
            gpaResult2 = unit2 * gradePoint2;
            break;

        case sum2 >= 60:
            letterGrade2 = "B";
            result2.textContent = letterGrade2;
            gradePoint2 = 4;
            gpaResult2 = unit2 * gradePoint2;
            break;

        case sum2 >= 50:
            letterGrade2 = "C";
            result2.textContent = letterGrade2;
            gradePoint2 = 3;
            gpaResult2 = unit2 * gradePoint2;
            break;

        case sum2 >= 45:
            letterGrade2 = "D";
            result2.textContent = letterGrade2;
            gradePoint2 = 2;
            gpaResult2 = unit2 * gradePoint2;
            break;

        case sum2 >= 40:
            letterGrade2 = "E";
            result2.textContent = letterGrade2;
            gradePoint2 = 1;
            gpaResult2 = unit2 * gradePoint2;
            break;

        default:
            letterGrade2 = "F"
            result2.textContent = letterGrade2;
            gradePoint2 = 0;
            gpaResult2 = unit2 * gradePoint2;
    }



    switch(true){
        case sum3 >= 70:
            letterGrade3 = "A";
            result3.textContent = letterGrade3;
            gradePoint3 = 5;
            gpaResult3 = unit3 * gradePoint3;
            break;

        case sum3 >= 60:
            letterGrade3 = "B";
            result3.textContent = letterGrade3;
            gradePoint3 = 4;
            gpaResult3 = unit3 * gradePoint3;
            break;

        case sum3 >= 50:
            letterGrade3 = "C";
            result3.textContent = letterGrade3;
            gradePoint3 = 3;
            gpaResult3 = unit3 * gradePoint3;
            break;

        case sum3 >= 45:
            letterGrade3 = "D";
            result3.textContent = letterGrade3;
            gradePoint3 = 2;
            gpaResult3 = unit3 * gradePoint3;
            break;

        case sum3 >= 40:
            letterGrade3 = "E";
            result3.textContent = letterGrade3;
            gradePoint3 = 1;
            gpaResult3 = unit3 * gradePoint3;
            break;

        default:
            letterGrade3 = "F"
            result3.textContent = letterGrade3;
            gradePoint3 = 0;
            gpaResult3 = unit3 * gradePoint3;
    }



    switch(true){
        case sum4 >= 70:
            letterGrade4 = "A";
            result4.textContent = letterGrade4;
            gradePoint4 = 5;
            gpaResult4 = unit4 * gradePoint4;
            break;

        case sum4 >= 60:
            letterGrade4 = "B";
            result4.textContent = letterGrade4;
            gradePoint4 = 4;
            gpaResult4 = unit4 * gradePoint4;
            break;

        case sum4 >= 50:
            letterGrade4 = "C";
            result4.textContent = letterGrade4;
            gradePoint4 = 3;
            gpaResult4 = unit4 * gradePoint4;
            break;

        case sum4 >= 45:
            letterGrade4 = "D";
            result4.textContent = letterGrade4;
            gradePoint4 = 2;
            gpaResult4 = unit4 * gradePoint4;
            break;

        case sum4>= 40:
            letterGrade4 = "E";
            result4.textContent = letterGrade4;
            gradePoint4 = 1;
            gpaResult4 = unit4 * gradePoint4;
            break;

        default:
            letterGrade4 = "F"
            result4.textContent = letterGrade4;
            gradePoint4 = 0;
            gpaResult4 = unit4 * gradePoint4;
    }



    switch(true){
        case sum5 >= 70:
            letterGrade5 = "A";
            result5.textContent = letterGrade5;
            gradePoint5 = 5;
            gpaResult5 = unit5 * gradePoint5;
            break;

        case sum5 >= 60:
            letterGrade5 = "B";
            result5.textContent = letterGrade5;
            gradePoint5 = 4;
            gpaResult5 = unit5 * gradePoint5;
            break;

        case sum5 >= 50:
            letterGrade5 = "C";
            result5.textContent = letterGrade5;
            gradePoint5 = 3;
            gpaResult5 = unit5 * gradePoint5;
            break;

        case sum5 >= 45:
            letterGrade5 = "D";
            result5.textContent = letterGrade5;
            gradePoint5 = 2;
            gpaResult5 = unit5 * gradePoint5;
            break;

        case sum5 >= 40:
            letterGrade5 = "E";
            result5.textContent = letterGrade5;
            gradePoint5 = 1;
            gpaResult5 = unit5 * gradePoint5;
            break;

        default:
            letterGrade5 = "F"
            result5.textContent = letterGrade5;
            gradePoint5 = 0;
            gpaResult5 = unit5 * gradePoint5;
    }



    switch(true){
        case sum6 >= 70:
            letterGrade6 = "A";
            result6.textContent = letterGrade6;
            gradePoint6 = 5;
            gpaResult6 = unit6 * gradePoint6;
            break;

        case sum6 >= 60:
            letterGrade6 = "B";
            result6.textContent = letterGrade6;
            gradePoint6 = 4;
            gpaResult6 = unit6 * gradePoint6;
            break;

        case sum6 >= 50:
            letterGrade6 = "C";
            result6.textContent = letterGrade6;
            gradePoint6 = 3;
            gpaResult6 = unit6 * gradePoint6;
            break;

        case sum6 >= 45:
            letterGrade6 = "D";
            result6.textContent = letterGrade6;
            gradePoint6 = 2;
            gpaResult6 = unit6 * gradePoint6;
            break;

        case sum6 >= 40:
            letterGrade6 = "E";
            result6.textContent = letterGrade6;
            gradePoint6 = 1;
            gpaResult6 = unit6 * gradePoint6;
            break;

        default:
            letterGrade6 = "F"
            result6.textContent = letterGrade6;
            gradePoint6 = 0;
            gpaResult6 = unit6 * gradePoint6;
    }



    switch(true){
        case sum7 >= 70:
            letterGrade7 = "A";
            result7.textContent = letterGrade7;
            gradePoint7 = 5;
            gpaResult7 = unit7 * gradePoint7;
            break;

        case sum7 >= 60:
            letterGrade7 = "B";
            result7.textContent = letterGrade7;
            gradePoint7 = 4;
            gpaResult7 = unit7 * gradePoint7;
            break;

        case sum7 >= 50:
            letterGrade7 = "C";
            result7.textContent = letterGrade7;
            gradePoint7 = 3;
            gpaResult7 = unit7 * gradePoint7;
            break;

        case sum7 >= 45:
            letterGrade7 = "D";
            result7.textContent = letterGrade7;
            gradePoint7 = 2;
            gpaResult7 = unit7 * gradePoint7;
            break;

        case sum7 >= 40:
            letterGrade7 = "E";
            result7.textContent = letterGrade7;
            gradePoint7 = 1;
            gpaResult7 = unit7 * gradePoint7;
            break;

        default:
            letterGrade7 = "F"
            result7.textContent = letterGrade7;
            gradePoint7 = 0;
            gpaResult7 = unit7 * gradePoint7;
    }



    switch(true){
        case sum8 >= 70:
            letterGrade8 = "A";
            result8.textContent = letterGrade8;
            gradePoint8 = 5;
            gpaResult8 = unit8 * gradePoint8;
            break;

        case sum8 >= 60:
            letterGrade8 = "B";
            result8.textContent = letterGrade8;
            gradePoint8 = 4;
            gpaResult8 = unit8 * gradePoint8;
            break;

        case sum8 >= 50:
            letterGrade8 = "C";
            result8.textContent = letterGrade8;
            gradePoint8 = 3;
            gpaResult8 = unit8 * gradePoint8;
            break;

        case sum8 >= 45:
            letterGrade8 = "D";
            result8.textContent = letterGrade8;
            gradePoint8 = 2;
            gpaResult8 = unit8 * gradePoint8;
            break;

        case sum8 >= 40:
            letterGrade8 = "E";
            result8.textContent = letterGrade8;
            gradePoint8 = 1;
            gpaResult8 = unit8 * gradePoint8;
            break;

        default:
            letterGrade8 = "F"
            result8.textContent = letterGrade8;
            gradePoint8 = 0;
            gpaResult8 = unit8 * gradePoint8;
    }



    switch(true){
        case sum9 >= 70:
            letterGrade9 = "A";
            result9.textContent = letterGrade9;
            gradePoint9 = 5;
            gpaResult9 = unit9 * gradePoint9;
            break;

        case sum9 >= 60:
            letterGrade9 = "B";
            result9.textContent = letterGrade9;
            gradePoint9 = 4;
            gpaResult9 = unit9 * gradePoint9;
            break;

        case sum9 >= 50:
            letterGrade9 = "C";
            result9.textContent = letterGrade9;
            gradePoint9 = 3;
            gpaResult9 = unit9 * gradePoint9;
            break;

        case sum9 >= 45:
            letterGrade9 = "D";
            result9.textContent = letterGrade9;
            gradePoint9 = 2;
            gpaResult9 = unit9 * gradePoint9;
            break;

        case sum9 >= 40:
            letterGrade9 = "E";
            result9.textContent = letterGrade9;
            gradePoint9 = 1;
            gpaResult9 = unit9 * gradePoint9;
            break;

        default:
            letterGrade9 = "F"
            result9.textContent = letterGrade9;
            gradePoint9 = 0;
            gpaResult9 = unit9 * gradePoint9;
    }



    switch(true){
        case sum10 >= 70:
            letterGrade10 = "A";
            result10.textContent = letterGrade10;
            gradePoint10 = 5;
            gpaResult10 = unit10 * gradePoint10;
            break;

        case sum10 >= 60:
            letterGrade10 = "B";
            result10.textContent = letterGrade10;
            gradePoint10 = 4;
            gpaResult10 = unit10 * gradePoint10;
            break;

        case sum10 >= 50:
            letterGrade10 = "C";
            result10.textContent = letterGrade10;
            gradePoint10 = 3;
            gpaResult10 = unit10 * gradePoint10;
            break;

        case sum10 >= 45:
            letterGrade10 = "D";
            result10.textContent = letterGrade10;
            gradePoint10 = 2;
            gpaResult10 = unit10 * gradePoint10;
            break;

        case sum10 >= 40:
            letterGrade10 = "E";
            result10.textContent = letterGrade10;
            gradePoint10 = 1;
            gpaResult10 = unit10 * gradePoint10;
            break;

        default:
            letterGrade10 = "F"
            result10.textContent = letterGrade10;
            gradePoint10 = 0;
            gpaResult10 = unit10 * gradePoint10;
    }




    gpaResult = (gpaResult1 + gpaResult2 + gpaResult3 + gpaResult4 + gpaResult5 + gpaResult6 + gpaResult7 + gpaResult8 + gpaResult9 + gpaResult10) / (unit1 + unit2 + unit3 + unit4 + unit5 + unit6 + unit7 + unit8 + unit9 + unit10);

    gpaResultSemiFinal = Math.floor(gpaResult * 100) / 100;

    gpaResultFinal.textContent = gpaResultSemiFinal;





    






}