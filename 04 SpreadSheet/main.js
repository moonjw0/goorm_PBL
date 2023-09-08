function ClickEvent(event) {
    const heads = document.querySelectorAll('th'); // head 배경
    const clickedInput = event.target; // 클릭된 칸
    const id = clickedInput.id; // 칸 정보 ex) A1
    const row_focus = document.getElementById(id.slice(-1)); // A
    const col_focus = document.getElementById(id.slice(0, 1)); // 1

    heads.forEach(head => { // head 배경 복구
        head.style.backgroundColor = 'rgba(221, 221, 221)';
    })
    document.getElementById('cell').textContent = `Cell: ${id}`; // 셀 정보 출력
    row_focus.style.background = 'lightskyblue'; // 선택된 셀 표시
    col_focus.style.background = 'lightskyblue';
}

const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('click', ClickEvent);
})

const export_button = document.getElementById('export');
export_button.addEventListener('click', exportTableToExcel('table', 'test'));