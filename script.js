function exam(imtahanagirisbali,imtahanbali){
if(  imtahanbali<17  ){
    return "kesildin";
}
else if(imtahanagirisbali+imtahanbali>51 && imtahanagirisbali+imtahanbali<=60){
    return "E aldinniz";
}
else if (imtahanagirisbali+imtahanbali>60 && imtahanagirisbali+imtahanbali<=100){
    return "kecdiniz";
}
else{
    return "kesildiniz";
}}
let kesr = exam(40, 30)
console.log(kesr);
