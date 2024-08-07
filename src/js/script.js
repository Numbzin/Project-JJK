const descriptions = [
  "Maki Zenin é um dos principais personagens coadjuvantes da série e um dos principais protagonistas de sua prequela, Jujutsu High. Ela está atualmente no segundo ano na Tokyo Jujutsu High. Filha de Ogi Zenin e irmã gêmea mais velha de Mai Zenin, Maki nasceu na família Zenin.",
  "Satoru Gojo é um dos personagens principais do anime/mangá Jujutsu Kaisen. Ele é um feiticeiro extremamente poderoso, conhecido por sua personalidade descontraída e confiante. Gojo é um mestre em técnicas de Jujutsu, sendo um dos mais habilidosos e temidos dentro desse universo.",
  "Sukuna é uma figura lendária, cuja existência remonta a cerca de 1000 anos atrás, durante a Era de Ouro da Feitiçaria. Conhecido por sua aparência aterradora - com quatro olhos e quatro braços - e sua natureza impiedosa, ele era um demônio que não poupava nem mulheres, nem crianças em seus atos de crueldade.",
  "Yuji é uma pessoa justa que se preocupa muito não apenas com seus amigos, mas com qualquer pessoa que ele veja como pessoas com suas próprias vontades, apesar de quão profunda ou superficial seja sua conexão com eles. Ele se preocupa muito com o 'valor de uma vida' e, para esse fim, garantirá que os outros recebam uma 'morte justa'."
];

let timeoutID;

function typeWriter(text, element) {
  if (timeoutID) {
    clearTimeout(timeoutID);
  }
  element.innerHTML = "";
  let index = 0;

  function type() {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      timeoutID = setTimeout(type, 28);
    }
  }

  type();
}

document.addEventListener("DOMContentLoaded", () => {
  typeWriter(descriptions[0], document.querySelector(".char.selected .typewriter"));
});
