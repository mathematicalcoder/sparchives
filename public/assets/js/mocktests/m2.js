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
    title: "Step Functions",
    description: 
    `This mock test will help you master the concept of step functions. Do not click Download PDF until further notice.`,
    timeLimit: 30,
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
      String.raw`For the next three items, consider $f(x)=\lfloor3x-5\rfloor$, $g(x)=2\lceil x+4\rceil$, and $h(x)=\operatorname{sgn}(2x)-4$.<br><br>Evaluate $f(5)-f(2.5)$.`,
      answer: "8",
      type: "text"
    },
    {
      points: 1,
      question: 
      `Evaluate $|g(-8.2)|$.`,
      answer: "8",
      type: "text"
    },
    {
      points: 1,
      question: 
      `What is the largest possible value of $h(x)$ for any real number $x$?`,
      answer: "-3",
      type: "text"
    },
  ]
