// Select color input
const sizePicker = $('#sizePicker'),
      inputHeight = $('#inputHeight'),
      inputWidth = $('#inputWidth'),
// Select size input
      colorPicker = $('#colorPicker'),
      pixelCanvas = $('#pixelCanvas');
let color = 'black';

// When size is submitted by the user, call makeGrid()
function makeGrid(width, height) {
  let pase;
  for (let r = 0; r < width; r++) {
    pase += `<tr>`;
    for (var c = 0; c < height; c++) {
      pase += `<td class="pixel"></td>`
    }
    pase += `</tr>`;
  }
  pixelCanvas.append(pase);
}

// Deletes row
let deleteRow = () => {
  let rowSize = $('tr').length;
  while (rowSize--) {
    document.getElementById('pixelCanvas').deleteRow(-1);
  }
}

//Picks color
colorPicker.change(() => {
  color = colorPicker.val();
});


sizePicker.submit(function(e) {
  e.preventDefault();
  let row = inputHeight.val(),
    column = inputWidth.val(),
    trs = $('tr').length;
  deleteRow();
  makeGrid(row, column);
  $('td').click(function() {
    $(this).css('background-color', color);
  })
});
