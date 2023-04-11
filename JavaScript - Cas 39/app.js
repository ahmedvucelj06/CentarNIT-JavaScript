function boldtext(){
    document.getElementById("textarea").style.fontWeight='bold';
}

function italictext(){
    document.getElementById("textarea").style.fontStyle='italic';
}


function fLefttext(){
    document.getElementById("textarea").style.textAlign='left';
}

function fCentertext(){
    document.getElementById("textarea").style.textAlign='center';
}

function fRighttext(){
    document.getElementById("textarea").style.textAlign='right';
}

function UpperCase(){
    document.getElementById("textarea").value=document.getElementById("textarea").value.toUpperCase();
}
function LowerCase(){
    document.getElementById("textarea").value=document.getElementById("textarea").value.toLowerCase();
}

function capitalize() {
    let textArea = document.getElementById("textarea");
    let text = textArea.value;
    let words = text.split(" ");
    let veliko = [];
   
    for (let i = 0; i < words.length; i++) {
      let word = words[i].toLowerCase();
      word = word.charAt(0).toUpperCase() + word.slice(1);
      veliko.push(word);
    }
   
    let tekst = veliko.join(" ");
    textArea.value = tekst;
  }

function cleartext(){
    document.getElementById("textarea").value="";
}
function saveAsWord() {
    const text = document.getElementById("textarea").value;
    const blob = new Blob([text], { type: "application/msword" });
    saveAs(blob, "myDocument.doc");
}