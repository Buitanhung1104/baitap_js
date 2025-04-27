/**
 * Đầu vào
 - tạo biến chieudai va cho phep user nhap
 - tạo biến chieurong va chp phep user nhap

 * Xử lý
 - tạo biến chuvi và gán giá trị là 0
 - chuvi được cập nhật giá tri (chieudai + chieurong)*2
 - tạo biến dientich và gán giá trị là 0
 - dientich được cập nhật giá tri chieudai * chieurong


 * Đầu ra
 - In ra chuvi (log)
 - In ra dientich (log)
 */

//  Dien tich
let chieudai = prompt("Vui long nhap kich thuoc chieudai: ");
let chieurong = prompt("Vui long nhap kich thuoc chieurong: ");
let dientich = 0;
dientich = chieudai * chieurong;

console.log("Dien tich la: " + dientich);

//  chu vi 
chieudai = Number(chieudai);
chieurong = Number(chieurong);

let chuvi = 0;
chuvi = (chieudai + chieurong) * 2;

console.log("chu vi la: " + chuvi);
