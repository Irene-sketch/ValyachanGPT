const pazhamchollukal = [
  const valyachanQuotes = [
  // Manglish-style funny future predictions
  "Ninakku oru premium tension varunnu, full subscription aanu.",
  "Valyachan parayunnu: Nee thudangiyal mathi, kazhinjal parayan onnum illa.",
  "Next week ninakku oru 'double meaning' dream varum. Don’t ask Valyachan the meaning!",
  "Job kittum... pakshe HR aanu villain.",
  "Love proposal varum, pakshe message unsend cheyyum.",
  "Laptop crash aavum, appol thanne nee realize cheyyum: backups jeevitham pole aanu.",
  "Your crush will notice you... as ‘that person who always likes reels.’",
  "Nee thudangunna project... Valyachan parayunnu: half way install pending aakum.",
  "Oru strange number ninnodu vilikkum... respond cheyyaruthu – it’s your fate calling.",
  "Nee coding thudangum... compiler parayum: ente ponnu, njan thirichu varilla.",
  
  // Famous Malayalam movie dialogues
  "“Ellarum chodikunnu... Enthanu Valyachante prediction?” — (Manichitrathazhu inspired)",
  "“Savari cheyyan pokunnu, pakshe evideyano pokunne Valyachanum ariyilla!” — (Kilukkam)",
  "“Namuk oru plan undu... fail aakumennu thonnunnu.” — (Classmates twist)",
  "“Sadhanam kayyil undo? Athenkil future kayyil aanu!”",
  "“Chila kalathil Valyachanum confused aakum, paksha confidence illa ennu parayaruthu.”",
  "“Ivideyokke style aanu kaananulla item... prediction okke oru guess mathram.”",
  "“Ninte future oru suspense thriller aanu – interval twist und.”",
  "“Valyachan oru simple aalu aanu, pakshe prediction kettal manassilakkaruthu.”",
  "“Kollam result! Nee thudangunnathinu munnil koodi Valyachan oru twist predict cheythu.”",
  "“You are under Valyachan's surveillance – full 'thirichariyam' mode aanu!”"
  "Ninte future oru loading circle aanallo... please wait cheyyu.",
  "Nee kalanju vecha tea kitti varum... 2045-il!",
  "Ninte love story next seasonil update aavum. Stay tuned!",
  "Next exam-il nee pass aakum... if Jupiter and Venus align.",
  "Oru thavana kooduthal Netflix kandittum nee millionaire aavilla.",
  "Nee oru job kittekkum, pinne resignum cheyyum... all in one week.",
  "Ninte next crush already nammalude database-il undu 😎",
  "Nee future-il flying auto-um try cheyyum... crash-um aavum.",
  "2028-il nee AI-od chaya order cheyyum... tea varum but sugar illa.",
  "Valyachan parayunnu – nee oru time traveler aanu but back button work aavilla.",
  "Nee jackpot win cheyyum... but ticket marakkum!",
  "Next year nee gym join cheyyum, but attendance Google Meet-il aanu.",
  "Nee oru dog koopidum, pinne dog thanne ninte charger kadikkum.",
  "Valyachan kandath – nee kalip movie-il hero aanallo... imaginary movie aanu.",
  "Ninte phone future-il cooking cheyyum. But call cheyyan patilla.",
  "2029-il nee Mars-il trip povaam. Return ticket illa da.",
  "Valyachan VR-il kandath – nee AI-kku complaint ezhuthum... 'entha aanu ee answer' ennu!",
  "Nee next year rich aakum... monopoly game-il.",
  "Nee oru app undakkum... download cheyyunnathu nee mathram aanu.",
  "Ninte boss robot aakum... pinne nee leave request cheyyum Siri-il.",
  "Nee lottery ticket edukum, pinne petti wash aavum.",
  "Nee dress order cheyyum, varunathu baby size!",
  "Ninte friend success aavum, nee like cheyyum... silently jealous aakum.",
  "Nee time travel cheyyum, pinne same mistakes repeat cheyyum.",
  "Nee vr goggles vach news nokkum, pinne reality miss aavum.",
  "Future-il nee oru smart dustbin develop cheyyum... ippo vechu research thudangikko.",
  "Next Onam-il nee banana leaf AI filter-il apply cheyyum.",
  "Valyachan parayunnu – nee friend request accept cheyyum 2047-il.",
  "Oru random day nee viral aakum... accidently muted status kondu.",
  "Ninte password 1234 aanu... hackers already laugh cheyyunnu.",
  "Job interview-il nee 'meow' ennu reply cheyyum... cat filter on aayi!",
  "Valyachan predict cheyyunnu – nee mundan idea pitch cheyyum, Shark Tank-il rejectum aavum.",
  "Future best friend robot aavum... battery 3 hours maathram.",
  "Oru future app – 'Malayali Mood Detector' – nee thanne develop cheyyum.",
  "ChatGPT-ne nee train cheyyum – Valyachan dialect-il!",
  "Nee polum ariyilla enna alayunna AI ninte meme profile follow cheyyunnu.",
  "2026-il nee oru useless project win cheyyum hackathon-il.",
  "Nee birthday-il cake auto-cut aakum – 'Clap to cut' technology!",
  "Next decade-il nee AI marriage planner aavum... client ella bots aanu.",
  "Oru reel post cheyyum... likes kittum 3, but all family members aanu.",
  "Valyachan parayunnu – nee coding cheyyum, bug undaakum, pinne AI-ne blame cheyyum."
];

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
