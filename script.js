// script.js
const questions = [
    {
        question: "1. Какой Ваш любимый цвет?",
        type: "select",
        options: ["Синий", "Черный"]
    },
    {
        question: "2. Какое Ваше любимое число?",
        type: "select",
        options: ["13", "5"]
    },
    {
        question: "3. Какие цветы Вам нравятся? ",
        type: "select",
        options: ["Ромашки"]
    },
    {
        question: "4. Какое Ваше любимое аниме?",
        type: "select",
        options: ["NHK ni Youkoso!", "Colorful"]
    },
    {
        question: "5. Любишь ли ты меня?",
        type: "select",
        options: ["Да", "Да", "Да"]
    }
];

let currentQuestionIndex = 0;
const answers = [];

function showQuestion(index) {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';

    const question = questions[index];
    const label = document.createElement('label');
    label.textContent = question.question;
    questionContainer.appendChild(label);

    let inputElement;

    if (question.type === 'select') {
        inputElement = document.createElement('select');
        inputElement.name = `question${index + 1}`;
        question.options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option;
            optionElement.textContent = option;
            inputElement.appendChild(optionElement);
        });
    } else {
        inputElement = document.createElement('input');
        inputElement.type = question.type;
        inputElement.name = `question${index + 1}`;
    }

    questionContainer.appendChild(inputElement);
}

document.getElementById('next-button').addEventListener('click', () => {
    const inputElement = document.querySelector(`#question-container input, #question-container select`);
    if (inputElement) {
        answers[currentQuestionIndex] = inputElement.value; // Сохраняем ответ
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        showResults(); // Показать результаты
    }
});

function showResults() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';

    let result;
    if (answers.includes('Красный')) {
        result = {
            text: 'Соси, этого никто не должен видеть!',
            image: 'https://example.com/red.jpg'
        };
    } else {
        result = {
            text: 'Ты милый котенок по имени Алина 🖤',
            image: 'https://i.imgur.com/S7HZIYV.png'
        };
    }

    const resultText = document.createElement('h2');
    resultText.textContent = result.text;
    questionContainer.appendChild(resultText);

    if (result.image) {
        const resultImage = document.createElement('img');
        resultImage.src = result.image;
        resultImage.alt = 'Результат';
        questionContainer.appendChild(resultImage);
    }

    const restartButton = document.createElement('button');
    restartButton.textContent = 'Пройти тест снова';
    restartButton.addEventListener('click', () => {
        currentQuestionIndex = 0;
        answers.length = 0;
        showQuestion(currentQuestionIndex);
    });
    questionContainer.appendChild(restartButton);
}

// Показать первый вопрос
showQuestion(currentQuestionIndex);