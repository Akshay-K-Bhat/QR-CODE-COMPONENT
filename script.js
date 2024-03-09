const btn = document.getElementById('submit-btn');
const URL = document.getElementById('url');
const qrcodeContainer = document.getElementById("qrcode")
btn.addEventListener('click', generateQR);



function generateQR(){

  if(qrcodeContainer.hasChildNodes()) {
    removeQRCode();
  }

  var qrcode = new QRCode(qrcodeContainer, {
    text: URL.value,
    width: 200,
    height: 200,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });

}

function removeQRCode(){
  const element = document.getElementById("qrcode");
  while (element.firstChild) {
  element.removeChild(element.firstChild);
}
}