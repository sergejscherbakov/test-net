
/* тестовый проект jscourses Киев 2015
 */
// функция: Лиза, юниты: Сергей!
// created at 19:40 6th of oct
=======
function divisibleBy(numbers, divisor){
    var arr = [];
    for(var i = 0; i < numbers.length; i++){

        if ((numbers[i]%divisor)===0){
            arr.push(numbers[i]);
        }
    }
    return arr;
}
/*
Test - pushed by Sgit for android
*/