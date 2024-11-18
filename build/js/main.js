document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          entry.target.classList.remove("opacity-0");
        } else {
          entry.target.classList.add("opacity-0");
          entry.target.classList.remove("opacity-100");
        }
      });
    },
    { threshold: [0.3, 0.7] }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

function checkAnswers() {
  const answers = {
    question1: "Ryan Reynolds",
    question2: "Wade Wilson",
    question3: "Marvel",
    question4: "Katanas",
    question5: "2016",
  };

  let score = 0;
  for (let question in answers) {
    const selectedAnswer = document.querySelector(
      `input[name="${question}"]:checked`
    );
    if (selectedAnswer && selectedAnswer.value === answers[question]) {
      score++;
    }
  }

  const resultElement = document.getElementById("quiz-result");
  resultElement.innerText = `You scored ${score} out of 5!`;

  // Show the modal
  const modal = document.getElementById("result-modal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("result-modal");
  modal.style.display = "none";
}
window.onclick = function (event) {
  const modal = document.getElementById("result-modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const timelineItems = document.querySelectorAll(".timeline-item");
  timelineItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("visible");
    }, index * 300);
  });
});

const quotes = [
  { text: "Maximum effort!", source: "Deadpool" },
  {
    text: "I'm gonna do a superhero landing. Wait for it!",
    source: "Deadpool",
  },
  {
    text: "You're probably thinking, 'My boyfriend said this was a superhero movie.'",
    source: "Deadpool",
  },
  { text: "I'm touching myself tonight.", source: "Deadpool" },
  {
    text: "I love the smell of 372,844 corpses in the morning!",
    source: "Deadpool",
  },
  { text: "Daddy needs to express some rage.", source: "Deadpool" },
  {
    text: "I'm just a bad guy who gets paid to f**k up worse guys.",
    source: "Deadpool",
  },
  {
    text: "You don't need to be a superhero to get the girl. The right girl will bring out the hero in you.",
    source: "Deadpool",
  },
  {
    text: "I had another Liam Neeson nightmare. I kidnapped his daughter and he just wasn't having it.",
    source: "Deadpool",
  },
  {
    text: "I'm like a less angry Wolverine, with a better sense of humor.",
    source: "Deadpool",
  },
  {
    text: "I'm starting to think this is a bad idea. Eh, f**k it.",
    source: "Deadpool",
  },
  {
    text: "I'm not the hero here. I'm just the bad guy who's paid to f**k up the worse guys.",
    source: "Deadpool",
  },
  {
    text: "I'm a mutant who's got the power of regeneration and the power of annoying the s**t out of people.",
    source: "Deadpool",
  },
  {
    text: "I'm not a monster. I'm just ahead of the curve.",
    source: "Deadpool",
  },
  {
    text: "I'm not a hero. I'm a high-functioning sociopath with a gun.",
    source: "Deadpool",
  },
];

const quoteElement = document.getElementById("quote");
const sourceElement = document.getElementById("source");
const generateButton = document.getElementById("generate-quote");

generateButton.addEventListener("click", () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteElement.textContent = `"${randomQuote.text}"`;
  sourceElement.textContent = `- ${randomQuote.source}`;
});
