let diemLy = Number(prompt("điểm Lý"))
let diemHoa = Number(prompt("điểm Hóa"))
let diemSinh = Number(prompt("điểm Sinh"))
const diemTB = (diemLy+diemHoa+diemHoa)/3;
document.write("điểm Trung Bình:  "+ diemTB.toFixed(2))