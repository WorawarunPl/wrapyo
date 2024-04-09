// เลือกปุ่มเปิด popup และกล่องข้อความ popup
const openBtn = document.getElementById('openBtn');
const popup = document.getElementById('popup');
// เลือกปุ่มปิด
const closeBtn = document.getElementById('closeBtn');
// เลือกปุ่มยืนยันการ logout
const confirmBtn = document.getElementById('confirmBtn');

// เพิ่ม Event Listener สำหรับปุ่มเปิด popup
openBtn.addEventListener('click', () => {
    popup.style.display = 'block'; // แสดงกล่องข้อความ popup เมื่อคลิก
});

// เพิ่ม Event Listener สำหรับปุ่มปิด
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none'; // ซ่อนกล่องข้อความ popup เมื่อคลิกปุ่มปิด
});

// เพิ่ม Event Listener สำหรับปุ่มยืนยัน
confirmBtn.addEventListener('click', () => {
    // ในที่นี้คุณสามารถเพิ่มโค้ดสำหรับการ logout หรือการดำเนินการอื่น ๆ ได้ตามต้องการ
    alert('คุณได้ออกจากระบบแล้ว');
    popup.style.display = 'none'; // ซ่อนกล่องข้อความ popup เมื่อคลิกปุ่มยืนยัน
});