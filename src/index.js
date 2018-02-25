module.exports = function getZerosCount(number, base) {

    let count = 1;
    let result;

    let recidue = number;
    let numberByBase = [];

    function divideN (rec, bs) {
        numberByBase.push( rec % bs );
        return (rec - rec % bs) / bs;
    }

    while (recidue > 0)
    {
        recidue = divideN( recidue, base);
    }

    numberByBase.push( recidue );
    result = +numberByBase.reverse().join('');
    //console.log(result);

    let num = result;
    let divider = 5;

    while ( result >= base )
    {
        result = (num - num % divider) / divider;
        divider = divider * 5;
        count += result;
    }

    if( result < 5 && result >= 2 ){
        count--;
    }

    //console.log( count );
    return( count );
}
