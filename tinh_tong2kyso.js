/**
 * Đầu vào
 - tạo biến sohangdonvi và cho phép user nhập vào
 - tạo biến sohangchuc và cho phép user nhập vào

 * Xử lý
 - tạo bien tong2kyso và gán giá trị là 0
 - tong2kyso cập nhật giá tri sohangdonvi + sohangchuc

 * Đầu ra
 - In ra tong2kyso (loglog)
 */

let so = prompt("Vui long nhap so co 2 chu so: ");
let sohangdonvi = so % 10; 
let sohangchuc = Math.floor(so / 10); 
let tong2kyso = sohangdonvi + sohangchuc;

console.log("Tong 2 ky so la : " + tong2kyso );

