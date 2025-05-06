//A variable defined with the const keyword cannot be reassigned
const quizData = [{
    question: "What is the capital city of India?",
    a: "a. Delhi",
    b: "b. Mumbai",
    c: "c. Kolkata",
    d: "d. Chennai",
    correct: "a",

},

{
    question:  "Who was the first Prime Minister of India?",
    a: "a. Jawaharlal Nehru",
    b: "b. Indira Gandhi",
    c: "c. Mahatma Gandhi",
    d: "d. Rajendra Prasad",
    
    correct: "a",
},

{
    question:  "Which festival is known as the “Festival of Lights” in India?",
    a: "a. Durga Puja",
    b: "b. Holi",
    c: "c. Navratri",
    d: "d. Diwali",
    
    correct: "d",
},


{
    question: "What does HTML stand for?",
    a: "a. Hypertext Markup Language",
    b: "b. Cascading Style Sheet",
    c: "c. Jason Object Notation",
    d: "d. Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},


{
    question: "What does CSS stands for?",
    a: "a. Hypertext Markup Language",
    b: "b. Cascading Style Sheet",
    c: "c. Jason Object Notation",
    d: "d. Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];//it stores all the qusetion

let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd() ////question ===0 then quiz end 
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}///question increment with reset of options

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)///counting the correct answer

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}///checking the answer

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));

document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);//final score 






