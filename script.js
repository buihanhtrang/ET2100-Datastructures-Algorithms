const materialsUrl = 'https://1drv.ms/f/c/0a4b3da92c65de21/IgASHxYxoCjiSLd6cNzsoobPAQvoCNnh0RNT7QP-Qji2Vvs?e=VUJMNt';
const slideUrl = 'https://onedrive.live.com/?id=%2Fpersonal%2F0a4b3da92c65de21%2FDocuments%2F20%2E%20TEACHING%2F00%2E%20%C4%90%E1%BA%A1i%20h%E1%BB%8Dc%2F6%2E%20C%E1%BA%A5u%20tr%C3%BAc%20d%E1%BB%AF%20li%E1%BB%87u%20v%C3%A0%20gi%E1%BA%A3i%20thu%E1%BA%ADt%2FSlide&listurl=%2Fpersonal%2F0a4b3da92c65de21%2FDocuments&viewid=adacd497%2Df535%2D488c%2D918e%2D19186836e3c4&ithint=folder&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy8wYTRiM2RhOTJjNjVkZTIxL0lnQVNIeFl4b0NqaVNMZDZjTnpzb29iUEFRdm9DTm5oMFJOVDdRUC1RamkyVnZzP2U9VlVKTU50&ga=1';

const schedule = [
  ['1',  'Vũ Hải',      'Giới thiệu môn học'],
  ['2',  'Vũ Hải',      'Chương 1 · Tổng quan CTDL & GT'],
  ['3',  'Hạnh Trang',  'Bài tập 01 · Hướng dẫn cài đặt và làm quen với VS Code'],
  ['4',  'Anh Quang',   'Chương 2 · Mảng và danh sách'],
  ['5',  'Anh Quang',   'Chương 2 · Mảng và danh sách (tiếp)'],
  ['6',  'Hạnh Trang',  'Bài tập 02 · Mảng, danh sách'],
  ['7',  'Vũ Hải',      'Chương 3 · Giải thuật đệ quy'],
  ['8',  'Vũ Hải',      'Chương 4 · Cấu trúc cây'],
  ['9',  'Hạnh Trang',  'Bài tập 03 · Cây, BST và duyệt cây'],
  ['10', 'Vũ Hải',      'Chương 5 · Sắp xếp'],
  ['11', 'Vũ Hải',      'Chương 6 · Tìm kiếm'],
  ['12', 'Hạnh Trang',  'Bài tập 03 · Sắp xếp & Tìm kiếm'],
  ['13', 'Anh Quang',   'Chương 7 · Bảng băm'],
  ['14', 'Anh Quang',   'Chương 7 · Đồ thị'],
  ['15', 'Hạnh Trang',  'Bài tập 04 · Đồ thị & ứng dụng thuật toán'],
  ['16', 'Vũ Hải',      'Ôn tập Cuối kỳ']
];

const slides = [
  ['Giới thiệu môn học', '0.Giới thiệu môn học.pdf'],
  ['Tuần 1 - C++ cơ bản', 'W1.CC++simple.pdf'],
  ['Tuần 1 - Chương 1: Tổng quan CTDL và GT', 'W1.Chuong1_TongQuanCTDLvaGT.pdf'],
  ['Tuần 2 - Chương 1: Tổng quan CTDL và GT', 'W2.Chuong1_TongQuanCTDLvaGT.pdf'],
  ['Tuần 3 - Chương 2: Mảng và danh sách', 'W3.Chuong2_Array_List.pdf'],
  ['Tuần 5 - Chương 2: Mảng và danh sách', 'W5.Chuong2_Array_List.pdf'],
  ['Tuần 7 - Chương 3: Giải thuật đệ quy', 'W7.Chuong3_GiaiThuatDeQuy.pdf'],
  ['Tuần 8-9 - Chương 4: Cấu trúc cây', 'W8-9.Chuong4_CauTrucCay.pdf'],
  ['Tuần 12 - Chương 5: Sắp xếp', 'W12.Chuong5_SapXep.pdf'],
  ['Tuần 13 - Chương 6: Tìm kiếm', 'W13.Chuong6_TimKiem.pdf'],
  ['Tuần 14 - Chương 7: Bảng băm', 'W14.Chuong7_BangBam.pdf'],
  ['Tuần 15 - Chương 7: Đồ thị', 'W15.Chuong7_DoThi.pdf'],
];

const practiceSlides = [
  ['Bài thực hành 00 - Cài đặt VS Code và C/C++', 'Prac0-SetupVSCodeandC.pdf'],
  // ['Bài thực hành 01 - Cài đặt VS Code và C/C++', 'Prac1-SetupVSCodeandC.pptx'],
];

const scheduleBody = document.querySelector('#schedule-body');
schedule.forEach(([week, lecturer, topic]) => {
  const row = document.createElement('tr');
  [week, lecturer, topic].forEach((value) => {
    const cell = document.createElement('td');
    cell.textContent = value;
    row.append(cell);
  });
  scheduleBody.append(row);
});

document.querySelectorAll('.course-info .materials-link').forEach((link) => {
  link.href = slideUrl;
  link.target = '_blank';
  link.rel = 'noreferrer';
});

const slideList = document.querySelector('#slide-list');
slides.forEach(([title, filename]) => {
  const item = document.createElement('li');
  const link = document.createElement('a');
  link.href = encodeURI(`output/pdf/${filename}`);
  link.target = '_blank';
  link.rel = 'noreferrer';
  link.textContent = `${title} (PDF) ↗`;
  item.append(link);
  slideList.append(item);
});

const practiceSlideList = document.querySelector('#practice-slide-list');
practiceSlides.forEach(([title, filename]) => {
  const item = document.createElement('li');
  const link = document.createElement('a');
  link.href = encodeURI(`slides/${filename}`);
  link.target = '_blank';
  link.rel = 'noreferrer';
  link.textContent = `${title} (PPTX) ↗`;
  item.append(link);
  practiceSlideList.append(item);
});
