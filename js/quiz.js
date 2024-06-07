const questions = [
    // Add 100 question objects with the format:
    // { question: "Question text", options: ["Option 1", "Option 2", "Option 3", "Option 4"], answer: "Option 1", solution: "Explanation text" }
    
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: "Paris",
            solution: "The capital of France is Paris."
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Venus"],
            answer: "Mars",
            solution: "Mars is known as the Red Planet because of its reddish appearance."
        },
        {
            question: "Who wrote 'Hamlet'?",
            options: ["Charles Dickens", "J.K. Rowling", "William Shakespeare", "Mark Twain"],
            answer: "William Shakespeare",
            solution: "'Hamlet' was written by William Shakespeare."
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            answer: "Pacific Ocean",
            solution: "The largest ocean on Earth is the Pacific Ocean."
        },
        {
            question: "What is the chemical symbol for water?",
            options: ["O2", "H2O", "CO2", "NaCl"],
            answer: "H2O",
            solution: "The chemical symbol for water is H2O."
        },
        
        {
            question: "What is the capital of Japan?",
            options: ["Tokyo", "Osaka", "Kyoto", "Nagoya"],
            answer: "Tokyo",
            solution: "The capital of Japan is Tokyo."
        },
        {
            question: "Which element has the atomic number 1?",
            options: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
            answer: "Hydrogen",
            solution: "The element with the atomic number 1 is Hydrogen."
        },
        {
            question: "What is the tallest mountain in the world?",
            options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
            answer: "Mount Everest",
            solution: "The tallest mountain in the world is Mount Everest."
        },
        {
            question: "What is the square root of 64?",
            options: ["6", "7", "8", "9"],
            answer: "8",
            solution: "The square root of 64 is 8."
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Claude Monet", "Leonardo da Vinci", "Pablo Picasso"],
            answer: "Leonardo da Vinci",
            solution: "The Mona Lisa was painted by Leonardo da Vinci."
        },
        // Add more questions here to reach 100 total
        {
            question: "Which planet is known for its rings?",
            options: ["Mars", "Earth", "Saturn", "Jupiter"],
            answer: "Saturn",
            solution: "Saturn is known for its prominent ring system."
        },
        {
            question: "What is the largest mammal in the world?",
            options: ["Elephant", "Whale Shark", "Blue Whale", "Giraffe"],
            answer: "Blue Whale",
            solution: "The largest mammal in the world is the Blue Whale."
        },
        {
            question: "Who is known as the Father of Computers?",
            options: ["Charles Babbage", "Alan Turing", "John von Neumann", "Thomas Edison"],
            answer: "Charles Babbage",
            solution: "Charles Babbage is known as the Father of Computers."
        },
        {
            question: "What is the hardest natural substance on Earth?",
            options: ["Gold", "Iron", "Diamond", "Platinum"],
            answer: "Diamond",
            solution: "Diamond is the hardest natural substance on Earth."
        },
        {
            question: "What year did the Titanic sink?",
            options: ["1912", "1922", "1932", "1942"],
            answer: "1912",
            solution: "The Titanic sank in the year 1912."
        },
        {
            question: "Which organ is responsible for pumping blood throughout the body?",
            options: ["Lungs", "Liver", "Heart", "Kidneys"],
            answer: "Heart",
            solution: "The heart is responsible for pumping blood throughout the body."
        },
        {
            question: "Who developed the theory of relativity?",
            options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
            answer: "Albert Einstein",
            solution: "Albert Einstein developed the theory of relativity."
        },
        {
            question: "What is the smallest prime number?",
            options: ["1", "2", "3", "5"],
            answer: "2",
            solution: "The smallest prime number is 2."
        },
        {
            question: "Which element is commonly used in batteries?",
            options: ["Hydrogen", "Lithium", "Carbon", "Oxygen"],
            answer: "Lithium",
            solution: "Lithium is commonly used in batteries."
        },
        {
            question: "Who was the first President of the United States?",
            options: ["Thomas Jefferson", "John Adams", "George Washington", "Abraham Lincoln"],
            answer: "George Washington",
            solution: "The first President of the United States was George Washington."
        },
        {
            question: "What is the boiling point of water in Celsius?",
            options: ["50°C", "75°C", "100°C", "150°C"],
            answer: "100°C",
            solution: "The boiling point of water is 100°C."
        },
        {
            question: "Which gas is most abundant in the Earth's atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            answer: "Nitrogen",
            solution: "The most abundant gas in the Earth's atmosphere is Nitrogen."
        },
        {
            question: "What is the capital of Canada?",
            options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
            answer: "Ottawa",
            solution: "The capital of Canada is Ottawa."
        },
        {
            question: "What is the largest continent on Earth?",
            options: ["Africa", "Asia", "Europe", "South America"],
            answer: "Asia",
            solution: "The largest continent on Earth is Asia."
        },
        {
            question: "Who is known as the 'Father of Geometry'?",
            options: ["Aristotle", "Euclid", "Pythagoras", "Archimedes"],
            answer: "Euclid",
            solution: "Euclid is known as the 'Father of Geometry'."
        },
        {
            question: "What is the longest river in the world?",
            options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
            answer: "Nile River",
            solution: "The longest river in the world is the Nile River."
        },
        {
            question: "Which planet is closest to the sun?",
            options: ["Earth", "Venus", "Mercury", "Mars"],
            answer: "Mercury",
            solution: "The planet closest to the sun is Mercury."
        },
        {
            question: "What is the speed of light?",
            options: ["300,000 km/s", "150,000 km/s", "400,000 km/s", "250,000 km/s"],
            answer: "300,000 km/s",
            solution: "The speed of light is approximately 300,000 kilometers per second."
        },
        {
            question: "Who discovered penicillin?",
            options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Gregor Mendel"],
            answer: "Alexander Fleming",
            solution: "Penicillin was discovered by Alexander Fleming."
        },
        {
            question: "What is the main ingredient in traditional Japanese miso soup?",
            options: ["Tofu", "Seaweed", "Miso paste", "Soy sauce"],
            answer: "Miso paste",
            solution: "The main ingredient in traditional Japanese miso soup is miso paste."
        },
        {
            question: "Which is the smallest country in the world?",
            options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
            answer: "Vatican City",
            solution: "The smallest country in the world is Vatican City."
        },
        {
            question: "What is the primary language spoken in Brazil?",
            options: ["Spanish", "Portuguese", "French", "English"],
            answer: "Portuguese",
            solution: "The primary language spoken in Brazil is Portuguese."
        },
        {
            question: "Which organelle is known as the powerhouse of the cell?",
            options: ["Nucleus", "Ribosome", "Mitochondrion", "Chloroplast"],
            answer: "Mitochondrion",
            solution: "The mitochondrion is known as the powerhouse of the cell."
        },
        {
            question: "What is the capital of Australia?",
            options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
            answer: "Canberra",
            solution: "The capital of Australia is Canberra."
        },
        {
            question: "Which chemical element has the symbol 'Au'?",
            options: ["Silver", "Argon", "Gold", "Aluminum"],
            answer: "Gold",
            solution: "The chemical element with the symbol 'Au' is Gold."
        },
        {
            question: "What is the largest planet in our solar system?",
            options: ["Earth", "Jupiter", "Saturn", "Neptune"],
            answer: "Jupiter",
            solution: "The largest planet in our solar system is Jupiter."
        },
        {
            question: "Which country is known as the Land of the Rising Sun?",
            options: ["China", "Japan", "Thailand", "India"],
            answer: "Japan",
            solution: "Japan is known as the Land of the Rising Sun."
        },
        {
            question: "Who painted the ceiling of the Sistine Chapel?",
            options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
            answer: "Michelangelo",
            solution: "The ceiling of the Sistine Chapel was painted by Michelangelo."
        },
        {
            question: "What is the smallest unit of matter?",
            options: ["Molecule", "Atom", "Proton", "Electron"],
            answer: "Atom",
            solution: "The smallest unit of matter is the atom."
        },
        {
            question: "Who wrote 'Pride and Prejudice'?",
            options: ["Charlotte Bronte", "Mary Shelley", "Jane Austen", "Emily Bronte"],
            answer: "Jane Austen",
            solution: "'Pride and Prejudice' was written by Jane Austen."
        },
        {
            question: "Which country is the largest producer of coffee?",
            options: ["Colombia", "Vietnam", "Brazil", "Ethiopia"],
            answer: "Brazil",
            solution: "The largest producer of coffee is Brazil."
        },
        {
            question: "What is the most widely spoken language in the world?",
            options: ["Spanish", "Mandarin Chinese", "English", "Hindi"],
            answer: "Mandarin Chinese",
            solution: "The most widely spoken language in the world is Mandarin Chinese."
        },
        {
            question: "What is the smallest bone in the human body?",
            options: ["Femur", "Stapes", "Humerus", "Tibia"],
            answer: "Stapes",
            solution: "The smallest bone in the human body is the stapes."
        },
        {
            question: "What is the chemical formula for salt?",
            options: ["H2O", "CO2", "NaCl", "O2"],
            answer: "NaCl",
            solution: "The chemical formula for salt is NaCl."
        },
        {
            question: "Who invented the telephone?",
            options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
            answer: "Alexander Graham Bell",
            solution: "The telephone was invented by Alexander Graham Bell."
        },
        {
            question: "Which planet is known as the Morning Star?",
            options: ["Venus", "Mars", "Jupiter", "Mercury"],
            answer: "Venus",
            solution: "Venus is known as the Morning Star."
        },
        {
            question: "Which river flows through the Grand Canyon?",
            options: ["Mississippi River", "Colorado River", "Amazon River", "Nile River"],
            answer: "Colorado River",
            solution: "The Colorado River flows through the Grand Canyon."
        },
        {
            question: "What is the main ingredient in guacamole?",
            options: ["Tomato", "Onion", "Avocado", "Lime"],
            answer: "Avocado",
            solution: "The main ingredient in guacamole is avocado."
        },
        {
            question: "Who was the first man to walk on the moon?",
            options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
            answer: "Neil Armstrong",
            solution: "The first man to walk on the moon was Neil Armstrong."
        },
        {
            question: "Which continent is known as the Dark Continent?",
            options: ["Asia", "Africa", "South America", "Australia"],
            answer: "Africa",
            solution: "Africa is known as the Dark Continent."
        },
        {
            question: "Which gas is essential for photosynthesis?",
            options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"],
            answer: "Carbon Dioxide",
            solution: "Carbon dioxide is essential for photosynthesis."
        },
        {
            question: "What is the capital of Italy?",
            options: ["Venice", "Florence", "Rome", "Milan"],
            answer: "Rome",
            solution: "The capital of Italy is Rome."
        },
        {
            question: "What is the currency of Japan?",
            options: ["Dollar", "Yen", "Euro", "Won"],
            answer: "Yen",
            solution: "The currency of Japan is Yen."
        },
        {
            question: "Which element is known as the 'King of the Elements'?",
            options: ["Hydrogen", "Oxygen", "Carbon", "Gold"],
            answer: "Carbon",
            solution: "Carbon is known as the 'King of the Elements' due to its central role in chemistry."
        },
        {
            question: "Who is the author of 'Harry Potter'?",
            options: ["J.R.R. Tolkien", "George R.R. Martin", "J.K. Rowling", "Stephen King"],
            answer: "J.K. Rowling",
            solution: "'Harry Potter' was written by J.K. Rowling."
        },
        {
            question: "What is the main ingredient in traditional sushi?",
            options: ["Bread", "Noodles", "Rice", "Potatoes"],
            answer: "Rice",
            solution: "The main ingredient in traditional sushi is rice."
        },
        {
            question: "Which planet is known as the Earth's Twin?",
            options: ["Mars", "Venus", "Jupiter", "Mercury"],
            answer: "Venus",
            solution: "Venus is known as the Earth's Twin due to its similar size and proximity."
        },
        {
            question: "What is the primary component of natural gas?",
            options: ["Butane", "Propane", "Methane", "Ethane"],
            answer: "Methane",
            solution: "The primary component of natural gas is methane."
        },
        {
            question: "Who wrote 'The Odyssey'?",
            options: ["Socrates", "Aristotle", "Homer", "Plato"],
            answer: "Homer",
            solution: "'The Odyssey' was written by Homer."
        },
        {
            question: "What is the tallest building in the world?",
            options: ["Shanghai Tower", "Abraj Al-Bait Clock Tower", "One World Trade Center", "Burj Khalifa"],
            answer: "Burj Khalifa",
            solution: "The tallest building in the world is the Burj Khalifa."
        },
        {
            question: "Which element is the most abundant in the Earth's crust?",
            options: ["Oxygen", "Silicon", "Aluminum", "Iron"],
            answer: "Oxygen",
            solution: "The most abundant element in the Earth's crust is oxygen."
        },
        {
            question: "Which is the longest bone in the human body?",
            options: ["Femur", "Humerus", "Tibia", "Fibula"],
            answer: "Femur",
            solution: "The longest bone in the human body is the femur."
        },
        {
            question: "What is the primary function of the roots of a plant?",
            options: ["Photosynthesis", "Reproduction", "Anchoring and absorbing water", "Producing flowers"],
            answer: "Anchoring and absorbing water",
            solution: "The primary function of the roots of a plant is anchoring and absorbing water."
        },
        {
            question: "What is the largest animal on Earth?",
            options: ["African Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
            answer: "Blue Whale",
            solution: "The largest animal on Earth is the Blue Whale."
        },
        {
            question: "Which metal is liquid at room temperature?",
            options: ["Iron", "Mercury", "Gold", "Silver"],
            answer: "Mercury",
            solution: "Mercury is the metal that is liquid at room temperature."
        },
        {
            question: "What is the largest desert in the world?",
            options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctic Desert"],
            answer: "Antarctic Desert",
            solution: "The largest desert in the world is the Antarctic Desert."
        },
        {
            question: "What is the process by which plants make their food?",
            options: ["Respiration", "Photosynthesis", "Transpiration", "Germination"],
            answer: "Photosynthesis",
            solution: "Plants make their food through the process of photosynthesis."
        },
        {
            question: "Who was the first woman to win a Nobel Prize?",
            options: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Florence Nightingale"],
            answer: "Marie Curie",
            solution: "The first woman to win a Nobel Prize was Marie Curie."
        },
        {
            question: "Which country gifted the Statue of Liberty to the United States?",
            options: ["France", "Spain", "Italy", "Germany"],
            answer: "France",
            solution: "The Statue of Liberty was gifted to the United States by France."
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Au", "Ag", "Pb", "Fe"],
            answer: "Au",
            solution: "The chemical symbol for gold is Au."
        },
        {
            question: "What is the main function of red blood cells?",
            options: ["Fight infections", "Transport oxygen", "Clot blood", "Produce hormones"],
            answer: "Transport oxygen",
            solution: "The main function of red blood cells is to transport oxygen."
        },
        {
            question: "What is the capital of Russia?",
            options: ["Saint Petersburg", "Novosibirsk", "Moscow", "Yekaterinburg"],
            answer: "Moscow",
            solution: "The capital of Russia is Moscow."
        },
        {
            question: "What is the most common gas in the Earth's atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"],
            answer: "Nitrogen",
            solution: "The most common gas in the Earth's atmosphere is nitrogen."
        },
        {
            question: "Who wrote the play 'Macbeth'?",
            options: ["William Shakespeare", "Charles Dickens", "George Orwell", "Jane Austen"],
            answer: "William Shakespeare",
            solution: "'Macbeth' was written by William Shakespeare."
        },
        {
            question: "What is the primary source of energy for the Earth?",
            options: ["Wind", "Water", "Sun", "Geothermal"],
            answer: "Sun",
            solution: "The primary source of energy for the Earth is the Sun."
        },
        {
            question: "What is the capital of Germany?",
            options: ["Munich", "Frankfurt", "Berlin", "Hamburg"],
            answer: "Berlin",
            solution: "The capital of Germany is Berlin."
        },
        {
            question: "What is the boiling point of water in Fahrenheit?",
            options: ["100°F", "150°F", "200°F", "212°F"],
            answer: "212°F",
            solution: "The boiling point of water is 212°F."
        },
        {
            question: "Who is known as the 'Father of Medicine'?",
            options: ["Hippocrates", "Aristotle", "Galen", "Socrates"],
            answer: "Hippocrates",
            solution: "Hippocrates is known as the 'Father of Medicine'."
        }
];
   

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let totalTime = 0;
let questionStartTime;
let totalTimeForRightAnswers = 0;
let totalTimeForWrongAnswers = 0;
let totalRightAnswers = 0;
let totalWrongAnswers = 0;
let candidateName = '';

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('startQuiz').addEventListener('click', startQuiz);
    document.getElementById('submit').addEventListener('click', showResults);
    document.getElementById('next').addEventListener('click', showNextQuestion);
    document.getElementById('prev').addEventListener('click', showPreviousQuestion);
});

function shuffleQuestions() {
    shuffledQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 20);
}

function startQuiz() {
    candidateName = document.getElementById('candidateName').value.trim();
    if (!candidateName || !/^[A-Za-z]/.test(candidateName)) {
        alert('Please enter your name (Max 10 alphabets)');
        return;
    }

    document.querySelector('.start-container').style.display = 'none';
    document.querySelector('.quiz-container').style.display = 'block';
    
    shuffleQuestions();
    currentQuestionIndex = 0;
    score = 0;
    totalTime = 0;
    totalTimeForRightAnswers = 0;
    totalTimeForWrongAnswers = 0;
    totalRightAnswers = 0;
    totalWrongAnswers = 0;
    questionStartTime = new Date();
    updateTimer();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    timer = setInterval(updateTimer, 1000); // 1 second interval for the timer
    setTimeout(showResults, 10 * 60 * 1000); // 10 minutes timer
}

function updateTimer() {
    const now = new Date();
    const elapsed = Math.floor((now - questionStartTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    document.getElementById('timer').textContent = `Time: ${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function showQuestion(question) {
    const optionLabels = ['a', 'b', 'c', 'd'];
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = `
        <div class="question">Question ${currentQuestionIndex + 1}: ${question.question}</div>
        <ul class="options">
            ${question.options.map((option, i) => `
                <li>
                    <label>
                        <input type="radio" name="question${currentQuestionIndex}" value="${option}" ${question.selectedOption === option ? 'checked' : ''}>
                        ${optionLabels[i]}. ${option}
                    </label>
                </li>`).join('')}
        </ul>
    `;

    const options = document.querySelectorAll(`input[name="question${currentQuestionIndex}"]`);
    options.forEach(option => option.addEventListener('change', saveOption));

    questionStartTime = new Date();
}

function saveOption(event) {
    const selectedOption = event.target.value;
    shuffledQuestions[currentQuestionIndex].selectedOption = selectedOption;
}

function showNextQuestion() {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
        saveTimeForCurrentQuestion();
        currentQuestionIndex++;
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    }
}

function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        saveTimeForCurrentQuestion();
        currentQuestionIndex--;
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    }
}

function saveTimeForCurrentQuestion() {
    const now = new Date();
    const elapsed = (now - questionStartTime) / 1000;
    const question = shuffledQuestions[currentQuestionIndex];
    question.timeTaken = elapsed;
    totalTime += elapsed;

    const userAnswer = question.selectedOption;
    if (userAnswer) {
        if (userAnswer === question.answer) {
            totalTimeForRightAnswers += elapsed;
        } else {
            totalTimeForWrongAnswers += elapsed;
        }
    }
}

function showResults() {
    clearInterval(timer);
    saveTimeForCurrentQuestion(); // Save time for the last question

    document.querySelector('.quiz-container').style.display = 'none';
    const resultsContainer = document.getElementById('results');
    resultsContainer.style.display = 'block';
    
    const optionLabels = ['a', 'b', 'c', 'd'];
    
    let totalAttemptedQuestions = 0;
    let totalUnattemptedQuestions = 0;

    shuffledQuestions.forEach((question, index) => {
        const userAnswer = question.selectedOption;
        const isCorrect = userAnswer && userAnswer === question.answer;
        const isUnanswered = !userAnswer;

        if (isCorrect) {
            score += 1;
            totalRightAnswers++;
        } else if (!isUnanswered) {
            score -= 0.25;
            totalWrongAnswers++;
        }

        if (isUnanswered) {
            totalUnattemptedQuestions++;
        } else {
            totalAttemptedQuestions++;
        }

        resultsContainer.innerHTML += `
            <div class="question">
                Question ${index + 1}: ${question.question}
                <div class="mark ${isCorrect ? 'correct' : isUnanswered ? 'unanswered' : 'incorrect'}">
                    ${isCorrect ? 'Right +1' : isUnanswered ? 'Not answered 0' : 'Wrong -0.25'}
                </div>
                ${question.options.map((option, i) => `
                    <div class="option ${option === question.answer ? 'correct' : (option === userAnswer ? 'incorrect' : '')}">
                        ${optionLabels[i]}. ${option}
                    </div>
                `).join('')}
                <div class="solution">
                    <b>Correct answer:</b> ${question.answer} <br>
                    <b>Solution:</b> ${question.solution} <br>
                    <b>Time taken:</b> ${Math.floor(question.timeTaken)} seconds
                </div>
            </div>
            <hr>
        `;
    });

    resultsContainer.innerHTML += `
        <div class="summary">
            <div class="score">Your score: ${score}</div>
            <div>Candidate Name: ${candidateName}</div>
            <div>Total time taken: ${Math.floor(totalTime)} seconds</div>
            <div>Total time for right answers: ${Math.floor(totalTimeForRightAnswers)} seconds</div>
            <div>Total time for wrong answers: ${Math.floor(totalTimeForWrongAnswers)} seconds</div>
            <div>Total attempted questions: ${totalAttemptedQuestions}</div>
            <div>Total unattempted questions: ${totalUnattemptedQuestions}</div>
            <div>Total right answers: ${totalRightAnswers}</div>
            <div>Total wrong answers: ${totalWrongAnswers}</div>
        </div>
    `;
}