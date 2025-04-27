/**
 * Đầu vào
 - tạo biến LuongNgay và gán giá trị 100000
 - tạo biến soNgayLam và cho phép user nhập vào

 * Xử lý
 - tạo biến TongTien và gán giá trị là 0
 - TongTien được cập nhật giá tri LuongNgay * soNgayLam

 * Đầu ra
 - In ra TongTien (loglog)
 */

let LuongNgay = 100000;
let soNgayLam = prompt("Vui long nhap so ngay lam: ");
let TongTien = 0;
TongTien = LuongNgay * soNgayLam;

console.log("Tong tien la: " + TongTien);
