"use strict";

/**
* @property {HTMLElement} gameContainerEl - контейрер для шахматной доски
 */
const chess = {
  gameContainerEl: document.getElementById('game'),

  renderMap() { // Создали метод render.
    const rows = [0, 8, 7, 6, 5, 4, 3, 2, 1, 0]; // определили какие будут стоки. 0 - пустая клетка.
    const cols = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0]; // определили какие будут колонки. 0 - пустая клетка.
    
    for (let row = 0; row < rows.length; row++) { // пробежим по всем строкам
      const tr = document.createElement('tr'); // создали тэг <tr>
      this.gameContainerEl.appendChild(tr); // и добавили в контейнер gameContainerElement.

      for (let col = 0; col < cols.length; col++) { // пробежимся по всем колонкам и для каждой создадим свою ячейку.
        const td = document.createElement('td'); // создали тэг <td>
        tr.appendChild(td); // и добавили его в <tr>.

        if (rows[row] === 0 && cols[col] !== 0) { // Если у нас в строке 0, и колонка не равняется 0, тогда...
          td.innerHTML = cols[col];
        } else if (cols[col] === 0 && rows[row] !== 0) {
          td.innerHTML = rows[row];
        }

        if (this.isCellBlack(row, col)) {
          td.style.backgroundColor = 'black ';
        }
      }
    }
  },

  /**
   * Определяет является ли цвет ячейки черным.
   * @param {int} rowNum - номер в строке.
   * @param {int} colNum - номер в колонке.
   * @return {boolean} true, если ячейка черная, иначе - false.
   */
  isCellBlack(rowNum, colNum) {
    if (rowNum === 0 || rowNum === 9 || colNum === 0 || colNum === 9) {
      return false;
    }

    return (rowNum % 2 === 0 && colNum % 2 === 1) || (rowNum % 2 === 1 && colNum % 2 === 0);
  }
};

chess.renderMap();