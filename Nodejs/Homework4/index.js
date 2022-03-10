`Node.js FS Modülü kullanarak CRUD işlemleri yapacağız.
1.employees.json dosyası oluşturalım ve
   içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
2.Bu veriyi okuyalım. (READ)
3.Bu veriyi güncelleyelim.
4.Dosyayı silelim.`

const fs = require('fs');

`employees.json dosyası oluşturalım ve
içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)`

fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf-8', (err) => {
    if (err) console.log(err);
    console.log('Json dosyası başarılı bir şekilde oluşturuldu')
})


    `Bu veriyi okuyalım. (READ)`

fs.readFile('employees.json', 'utf-8', (err, data) => {
    if (err) console.log(err);
    console.log(data)
    console.log('Json dosyası okundu')
})


    `Bu veriyi güncelleyelim.`

fs.appendFile('employees.json', '\n{"name": "Employee 2 Name", "salary": 3000}', 'utf-8', (err) => {
    if (err) console.log(err);
    console.log('Json dosyasına başarılı bir şekilde güncellendi')
})


    `Dosyayı silelim`

fs.unlink('employees.json', (err) => {
    if (err) console.log(err);
    console.log('Json dosyasına başarılı bir şekilde silindi')
})