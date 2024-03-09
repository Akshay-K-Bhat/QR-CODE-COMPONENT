const btn = document.getElementById('submit-btn');
const URL = document.getElementById('url');
const qrcodeContainer = document.getElementById("qrcode");

const downloadBtn = document.getElementById('downloadBtn');

btn.addEventListener('click', generateQR);


downloadBtn.addEventListener("mouseout", function() {
  downloadBtn.style.opacity = "0"; // Set opacity back to 0 when not hovering
  downloadBtn.style.zIndex = "0"; // Set z-index back to 0 if needed
});


function generateQR(){

  if(qrcodeContainer.hasChildNodes()) {
    removeQRCode();
  }

  var qrcode = new QRCode(qrcodeContainer, {
    text: URL.value,
    width: 200,
    height: 200,
    padding: 10,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });

  downloadBtn.addEventListener("mouseover", function() {
    downloadBtn.style.opacity = "1"; // Set opacity to 1 when hovering
    downloadBtn.style.zIndex = "2";
    downloadBtn.textContent = "Download";
});

}

var qrCodeImage = document.querySelector('#qrcode > img');
console.log(qrCodeImage);
function removeQRCode(){
  const element = document.getElementById("qrcode");
  while (element.firstChild) {
  element.removeChild(element.firstChild);
}
}

function downloadImage() {
  var link = document.createElement('a');
  link.href =qrcodeContainer.childNodes[1].src;
  link.download = 'QRCode.jpg';
  document.body.appendChild(link);
  link.click(); 
  document.body.removeChild(link);
  downloadBtn.addEventListener("mouseover", function() {
    downloadBtn.style.opacity = "1"; 
    downloadBtn.style.zIndex = "2";
});

}


if(!qrcodeContainer.hasChildNodes()) {
  downloadBtn.addEventListener("click", function() {
    downloadBtn.textContent = "Please enter the URL and Generate QR code";
    downloadBtn.style.opacity = "1"; // Set opacity to 1 when hovering
    downloadBtn.style.zIndex = "2";
});
}
else {
  downloadBtn.addEventListener('click', downloadImage);
}

URL.addEventListener('focus', ()=>{
  downloadBtn.style.opacity = "0"; 
})
