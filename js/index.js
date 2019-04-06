
// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

let saveButton = document.querySelector('button')
let zombie = document.querySelector("#foreground")

saveButton.onclick = () => alert('clicked')
