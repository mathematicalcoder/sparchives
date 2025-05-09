// Specifics for EXAMPLE MOCK TEST 1 (m1)

/* DETAILS
- title:       The title of the mock test.
- description: The description of the mock test. HTML supported.
               Newlines won't be acknowledged unless specified by <br>.
- timeLimit:   The time limit of the mock test, in minutes.
               Must be a positive integer.
- pdfLink:     The link to the PDF file containing the questions.
*/

const details = {
  title: "Example Mock Test 1",
  description: 
  `This mock test will help you familiarize yourself 
  with the SPARC mock test system.`,
  timeLimit: 5,
  pdfLink: "https://cdn.glitch.global/53819453-3d57-487f-b6e1-86bfc5d1d91f/SPARC%20Example%20Mock%20Test%201.pdf?v=1733967702485"
}

/* QUESTIONS
- points:   The number of points alloted for the question.
- question: The question statement. HTML and LaTeX supported.
            State the answer format here if necessary.
            Newlines won't be acknowledged unless specified by <br>.
- answer:   The answer to the question. Case insensitive.
            Must be plaintext.
*/

const questions = [
  {
    points: 1,
    question:
    `Which of the following parts of speech describes a noun?<br>
    A. adverb &emsp; B. adjective &emsp; C. verb &emsp; D. pronoun`,
    answer: "B",
    type: "text"
  },
  {
    points: 1,
    question: 
    `What is the value of \\(1+2+3+4+5+6\\)?`,
    answer: "21",
    type: "number"
  },
  {
    points: 2,
    question: 
    `Fill in the blank: the __________ muscles in animals aid 
    voluntary movements.`,
    answer: "skeletal",
    type: "text"
  },
]