
const animals = [
  {
    name: "Roter Panda",
    category: "Säugetiere",
    label: "KLEINER WALDBEWOHNER",
    image: "https://images.unsplash.com/photo-1590691566903-4eecf2c5e7a1?auto=format&fit=crop&w=900&q=85",
    description: "Ein geschickter Kletterer aus den Wäldern des Himalayas.",
    details: "Der Rote Panda lebt in Bergwäldern des Himalayas und angrenzender Regionen. Er ernährt sich hauptsächlich von Bambus, frisst aber auch Früchte, Eier und kleine Tiere. Seine halb einziehbaren Krallen und sein langer Schwanz helfen ihm beim Klettern und Balancieren. Er ist übrigens nicht eng mit dem Grossen Panda verwandt.",
    fact: "Rote Pandas können mit ihren beweglichen Fussgelenken kopfüber an Baumstämmen hinunterklettern!"
  },
  {
    name: "Buckelwal",
    category: "Meeresbewohner",
    label: "RIESEN DER MEERE",
    image: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=900&q=85",
    description: "Ein riesiger Wanderer, der für seine Gesänge bekannt ist.",
    details: "Buckelwale sind Bartenwale. Statt Zähne besitzen sie Bartenplatten, mit denen sie kleine Beutetiere wie Krill und kleine Fische aus dem Wasser filtern. Viele Buckelwale unternehmen jedes Jahr weite Wanderungen zwischen Nahrungs- und Fortpflanzungsgebieten.",
    fact: "Buckelwale können komplexe Gesänge produzieren, die sich im Laufe der Zeit verändern."
  },
  {
    name: "Afrikanischer Elefant",
    category: "Säugetiere",
    label: "DIE GIGANTEN",
    image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=900&q=85",
    description: "Das grösste heute lebende Landtier.",
    details: "Afrikanische Elefanten leben in verschiedenen Lebensräumen Afrikas. Ihr Rüssel ist eine Kombination aus Nase und Oberlippe und dient zum Atmen, Riechen, Trinken und Greifen. Elefanten leben oft in sozialen Familiengruppen und kommunizieren auch mit tiefen Lauten, die Menschen teilweise kaum hören können.",
    fact: "Elefanten können tieffrequente Laute erzeugen, die sich über grosse Entfernungen ausbreiten."
  },
  {
    name: "Schneeleopard",
    category: "Säugetiere",
    label: "GEISTER DER BERGE",
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=900&q=85",
    description: "Eine Grosskatze, perfekt angepasst an kalte Gebirge.",
    details: "Schneeleoparden leben in den Hochgebirgen Zentralasiens. Ihr dichtes Fell schützt sie vor Kälte. Der lange Schwanz hilft beim Balancieren und kann beim Ruhen als zusätzliche Wärmequelle dienen. Ihre grossen Pfoten verteilen das Gewicht auf Schnee und Geröll.",
    fact: "Der Schwanz eines Schneeleoparden kann fast so lang wie sein Körper sein."
  },
  {
    name: "Schleiereule",
    category: "Vögel",
    label: "NACHTAKROBATEN",
    image: "https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=900&q=85",
    description: "Eine lautlose Jägerin mit aussergewöhnlichem Gehör.",
    details: "Schleiereulen sind weltweit in vielen Regionen verbreitet. Ihr herzförmiger Gesichtsschleier leitet Schall zu den Ohren. Die Ohren liegen leicht unterschiedlich hoch. Das hilft der Eule, Geräusche räumlich zu orten und Beute auch bei Dunkelheit zu finden.",
    fact: "Schleiereulen können Beutetiere anhand ihrer Geräusche orten, selbst wenn sie diese nicht sehen."
  },
  {
    name: "Oktopus",
    category: "Meeresbewohner",
    label: "DIE INTELLIGENTEN",
    image: "https://images.unsplash.com/photo-1545670723-196ed0954986?auto=format&fit=crop&w=900&q=85",
    description: "Ein Meister der Tarnung mit acht Armen.",
    details: "Oktopusse gehören zu den Kopffüssern. Sie besitzen acht Arme mit Saugnäpfen und ein sehr gut entwickeltes Nervensystem. Viele Arten können Farbe und Hautstruktur verändern, um sich zu tarnen oder Signale zu senden. Ihr Blut ist wegen eines kupferhaltigen Sauerstofftransportstoffs bläulich.",
    fact: "Oktopusse haben drei Herzen: Zwei pumpen Blut zu den Kiemen, eines in den Körper."
  },
  {
    name: "Tyrannosaurus rex",
    category: "Urzeittiere",
    label: "KÖNIG DER DINOSAURIER",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=85",
    description: "Einer der bekanntesten Raubdinosaurier der Kreidezeit.",
    details: "Tyrannosaurus rex lebte vor ungefähr 68 bis 66 Millionen Jahren in Nordamerika. Er hatte einen grossen Schädel, kräftige Hinterbeine und sehr kleine Vorderarme. Fossilien zeigen, dass er ein Fleischfresser war. Wie genau er jagte und sich ernährte, wird weiterhin erforscht.",
    fact: "Vögel sind die heute lebenden Nachfahren einer Gruppe gefiederter Dinosaurier."
  },
  {
    name: "Dodo",
    category: "Urzeittiere",
    label: "EINE VERLORENE ART",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=900&q=85",
    description: "Ein flugunfähiger Vogel, der auf Mauritius lebte.",
    details: "Der Dodo war ein flugunfähiger Vogel von der Insel Mauritius. Er gehörte zu den Taubenvögeln. Nachdem Menschen auf Mauritius ankamen, wurde sein Lebensraum verändert und eingeschleppte Tiere gefährdeten seine Eier und Jungtiere. Im späten 17. Jahrhundert starb die Art aus.",
    fact: "Der Dodo war tatsächlich mit heutigen Tauben verwandt."
  },
  {
    name: "Giraffe",
    category: "Säugetiere",
    label: "HOCH HINAUS",
    image: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=900&q=85",
    description: "Das höchste heute lebende Landtier.",
    details: "Giraffen leben in verschiedenen Landschaften Afrikas. Ihr langer Hals ermöglicht ihnen, Blätter hoch oben in Bäumen zu erreichen. Sie besitzen wie Menschen sieben Halswirbel – diese sind bei Giraffen allerdings stark verlängert. Ihr Herz und Kreislauf sind an die besondere Körpergrösse angepasst.",
    fact: "Obwohl der Hals so lang ist, haben Giraffen normalerweise ebenfalls nur sieben Halswirbel."
  }
];

const grid = document.getElementById("animalGrid");
const search = document.getElementById("search");
const modal = document.getElementById("animalModal");

let currentFilter = "Alle";

function renderAnimals() {
  const searchText = search.value.toLowerCase();

  const filtered = animals.filter(animal => {
    const matchesCategory =
      currentFilter === "Alle" || animal.category === currentFilter;

    const matchesSearch =
      animal.name.toLowerCase().includes(searchText) ||
      animal.description.toLowerCase().includes(searchText) ||
      animal.details.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });

  grid.innerHTML = "";

  if (filtered.length === 0) {
    grid.innerHTML = '<p class="empty-message">Keine Tiere gefunden. Versuch einen anderen Suchbegriff!</p>';
    return;
  }

  filtered.forEach(animal => {
    const card = document.createElement("article");
    card.className = "animal-card";

    card.innerHTML = `
      <img src="${animal.image}" alt="${animal.name}" loading="lazy">
      <div class="animal-info">
        <small>${animal.label}</small>
        <h3>${animal.name}</h3>
        <p>${animal.description}</p>
        <div class="read-more">MEHR ENTDECKEN ↗</div>
      </div>
    `;

    card.addEventListener("click", () => openAnimal(animal));
    grid.appendChild(card);
  });
}

function openAnimal(animal) {
  document.getElementById("modalImage").src = animal.image;
  document.getElementById("modalImage").alt = animal.name;
  document.getElementById("modalCategory").textContent = animal.category;
  document.getElementById("modalTitle").textContent = animal.name;
  document.getElementById("modalText").textContent = animal.details;
  document.getElementById("modalFact").textContent = "✦ WUSSTEST DU SCHON? " + animal.fact;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("closeModal").addEventListener("click", closeModal);

modal.addEventListener("click", event => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");
    currentFilter = button.dataset.filter;
    renderAnimals();
  });
});

search.addEventListener("input", renderAnimals);

renderAnimals();

// TITELGESCHICHTE
document.querySelector('[data-article="elefant"]').addEventListener("click", () => {
  openAnimal(animals.find(animal => animal.name === "Afrikanischer Elefant"));
});

// FAKTEN-ALARM
const facts = [
  "Ein Oktopus hat drei Herzen und blaues Blut.",
  "Kolibris können in der Luft rückwärts fliegen.",
  "Wale atmen Luft mit Lungen und müssen deshalb regelmässig auftauchen.",
  "Fledermäuse sind die einzigen Säugetiere, die wirklich aktiv fliegen können.",
  "Krokodile schlucken manchmal Steine. Diese werden Gastrolithen genannt.",
  "Die Zunge einer Giraffe kann ungefähr 45 Zentimeter lang werden.",
  "Der Wanderfalke erreicht im Sturzflug extrem hohe Geschwindigkeiten.",
  "Axolotl können bestimmte Körperteile regenerieren.",
  "Vögel stammen evolutionär von gefiederten Dinosauriern ab.",
  "Der Grönlandhai kann mehrere Jahrhunderte alt werden."
];

let lastFact = -1;

document.getElementById("newFact").addEventListener("click", () => {
  let nextFact;

  do {
    nextFact = Math.floor(Math.random() * facts.length);
  } while (nextFact === lastFact);

  lastFact = nextFact;

  const factText = document.getElementById("factText");
  factText.style.opacity = 0;

  setTimeout(() => {
    factText.textContent = facts[nextFact];
    factText.style.opacity = 1;
  }, 180);
});

// QUIZ
const questions = [
  {
    question: "Von welcher Tiergruppe stammen die heutigen Vögel ab?",
    answers: ["Säugetiere", "Gefiederte Dinosaurier", "Fische", "Amphibien"],
    correct: 1,
    explanation: "Richtig! Vögel entwickelten sich aus einer Gruppe gefiederter Dinosaurier."
  },
  {
    question: "Wie viele Herzen hat ein Oktopus?",
    answers: ["Eines", "Zwei", "Drei", "Vier"],
    correct: 2,
    explanation: "Genau! Zwei Herzen versorgen die Kiemen, eines den restlichen Körper."
  },
  {
    question: "Was hilft dem Schneeleoparden in kalten Gebirgen?",
    answers: ["Dünnes Fell", "Dichtes Fell und grosse Pfoten", "Flügel", "Schuppen"],
    correct: 1,
    explanation: "Richtig! Dichtes Fell schützt vor Kälte und grosse Pfoten helfen auf Schnee."
  },
  {
    question: "Was beschreibt Evolution?",
    answers: [
      "Das tägliche Wachstum eines Tieres",
      "Die Veränderung vererbbarer Merkmale über Generationen",
      "Den Wechsel des Lebensraums",
      "Den Winterschlaf"
    ],
    correct: 1,
    explanation: "Genau! Evolution beschreibt Veränderungen vererbbarer Merkmale in Populationen über Generationen."
  },
  {
    question: "Welches Tier ist mit dem Dodo verwandt?",
    answers: ["Taube", "Pinguin", "Adler", "Strauss"],
    correct: 0,
    explanation: "Richtig! Der Dodo gehörte zur Familie der Taubenvögel."
  }
];

let questionIndex = -1;
let points = 0;
let answered = false;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("nextQuestion");

function startOrNextQuestion() {
  if (questionIndex === questions.length - 1 && answered) {
    questionIndex = -1;
    points = 0;
    answered = false;
  }

  questionIndex++;
  answered = false;

  const question = questions[questionIndex];

  document.getElementById("questionNumber").textContent =
    `FRAGE ${questionIndex + 1} / ${questions.length}`;

  document.getElementById("score").textContent = `PUNKTE: ${points}`;
  questionElement.textContent = question.question;
  feedbackElement.textContent = "";
  answersElement.innerHTML = "";

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.textContent = answer;

    button.addEventListener("click", () => checkAnswer(index));
    answersElement.appendChild(button);
  });

  nextButton.textContent = "NÄCHSTE FRAGE →";
  nextButton.style.display = "none";
}

function checkAnswer(selected) {
  if (answered) return;

  answered = true;

  const question = questions[questionIndex];
  const buttons = answersElement.querySelectorAll(".answer");

  buttons.forEach((button, index) => {
    button.disabled = true;

    if (index === question.correct) {
      button.classList.add("correct");
    } else if (index === selected) {
      button.classList.add("wrong");
    }
  });

  if (selected === question.correct) {
    points++;
    feedbackElement.textContent = "✓ RICHTIG! " + question.explanation;
  } else {
    feedbackElement.textContent = "✗ Nicht ganz! " + question.explanation;
  }

  document.getElementById("score").textContent = `PUNKTE: ${points}`;

  if (questionIndex === questions.length - 1) {
    nextButton.textContent = "ERGEBNIS ANSEHEN";
  }

  nextButton.style.display = "inline-block";
}

nextButton.addEventListener("click", () => {
  if (questionIndex === -1 || (questionIndex === questions.length - 1 && answered)) {
    if (questionIndex === questions.length - 1 && answered) {
      questionElement.textContent = `GESCHAFFT! ${points} VON ${questions.length} PUNKTEN`;
      answersElement.innerHTML = "";
      feedbackElement.textContent =
        points === 5
          ? "Perfekt! Du bist ein echter Evolution-Profi! 🏆"
          : "Stark! Entdecke noch mehr im Magazin und versuche es erneut.";
      document.getElementById("questionNumber").textContent = "QUIZ BEENDET";
      nextButton.textContent = "NOCHMAL SPIELEN ↻";
      questionIndex = -1;
      answered = true;
      return;
    }

    startOrNextQuestion();
    return;
  }

  startOrNextQuestion();
});
