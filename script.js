
// ======================================
// OLYMPUS – DIE GÖTTER
// ======================================

const gods = [
  {
    name: "Zeus",
    symbol: "⚡",
    role: "Gott des Himmels und Herrscher der Götter",
    category: "himmel",
    group: "HIMMEL & MACHT",
    description: "Zeus ist der mächtigste der olympischen Götter. Er herrscht über Himmel, Blitz und Donner. Als König der Götter sorgt er für Ordnung und wacht über Recht und Gastfreundschaft. Sein bekanntestes Symbol ist der Blitz.",
    facts: ["Eltern: Kronos und Rhea", "Brüder: Poseidon und Hades", "Symbole: Blitz, Adler und Eiche"]
  },
  {
    name: "Hera",
    symbol: "♛",
    role: "Göttin der Ehe und Familie",
    category: "leben",
    group: "FAMILIE & SCHUTZ",
    description: "Hera ist die Königin der Götter und die Ehefrau des Zeus. Sie gilt als Beschützerin der Ehe und der Familie. In vielen Mythen spielt ihre Eifersucht auf Zeus' Beziehungen zu anderen eine wichtige Rolle.",
    facts: ["Eltern: Kronos und Rhea", "Ehemann: Zeus", "Symbole: Pfau, Krone und Granatapfel"]
  },
  {
    name: "Poseidon",
    symbol: "♆",
    role: "Gott des Meeres und der Erdbeben",
    category: "himmel",
    group: "MEER & NATUR",
    description: "Poseidon beherrscht die Meere und kann mit seinem Dreizack Stürme und Erdbeben auslösen. Seefahrer baten ihn um eine sichere Reise. Er ist einer der Brüder des Zeus.",
    facts: ["Eltern: Kronos und Rhea", "Brüder: Zeus und Hades", "Symbole: Dreizack, Pferd und Delfin"]
  },
  {
    name: "Demeter",
    symbol: "🌾",
    role: "Göttin des Getreides und der Landwirtschaft",
    category: "leben",
    group: "NATUR & ERNTE",
    description: "Demeter sorgt für das Wachstum der Pflanzen und die Fruchtbarkeit der Erde. Besonders bekannt ist ihre Geschichte mit ihrer Tochter Persephone. Ihr Schmerz über deren Abwesenheit wird in einem Mythos mit dem Wechsel der Jahreszeiten verbunden.",
    facts: ["Eltern: Kronos und Rhea", "Tochter: Persephone", "Symbole: Getreide, Fackel und Mohn"]
  },
  {
    name: "Athene",
    symbol: "🦉",
    role: "Göttin der Weisheit und Strategie",
    category: "leben",
    group: "WISSEN & KLUGHEIT",
    description: "Athene steht für Weisheit, kluge Entscheidungen, Handwerk und strategische Kriegsführung. Einer bekannten Sage nach entsprang sie vollständig gerüstet dem Kopf des Zeus. Sie ist die Schutzgöttin der Stadt Athen.",
    facts: ["Vater: Zeus", "Symbole: Eule, Olivenbaum und Helm", "Besonders verehrt in: Athen"]
  },
  {
    name: "Apollon",
    symbol: "☼",
    role: "Gott der Musik, Weissagung und des Lichts",
    category: "leben",
    group: "MUSIK & WEISSAGUNG",
    description: "Apollon ist unter anderem der Gott der Musik, der Weissagung, der Heilkunst und des Bogens. Sein berühmtes Orakel befand sich in Delphi. Er ist der Zwillingsbruder der Artemis.",
    facts: ["Eltern: Zeus und Leto", "Zwillingsschwester: Artemis", "Symbole: Leier, Lorbeer und Bogen"]
  },
  {
    name: "Artemis",
    symbol: "☾",
    role: "Göttin der Jagd und der Wildnis",
    category: "himmel",
    group: "JAGD & NATUR",
    description: "Artemis ist die Göttin der Jagd, der Wildnis und des Schutzes junger Lebewesen. Sie wird häufig mit Pfeil und Bogen dargestellt. Sie ist die Zwillingsschwester des Apollon.",
    facts: ["Eltern: Zeus und Leto", "Zwillingsbruder: Apollon", "Symbole: Bogen, Hirsch und Mond"]
  },
  {
    name: "Ares",
    symbol: "⚔",
    role: "Gott des Krieges",
    category: "macht",
    group: "KRIEG & KONFLIKT",
    description: "Ares verkörpert die wilde und zerstörerische Seite des Krieges. Er steht für Kampfeslust und Gewalt. Anders als Athene, die für Strategie steht, wird Ares oft mit dem Chaos einer Schlacht verbunden.",
    facts: ["Eltern: Zeus und Hera", "Schwester: Hebe", "Symbole: Speer, Helm und Schild"]
  },
  {
    name: "Aphrodite",
    symbol: "♡",
    role: "Göttin der Liebe und Schönheit",
    category: "leben",
    group: "LIEBE & SCHÖNHEIT",
    description: "Aphrodite ist die Göttin der Liebe, Schönheit und Anziehung. In einer bekannten Version ihrer Herkunft entstand sie aus dem Meeresschaum. Sie spielte eine wichtige Rolle in der Sage um den Trojanischen Krieg.",
    facts: ["Herkunft: je nach Mythos unterschiedlich", "Verbindung: Ares", "Symbole: Taube, Rose und Muschel"]
  },
  {
    name: "Hephaistos",
    symbol: "⚒",
    role: "Gott des Feuers und der Schmiedekunst",
    category: "macht",
    group: "HANDWERK & FEUER",
    description: "Hephaistos ist der göttliche Schmied. Er stellt Waffen, Rüstungen und kunstvolle Gegenstände für die Götter her. Ihm werden unter anderem die Waffen des Achilles zugeschrieben.",
    facts: ["Eltern: je nach Mythos Hera oder Hera und Zeus", "Ehefrau: in vielen Erzählungen Aphrodite", "Symbole: Hammer, Amboss und Zange"]
  },
  {
    name: "Hermes",
    symbol: "☤",
    role: "Götterbote und Gott der Reisenden",
    category: "leben",
    group: "REISEN & BOTSCHAFTEN",
    description: "Hermes überbringt Nachrichten zwischen Göttern und Menschen. Er ist auch der Gott der Reisenden, Händler und Diebe. Mit seinen geflügelten Sandalen kann er besonders schnell reisen.",
    facts: ["Eltern: Zeus und Maia", "Aufgabe: Götterbote", "Symbole: Flügelschuhe, Heroldsstab und Flügelhut"]
  },
  {
    name: "Dionysos",
    symbol: "🍇",
    role: "Gott des Weines und des Theaters",
    category: "leben",
    group: "FESTE & THEATER",
    description: "Dionysos ist der Gott des Weines, der Feste und des Theaters. Seine Kulte waren mit Musik, Tanz und besonderen Festen verbunden. Er ist der Sohn des Zeus und der sterblichen Semele.",
    facts: ["Eltern: Zeus und Semele", "Symbole: Weinrebe, Efeu und Thyrsosstab", "Besonders verbunden mit: Theater"]
  }
];

// ======================================
// GÖTTERKARTEN ERSTELLEN
// ======================================

const godGrid = document.getElementById("godGrid");

function showGods(filter = "alle") {
  godGrid.innerHTML = "";

  const filteredGods = gods.filter(god =>
    filter === "alle" || god.category === filter
  );

  filteredGods.forEach((god, index) => {
    const originalIndex = gods.indexOf(god);

    const card = document.createElement("button");
    card.className = "god-card";

    card.innerHTML = `
      <span class="card-number">${String(originalIndex + 1).padStart(2, "0")}</span>
      <div class="god-symbol">${god.symbol}</div>
      <h3>${god.name}</h3>
      <p>${god.role}</p>
    `;

    card.addEventListener("click", () => openGod(originalIndex));
    godGrid.appendChild(card);
  });
}

showGods();

// ======================================
// FILTER
// ======================================

document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(btn =>
      btn.classList.remove("active")
    );

    button.classList.add("active");
    showGods(button.dataset.filter);
  });
});

// ======================================
// GÖTTER-DETAILS
// ======================================

const modal = document.getElementById("godModal");

function openGod(index) {
  const god = gods[index];

  document.getElementById("modalCategory").textContent = god.group;
  document.getElementById("modalSymbol").textContent = god.symbol;
  document.getElementById("modalName").textContent = god.name;
  document.getElementById("modalRole").textContent = god.role;
  document.getElementById("modalDescription").textContent = god.description;

  const facts = document.getElementById("modalFacts");
  facts.innerHTML = "<strong>WISSENSWERTES</strong>";

  god.facts.forEach(fact => {
    const p = document.createElement("p");
    p.textContent = "✦ " + fact;
    facts.appendChild(p);
  });

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeGod() {
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("closeModal").addEventListener("click", closeGod);

modal.addEventListener("click", event => {
  if (event.target === modal) closeGod();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeGod();
});

// ======================================
// STAMMBAUM
// ======================================

document.querySelectorAll(".tree-node").forEach(node => {
  node.addEventListener("click", () => {
    document.querySelectorAll(".tree-node").forEach(item =>
      item.classList.remove("selected")
    );

    node.classList.add("selected");

    const info = document.getElementById("treeInfo");
    info.querySelector("span").textContent = node.textContent;
    info.querySelector("p").textContent = node.dataset.info;
  });
});

// ======================================
// MYTHEN AUFKLAPPEN
// ======================================

document.querySelectorAll(".myth-toggle").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.closest(".myth-item");
    item.classList.toggle("open");
  });
});

// ======================================
// QUIZ
// ======================================

const questions = [
  {
    question: "Wer ist der König der griechischen Götter?",
    answers: ["Poseidon", "Zeus", "Hades", "Ares"],
    correct: 1,
    explanation: "Zeus ist der Herrscher des Himmels und König der Götter."
  },
  {
    question: "Welches Tier ist besonders mit Athene verbunden?",
    answers: ["Adler", "Delfin", "Eule", "Pfau"],
    correct: 2,
    explanation: "Die Eule ist ein Symbol für Weisheit und Athene."
  },
  {
    question: "Wer herrscht über die Unterwelt?",
    answers: ["Apollon", "Hermes", "Hephaistos", "Hades"],
    correct: 3,
    explanation: "Hades ist der Herrscher der Unterwelt und Bruder des Zeus."
  },
  {
    question: "Welche Göttin ist die Mutter von Persephone?",
    answers: ["Hera", "Demeter", "Artemis", "Aphrodite"],
    correct: 1,
    explanation: "Demeter ist die Göttin des Getreides und die Mutter von Persephone."
  },
  {
    question: "Was brachte Prometheus den Menschen?",
    answers: ["Das Feuer", "Gold", "Ein Pferd", "Einen Dreizack"],
    correct: 0,
    explanation: "Prometheus brachte den Menschen in einer bekannten Sage das Feuer."
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionText = document.getElementById("questionText");
const answerList = document.getElementById("answerList");
const quizFeedback = document.getElementById("quizFeedback");
const nextQuestion = document.getElementById("nextQuestion");
const quizContent = document.getElementById("quizContent");
const quizResult = document.getElementById("quizResult");

function loadQuestion() {
  answered = false;

  const question = questions[currentQuestion];

  questionText.textContent = question.question;
  answerList.innerHTML = "";
  quizFeedback.textContent = "";
  nextQuestion.disabled = true;

  document.getElementById("questionCounter").textContent =
    `FRAGE ${currentQuestion + 1} VON ${questions.length}`;

  document.getElementById("progressFill").style.width =
    `${((currentQuestion + 1) / questions.length) * 100}%`;

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-option";
    button.textContent = answer;

    button.addEventListener("click", () => chooseAnswer(index));

    answerList.appendChild(button);
  });
}

function chooseAnswer(index) {
  if (answered) return;

  answered = true;

  const question = questions[currentQuestion];
  const buttons = answerList.querySelectorAll("button");

  buttons.forEach((button, i) => {
    button.disabled = true;

    if (i === question.correct) {
      button.classList.add("correct");
    }

    if (i === index && index !== question.correct) {
      button.classList.add("wrong");
    }
  });

  if (index === question.correct) {
    score++;
    quizFeedback.textContent = "✓ Richtig! " + question.explanation;
  } else {
    quizFeedback.textContent = "Nicht ganz! " + question.explanation;
  }

  nextQuestion.disabled = false;
  nextQuestion.textContent =
    currentQuestion === questions.length - 1
      ? "ERGEBNIS ANSEHEN →"
      : "WEITER →";
}

nextQuestion.addEventListener("click", () => {
  if (!answered) return;

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quizContent.classList.add("hidden");
  quizResult.classList.remove("hidden");

  document.getElementById("resultTitle").textContent =
    score === 5 ? "Ein wahrer Olympier!" :
    score >= 3 ? "Du kennst die Götterwelt!" :
    "Deine Reise hat gerade begonnen!";

  document.getElementById("resultText").textContent =
    `Du hast ${score} von ${questions.length} Fragen richtig beantwortet. ${
      score === 5
        ? "Perfekt – die Götter wären beeindruckt!"
        : "Erkunde die Website und versuche es danach nochmals."
    }`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;

  quizContent.classList.remove("hidden");
  quizResult.classList.add("hidden");

  loadQuestion();
}

document.getElementById("restartQuiz").addEventListener("click", restartQuiz);

loadQuestion();
