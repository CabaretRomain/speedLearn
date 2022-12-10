let toggle = false;
let audio = new Audio("ressource/mainSong.mp3");
audio.volume = 0.9;

const mainWord = document.getElementById("mainWord");

const playBtn = document.getElementById("playBtn");
const stopBtn = document.getElementById("stopBtn");

playBtn.addEventListener("click", () => {
  toggle = true;
  audio.play();
});

stopBtn.addEventListener("click", () => {
  toggle = false;

  audio.pause();
  audio.currentTime = 0;

  mainWord.innerHTML = `<span class="hands">👇</span>Press the play button to start this program
  <span class="hands">👇</span>`;
});

audio.ontimeupdate = function () {
  console.log(audio.currentTime);
  let timeZone = Math.trunc(audio.currentTime);
  if (toggle) {
    switch (timeZone) {
      case 78:
        mainWord.innerHTML = `<span class="hands">👇</span>Press the play button to start this program
      <span class="hands">👇</span>`;
      case 69:
        mainWord.innerHTML = "💸 How much do you ask as yearly salary 🤑";
        break;
      case 63:
        mainWord.innerHTML = "✈️ Do you mind travelling around 💯";
        break;
      case 54:
        mainWord.innerHTML = "🟢 What are your qualities and your flaws 🔴";
        break;
      case 47:
        mainWord.innerHTML = "🧑‍🎨 Tell me about your soft skills 👓";
        break;
      case 40:
        mainWord.innerHTML = "💪 Tell me about your hard skills 🤖";
        break;
      case 32:
        mainWord.innerHTML =
          "🥺 What do you think you can bring to the team ❓";
        break;
      case 23:
        mainWord.innerHTML = "🗣️ Can you talk about your past experiences 📎";
        break;
      case 15:
        mainWord.innerHTML = "😮 What are the reasons for your application 🧑‍💼";
        break;
      case 6:
        mainWord.innerHTML =
          "🧐 Why have you chosen to apply to this company ❓";
        break;
      case 0:
        mainWord.innerHTML = "👋 Hi, how are you ? 🔎";
        break;
    }
  }
};
