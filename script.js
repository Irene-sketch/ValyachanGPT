const pazhamchollukal = [
  "പറ്റിയില്ലെങ്കിൽ പച്ചമാങ്ങ പറഞ്ഞ് രക്ഷപ്പെടണം.",
  "ആനയ്ക്ക് പോത്ത് വിളിച്ചിട്ട് കാര്യമില്ല.",
  "പുളിക്കായ് പോയിട്ട് പുളിയിലായിപ്പോയി.",
  "കുഴിയിൽ കുഴിച്ചവൻ തന്നെ വീഴും.",
  "കുഞ്ഞിനെ കുളിപ്പിക്കാനിറങ്ങിയവൻ കുളിയിലായിപ്പോയി.",
  "മന്ദനെ കാണുമ്പോൾ കൊലയും കള്ളവും പറയരുത്.",
  "പൂവിന്‍റെ മണത്തിൽ പല്ലിയെ കൂട്ടാൻ വേണ്ട.",
  "അഞ്ച് തവണ തെറ്റിയവന്‍റെ ആറ് വട്ടം വിശ്വാസം വേണ്ട.",
  "പാടില്ലെങ്കിലോ, പാടില്ലേന്ന് പാടണം!",
  "കല്ല് കുടിച്ച് ചെരിപ്പ് പൊട്ടി – ആരോടാണ് പരാതി?"
];

function getProverb() {
  const input = document.getElementById("userInput").value.trim();
  const responseBox = document.getElementById("responseBox");
  const responseText = document.getElementById("responseText");

  if (input === "") {
    responseText.innerText = "ചോദ്യമൊന്നുമില്ലേ മക്കളേ?";
    responseBox.classList.remove("hidden");
    return;
  }

  const randomIndex = Math.floor(Math.random() * pazhamchollukal.length);
  const response = pazhamchollukal[randomIndex];

  responseText.innerText = "👉 " + response;
  responseBox.classList.remove("hidden");
}
