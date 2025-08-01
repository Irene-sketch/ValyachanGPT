const responses = [
  "ശരി പറഞ്ഞതാണല്ലോ! 🔮",
  "ഇനി നിനക്ക് നല്ല ദിവസം വരും! 🌞",
  "അതിനുള്ള ഉത്തരമറിയാൻ വാല്യച്ചനോട് കൂടെ ഇരിക്കണം! 🧙‍♂️",
  "നിനക്ക് ഉടനെൊരു സപ്രൈസ് കാത്തിരിക്കുന്നു! 🎁",
  "ഞാൻ വിശ്വസിക്കുന്നു, നീ കരുതുന്നത് സത്യമായിരിക്കും! ✨",
  "ഇത് ഗൗരവമായി ആലോചിക്കേണ്ട വിഷയം ആണ്! 🤔",
  "നിന്റെ ഭാഗ്യനക്ഷത്രം ഇപ്പോൾ തിളങ്ങുന്നു! ⭐",
  "താൽക്കാലം കാറ്റിൽ വിട്ടുക! 💨",
  "Valyachan recommends: കുറച്ചു more pazhampori 🍌 first!",
  "നീ ചോദിച്ചത് cosmic-level ആണല്ലോ… 😮‍💨"
];

function sendMessage() {
  const userInput = document.getElementById("userInput").value.trim();
  const responseText = document.getElementById("responseText");

  if (userInput === "") {
    responseText.innerText = "ദയവായി ഒന്നും ചോദിക്കണേ! 🤭";
    return;
  }

  // Choose a random response
  const randomIndex = Math.floor(Math.random() * responses.length);
  const valyachanResponse = responses[randomIndex];

  // Show the response
  responseText.innerText = valyachanResponse;
}