function generate(){
  var pubkey = document.getElementById("IndirizzoPubblico").value;
  var privkey = document.getElementById("ChiavePrivata").value;
  
  if(pubkey.length<10 || privkey.length<10){
      alert('Please insert a valid public key.');
      return;
  }
  var pubkey_qr = document.getElementById("IndirizzoPubblico_qr");
  pubkey_qr.innerHTML="";
  var privkey_qr = document.getElementById("ChiavePrivata_qr");
  privkey_qr.innerHTML="";
  //Genera codici QR
  new QRCode(pubkey_qr,{
      text:pubkey,
      width:100,
      height:100
  });

  new QRCode(privkey_qr,{
      text:privkey,
      width:128,
      height:128
  });
  //Sostituisci scritte
  document.getElementById("IndirizzoPubblico").innerHTML = pubkey;
  document.getElementById("IndirizzoPubblico_testo").innerHTML = pubkey;
  document.getElementById("ChiavePrivata").innerHTML = privkey;
  document.getElementById("ChiavePrivata_testo").innerHTML = privkey;
  $('#checkboxNascondiChiavePrivata').attr('checked', false); 
  // Nascondi private key
  $(document).ready(function () {
        $('#checkboxNascondiChiavePrivata').change(function () {
            if (!this.checked) {
            document.getElementById("ChiavePrivata_testo").innerHTML = privkey;
            }
            else {
            document.getElementById("ChiavePrivata_testo").innerHTML = "HIDDEN FOR SECURITY";
            }
        });
    });
}

