module.exports = function getZerosCount(number, base) {

    let arrOfDividedBase = [];
    let flag ;
    let result = 0;


    for( let i = 2; i < base; i++){
        if( base % i === 0 ) {
            flag = true;
            break;
        } else {
            flag = false;
        }
    }

    if( !flag ){
        for( let i = base; i <= number; i*= base ){
            result += Math.floor( number / i);
        }
    } else {

        let residue = base;
        let baseOfPow = {};
        for (let i = 2; i <= base/2; i++) {
            while (residue % i === 0) {
                arrOfDividedBase.push(i);
                residue = residue/i;
                baseOfPow[i] = arrOfDividedBase.length;
            }

            arrOfDividedBase = [];
        }

        let maxPow = Math.max.apply(null, Object.keys( baseOfPow ));

        for (let i = maxPow; i <= number; i *= maxPow) {
            result += Math.floor(number/i);
        }

        result = result / baseOfPow[maxPow];
    }

    return Math.floor( result );
}
