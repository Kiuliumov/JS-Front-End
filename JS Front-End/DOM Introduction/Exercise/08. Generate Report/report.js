function generateReport() {
    const table = document.querySelector('table');
    const output = document.getElementById('output');
    const headers = Array.from(table.querySelectorAll('thead th'));
    const rows = table.querySelectorAll('tbody tr');

    const selectedColumns = headers
        .map((th, index) => {
            const checkbox = th.querySelector('input[type="checkbox"]');
            return checkbox && checkbox.checked
                ? { index: index, name: checkbox.name }
                : null;
        })
        .filter(col => col !== null);

    const result = [];

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const entry = {};

        selectedColumns.forEach(col => {
            const cell = cells[col.index];
            entry[col.name] = cell ? cell.textContent.trim() : '';
        });

        result.push(entry);
    });

    output.value = JSON.stringify(result, null, 2);
}
