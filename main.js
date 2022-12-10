let learnProg = false;
let audio = new Audio("ressource/mainSong.mp3");
audio.volume = 0.9;

const mainWord = document.getElementById("mainWord");

const playBtn = document.getElementById("playBtn");
const stopBtn = document.getElementById("stopBtn");

playBtn.addEventListener("click", () => {
  learnProg = true;
  console.log(learnProg);

  audio.play();
  mainWord.innerHTML = "👋 Hi, how are you ? 🔎";
  setTimeout(() => {
    mainWord.innerHTML = "🧐 Why have you chosen to apply to this company ❓";
  }, 6000);
  setTimeout(() => {
    mainWord.innerHTML = "😮 What are the reasons for your application 🧑‍💼";
  }, 15000);
  setTimeout(() => {
    mainWord.innerHTML = "🗣️ Can you talk about your past experiences 📎";
  }, 23000);
  setTimeout(() => {
    mainWord.innerHTML = "🥺 What do you think you can bring to the team ❓";
  }, 32000);
  setTimeout(() => {
    mainWord.innerHTML = "💪 Tell me about your hard skills 🤖";
  }, 40000);
  setTimeout(() => {
    mainWord.innerHTML = "🧑‍🎨 Tell me about your soft skills 👓";
  }, 47000);
  setTimeout(() => {
    mainWord.innerHTML = "🟢 What are your qualities and your flaws 🔴";
  }, 54000);
  setTimeout(() => {
    mainWord.innerHTML = "✈️ Do you mind travelling around 💯";
  }, 63000);
  setTimeout(() => {
    mainWord.innerHTML = "💸 How much do you ask as yearly salary 🤑";
  }, 69500);
  setTimeout(() => {
    mainWord.innerHTML = `<span class="hands">👇</span>Press the play button to start this program
    <span class="hands">👇</span>`;
  }, 78000);
});
stopBtn.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;

  mainWord.innerHTML = `<span class="hands">👇</span>Press the play button to start this program
  <span class="hands">👇</span>`;

  console.log(learnProg);
});
