/**
 * Đầu vào
 - tạo biến sotien va cho phep user nhap
 - tạo biến tygia va chp phep user nhap

 * Xử lý
 - tạo biến sotienquydoi và gán giá trị là 0
 - sotienquydoi được cập nhật giá tri sotien * tygia

 * Đầu ra
 - In ra sotienquydoi (log)
 */

 let sotien = prompt("Vui long nhap so tien: ");
 let tygia = 26.02149
 let sotienquydoi = 0;
 sotienquydoi = sotien * tygia

 console.log("So tien quy doi la: " + sotienquydoi);



