///if elsede
function yol(mesafe, zaman) {
    let ortasuret = mesafe/zaman;
    let yanacaq;
    if (ortasuret>0 && ortasuret<60) {
        yanacaq=6;
    }
    else if (ortasuret>60 && ortasuret<90) {
        yanacaq=9;
    }
    else if (ortasuret>90 && ortasuret<120) {
        yanacaq=8;
    }
    else{
        yanacaq=10;
    }
    let umyanacaq=(mesafe/100)*yanacaq;
    return `${mesafe} km məsafə yolu getmək üçün, sizin ortalama sürətiniz ${ortasuret}km/saat olmalıdır. Sizə lazım olacaq yanacaq miqdarı ${umyanacaq} litr, ortalama yanacaq sərfiyatı isə ${yanacaq}/100km olacaq. Yaxşı yol.`;
}
console.log(yol(400, 2));




////ternary
// function yol(mesafe, zaman) {
//     const ortasuret = mesafe / zaman;
//     const yanacaq = 
//         ortasuret> 0 && ortasuret<60 ? 6 :
//         ortasuret> 60 && ortasuret<90 ? 9 :
//         ortasuret> 90 && ortasuret<120 ? 8 :
//         10;
//     const umyanacaq=(mesafe/100)* yanacaq;
//     return `${mesafe} km məsafə yolu getmək üçün, sizin ortalama sürətiniz ${ortasuret} km/saat olmalıdır. Sizə lazım olacaq yanacaq miqdarı ${umyanacaq} litr, ortalama yanacaq sərfiyatı isə ${yanacaq}/100km olacaq. Yaxşı yol.`;
// }
// console.log(yol(130, 2));



////switch case 
// function yol(mesafe,zaman){
//     const ortasuret=mesafe/zaman;
//     let yanacaq;
//     switch (true){
//         case ortasuret>0 && ortasuret<60: yanacaq=6;
//             break;
//         case ortasuret>60 && ortasuret<90: yanacaq = 9;
//             break;
//         case ortasuret>90 && ortasuret<120: yanacaq=8;
//             break;
//         default: yanacaq=10;
//             break;
//     }
//     const umyanacaq=(mesafe/100)*yanacaq;
//     return `${mesafe} km məsafə yolu getmək üçün, sizin ortalama sürətiniz ${ortasuret} km/saat olmalıdır.Sizə lazım olacaq yanacaq miqdarı ${umyanacaq} litr, ortalama yanacaq sərfiyatı isə ${yanacaq}/100km olacaq. Yaxşı yol.`;
// }
// console.log(yol(170, 4));



