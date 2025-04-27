/**
 * Đầu vào
 - tạo biến num_1
 - tạo biến num_2
 - tạo biến num_3
 - tạo biến num_4
 - tạo biến num_5

 * Xử lý
 - tạo biến dtb và gán giá trị là 0
 - dtb được cập nhật giá tri (num_1 + num_2 + num_3 + num_4 + num_5)/5

 * Đầu ra
 - In ra dtb (log)
 */

let num_1 = prompt("Vui long nhap so 1: ");
let num_2 = prompt("Vui long nhap so 2: ");
let num_3 = prompt("Vui long nhap so 3: ");
let num_4 = prompt("Vui long nhap so 4: ");
let num_5 = prompt("Vui long nhap so 5: ");

num_1 = Number(num_1);
num_2 = Number(num_2);
num_3 = Number(num_3);
num_4 = Number(num_4);
num_5 = Number(num_5);

let dtb = 0;
dtb = (num_1 + num_2 + num_3 + num_4 + num_5)/5

console.log("Diem trung binh la: " + dtb );

