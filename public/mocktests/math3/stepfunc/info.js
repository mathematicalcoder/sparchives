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
    `This mock test will help you master the concept of step functions.`,
    timeLimit: 30,
    pdfLink: "https://mathematicalcoder.github.io/sparchives/public/assets/pdf/stepfunc_qns.pdf"
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
      String.raw`ASN: If $a$ is an integer and $b$ is a real number, then $\lfloor a+b\rfloor=a+\lfloor b\rfloor$. (Type <code>A</code> for always, <code>S</code> for sometimes, and <code>N</code> for never.)`,
      answer: "A",
      type: "text"
    },
    {
      points: 1,
      question:
      String.raw`For the next four items, consider $f(x)=\lfloor3x-5\rfloor$, $g(x)=2\lceil x+4\rceil$, and $h(x)=\operatorname{sgn}(2x)-4$.<br><br>Evaluate $f(5)-f(2.5)$.`,
      answer: "8",
      type: "text"
    },
    {
      points: 1,
      question: 
      `Evaluate $g(-8.2)$.`,
      answer: "-8",
      type: "text"
    },
    {
      points: 2,
      question: 
      `What is the largest possible value of $h(x)$ for any real number $x$?`,
      answer: "-3",
      type: "text"
    },
    {
      points: 2,
      question:
      String.raw`True or false: $2$ is in the range of $g(x)$. (Type <code>T</code> for true and <code>F</code> for false.)`,
      answer: "T",
      type: "text"
    },
    {
      points: 1,
      question:
      String.raw`State in interval notation the set of all possible values of $x$ where $\lfloor 2x+1\rfloor=5$. (Do not put any spaces in your answer. Write fractions in the form <code>a/b</code>. Use <code>inf</code> for infinity.)`,
      answer: "[2,5/2)",
      type: "text"
    },
    {
      points: 2,
      question:
      String.raw`For the next two items, refer to the graph of the <b>ceiling</b> function $p(x)$ below.
      <center><img height="400" src="https://cdn.glitch.global/53819453-3d57-487f-b6e1-86bfc5d1d91f/stepfuncgraph.png?v=1737518195574"></center>
      Suppose that $p(x)=a\lceil bx+h\rceil+k$. Find $a+b+h+k$.`,
      answer: "4",
      type: "text"
    },
    {
      points: 1,
      question:
      String.raw`Find the value of $p(50)+p\left(-\frac{25}{2}\right)$.`,
      answer: "-65",
      type: "text"
    },
  ]
