const questionsArray = [
    {
        question: "What's my username?",
        anwsors: [
            { anwsor: "Mokatil_Gfx", correct: false },
            { anwsor: "Mokatil_Designer", correct: false },
            { anwsor: "Mokatil_Dev", correct: true },
            { anwsor: "Mokatil_Dzn", correct: false }
        ]
    },
    {
        question: "What's my name?",
        anwsors: [
            { anwsor: "Abderrahman", correct: true },
            { anwsor: "Ali", correct: false },
            { anwsor: "Mohamad", correct: false },
            { anwsor: "Alex", correct: false }
        ]
    },
    {
        question: "What's my age?",
        anwsors: [
            { anwsor: "19", correct: false },
            { anwsor: "15", correct: true },
            { anwsor: "22", correct: false },
            { anwsor: "17", correct: false }
        ]
    },
    {
        question: "What's my country?",
        anwsors: [
            { anwsor: "Italy", correct: false },
            { anwsor: "Algerie", correct: false },
            { anwsor: "France", correct: false },
            { anwsor: "Morocco", correct: true }
        ]
    },


]

const Start__Quiz = document.querySelector(".Start__Quiz")
const Question = document.querySelector("#Question")
const Anwsors = document.querySelectorAll(".Anwsors1")
const btnBack = document.querySelector(".Buttons button:first-child")
const btnNext = document.querySelector(".Buttons button:last-child")
const main = document.querySelector(".hide")
const Scor = document.querySelector(".Score")
const numberOfQuestions = document.querySelector(".numberOfQuestions")
const ScoreNumber = document.querySelector(".Score span")


btnNext.style.cursor = "not-allowed"
btnNext.setAttribute("disabled", "")

let IndexOfQuestion = 0
let Score = 0

btnBack.addEventListener("click",() => {
    
    IndexOfQuestion = 0
    Score = 0
    Anwsors.forEach(element =>{
        element.classList.remove("correct","incorrect")
        element.style.cssText = ``
    })
    main.classList.remove("active")
    Start__Quiz.classList.remove("active")
    Anwsors.forEach(element => {
        element.classList.remove("correct", "incorrect")
        element.style.cssText = `
        background-color: var(--Bg-Button);
        color: var(--Color-Button);
        border: 1px solid var(--Boder);
        color: var(--Color-Normal);
        
        `
        element.removeAttribute("disabled")
        element.addEventListener("mousemove", () => {
            element.style.cssText = `
            background-color: var(--Boder-Basic);
            border: 1px solid var(--Color-Basic);
            color: var(--Color-Normal);
            `
        })
        element.addEventListener("mouseleave", () => {
            element.style.cssText = `
            background-color: var(--Bg-Button);
            color: var(--Color-Button);
            border: 1px solid var(--Boder);
            color: var(--Color-Normal);
            `
        })
    })
})

function slesct(e) {
    if(IndexOfQuestion == questionsArray.length - 1){
        btnBack.style.opacity = "0%"
        btnBack.setAttribute("disabled","")
        btnBack.style.cursor = "default"
    }
    btnNext.style.cursor = "pointer"
    btnNext.removeAttribute("disabled")
    if (e.target.dataset.correct == "true") {
        Score += 1
        const correct = ` ✔`
        e.target.innerHTML += correct
        e.target.classList.add("correct")
        e.target.setAttribute("disabled", "")
        Anwsors.forEach(element => {
            element.addEventListener("mousemove", () => {
                element.style.cssText = `
                ackground-color: var(--Bg-Button);
                color: var(--Color-Button);
                border: 1px solid var(--Boder);
                color: var(--Color-Button);
                `
            })
            element.addEventListener("mouseleave", () => {
                element.style.cssText = `
                background-color: var(--Bg-Button);
                color: var(--Color-Button);
                border: 1px solid var(--Boder);
                color: var(--Color-Button);
                `
            })
            element.style.cssText = `
            background-color: var(--Bg-Button);
            border: 1px solid var(--Boder);
            color: var(--Color-Button);
            `
            element.style.cursor = "not-allowed"
            element.setAttribute("disabled", "")
        })
        e.target.style.cssText = `
            background-color: var(--Bg-correct);
            border: 1px solid var(--boder-correct);
            color: var(--Color-Normal);
        `
        e.target.style.cursor = "not-allowed"
    } else if (e.target.dataset.correct == "false") {
        Score += 0
        const incorrect = ` ✖`
        e.target.innerHTML += incorrect
        e.target.setAttribute("disabled", "")
        Anwsors.forEach(element => {
            element.addEventListener("mousemove", () => {
                element.style.cssText = `
                ackground-color: var(--Bg-Button);
                color: var(--Color-Button);
                border: 1px solid var(--Boder);
                color: var(--Color-Button);
                `
            })
            element.addEventListener("mouseleave", () => {
                element.style.cssText = `
                background-color: var(--Bg-Button);
                color: var(--Color-Button);
                border: 1px solid var(--Boder);
                color: var(--Color-Button);
                `
            })
            element.style.cssText = `
            background-color: var(--Bg-Button);
            border: 1px solid var(--Boder);
            color: var(--Color-Button);
            `
            element.style.cursor = "not-allowed"
            element.setAttribute("disabled", "")

        })
        
        const correctAaswor = Array.from(e.target.parentElement.children)
        correctAaswor.forEach(element => {
            if (element.dataset.correct == "true") {
                element.style.cssText = `
                    background-color: var(--Bg-correct);
                    border: 1px solid var(--boder-correct);
                    color: var(--Color-Normal);
                   
                    `
                element.textContent += ` ✔`
            }

        })
        e.target.style.cssText = `
            background-color: var(--Bg-incorrect);
            border: 1px solid var(--Boder-incorrect);
            color: var(--Color-Normal);
        `

    }

}

function showQuestion() {
    let AnwsorsNumber = 0
    if (IndexOfQuestion > questionsArray.length - 1) {
        main.classList.remove("active")
        Scor.classList.add("Active")
        ScoreNumber.textContent = Score
        numberOfQuestions.textContent = questionsArray.length
        return false
    }
    let Questions = questionsArray[IndexOfQuestion]
    Question.innerHTML = ""
    Question.textContent = Questions.question
    Anwsors.forEach(element => {
        element.innerHTML = ""
        element.textContent = Questions.anwsors[AnwsorsNumber].anwsor
        element.dataset.correct = Questions.anwsors[AnwsorsNumber].correct
        AnwsorsNumber++
        element.addEventListener("click", slesct)
    })
}

btnNext.addEventListener("click", () => {
    btnNext.style.cursor = "not-allowed"
    btnNext.setAttribute("disabled", "")
    IndexOfQuestion++
    showQuestion()
    if (IndexOfQuestion == questionsArray.length - 1) {
        btnNext.textContent = "Done!"

    }
    Anwsors.forEach(element => {
        element.classList.remove("correct", "incorrect")
        element.style.cssText = `
        background-color: var(--Bg-Button);
        color: var(--Color-Button);
        border: 1px solid var(--Boder);
        color: var(--Color-Normal);
        
        `
        element.removeAttribute("disabled")
        element.addEventListener("mousemove", () => {
            element.style.cssText = `
            background-color: var(--Boder-Basic);
            border: 1px solid var(--Color-Basic);
            color: var(--Color-Normal);
            `
        })
        element.addEventListener("mouseleave", () => {
            element.style.cssText = `
            background-color: var(--Bg-Button);
            color: var(--Color-Button);
            border: 1px solid var(--Boder);
            color: var(--Color-Normal);
            `
        })
    })

})

Start__Quiz.addEventListener("click", () => {
    if(IndexOfQuestion == 0){
        btnBack.textContent = "Quit quiz"
    }

    main.classList.add("active")
    Start__Quiz.classList.add("active")
    showQuestion()
    Anwsors.forEach(element => {
        element.addEventListener("mousemove", () => {
            element.style.cssText = `
            background-color: var(--Boder-Basic);
            border: 1px solid var(--Color-Basic);
            color: var(--Color-Normal);
            `
        })
        element.addEventListener("mouseleave", () => {
            element.style.cssText = `
            background-color: var(--Bg-Button);
            color: var(--Color-Button);
            border: 1px solid var(--Boder);
            color: var(--Color-Normal);
            `
        })
    })
})



