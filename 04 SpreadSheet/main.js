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

function ExportTable() {
    let Table = document.getElementById('table');
    let tempTable = document.createElement('table'); // 테이블 복사

    let Rows = Array.from(Table.rows).slice(1, 10);
    Rows.forEach(row => {
        let tempRow = row.cloneNode(false);
        let Cells = Array.from(row.cells).slice(1, 10);
        
        Cells.forEach(cell => { 
            let clonedCell = cell.cloneNode(false) // 셀 복사
            clonedCell.textContent = cell.firstChild.value ? cell.firstChild.value : " ";
            tempRow.appendChild(clonedCell); // 행에 셀 추가
        });
        tempTable.appendChild(tempRow); // 테이블에 행 추가
    });
    //내보내기
    let obj = XLSX.utils.table_to_book(tempTable);
    XLSX.writeFile(obj, 'test.xlsx');
}

// 셀 표시 & 내보내기
const inputs = document.querySelectorAll('input');
const export_button = document.getElementById('export');

inputs.forEach(input => {
    input.addEventListener('click', ClickEvent);
})
export_button.addEventListener('click', ExportTable);