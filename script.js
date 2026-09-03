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
  ['13', 'Anh Quang',   'Chương 7 · Đồ thị'],
  ['14', 'Anh Quang',   'Chương 7 · Đồ thị (tiếp)'],
  ['15', 'Hạnh Trang',  'Bài tập 04 · Đồ thị & ứng dụng thuật toán'],
  ['16', 'Vũ Hải',      'Ôn tập Cuối kỳ']
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
