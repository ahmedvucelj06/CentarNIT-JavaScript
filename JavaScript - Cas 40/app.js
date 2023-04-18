const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
const pitanje = document.querySelector('#pitanje');
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const AllAnsw = document.querySelectorAll('.answer');

brojac = 0;

function showQuestion(){
    pitanje.textContent = quizData[brojac].question; 
    a_text.textContent = quizData[brojac].a;
    b_text.textContent = quizData[brojac].b;
    c_text.textContent = quizData[brojac].c;
    d_text.textContent = quizData[brojac].d;

}

showQuestion();

function selectAnswer(){
    let answer;

    AllAnsw.forEach((el)=>{
        if(el.checked){
            answer = el.id;
        }
    })

    return answer;
}
