/* Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır.
Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız.
Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır. */

const arguments = process.argv.slice(2);

const circleField = (r) => {
    const PI = Math.PI;
    const result = PI * Math.pow(r);
    console.log(result)
}

circleField(arguments[0] * 1);
