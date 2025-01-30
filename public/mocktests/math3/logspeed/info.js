// Specifics for Step Functions

/* DETAILS
- title:       The title of the mock test.
- description: The description of the mock test. HTML supported.
               Newlines won't be acknowledged unless specified by <br>.
- timeLimit:   The time limit of the mock test, in minutes.
               Must be a positive integer.
- pdfLink:     The link to the PDF file containing the questions.
*/

const details = {
    title: "Basic Logarithm Speedrun",
    description: 
    `Evaluate the following logarithms quickly. Type fractions in the format <code>a/b</code> where <code>a</code> and <code>b</code> are relatively prime integers. Do not click Download PDF until further notice.`,
    timeLimit: 2,
    pdfLink: ""
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
        String.raw`$\log_2 128$`,
        answer: "7",
        type: "text"
    },
    {
        points: 1,
        question:
        String.raw`$\log_5\frac{1}{25}$`,
        answer: "-2",
        type: "text"
    },
    {
        points: 1,
        question:
        String.raw`$\log_3\sqrt3$`,
        answer: "1/2",
        type: "text"
    },
    {
        points: 1,
        question:
        String.raw`$\log 10000$`,
        answer: "4",
        type: "text"
    },
    {
        points: 1,
        question:
        String.raw`$\log_2 4^{30}$`,
        answer: "60",
        type: "text"
    },
    {
        points: 1,
        question:
        String.raw`$\ln e^{0.577215}$ ($\ln$ means <b>natural logarithm</b>, or $\log_e$)`,
        answer: "0.577215",
        type: "text"
    },
                
  ]
