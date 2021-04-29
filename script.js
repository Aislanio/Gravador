// Test browser support
window.SpeechRecognition = window.SpeechRecognition ||
window.webkitSpeechRecognition ||
null;

//caso não suporte esta API DE VOZ            
if (window.SpeechRecognition === null) {
    document.getElementById('unsupported').classList.remove('hidden');
    console.log(	"nao suporte")
}else {
    //......
}
//api
let recognizer = new window.SpeechRecognition();


let transcription = document.getElementById("transcription");

            //Para o reconhecedor de voz, não parar de ouvir, mesmo que tenha pausas no usuario
            recognizer.continuous = true;
recognizer.onresult = function(event){
                transcription.textContent = "";
                for (var i = event.resultIndex; i < event.results.length; i++) {
                    if(event.results[i].isFinal){
                        transcription.textContent += event.results[i][0].transcript;
                    }else{
                        transcription.textContent += event.results[i][0].transcript;
                    }
                }
            };

document.querySelector("#rect").addEventListener("click",function(){
                try {
                    recognizer.start();
                  } catch(ex) {
                    alert("error: "+ex.message);
                  }
});
document.querySelector("#copy").addEventListener("click",() =>{

 navigator.clipboard.writeText(transcription);
});