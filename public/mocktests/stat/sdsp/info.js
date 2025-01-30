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
    title: "Sampling Distribution of the Sample Proportion",
    description: 
    `This mock test will help you master the concept of the sampling distribution of the sample proportion.
    Use proper notation when answering probability questions (e.g. <code>P(X>=3.5000)</code> or <code>P(-2.7183<=X<=3.1415)</code>).
    If there are two values in the inequality, the lower one must always go first.
    Express probabilities as percentages with four decimal places. Express other values (even those in notation) with four decimal places.
    Do NOT use spaces anywhere. An example answer would be <code>P(-2.7183<=X<=3.1415)=0.5772</code>.
    Do not click Download PDF until further notice.`,
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
        String.raw`The SPARCompute company manufactures laptops specialized in computational intelligence.
        The company manufactured 2000 laptops today, and they claim that $85\%$ of them are working perfectly (no defective parts).
        Let's say we take a random sample of 300 laptops and assess if they are indeed working perfectly.
        <br><br>
        Justify that it is reasonable to approximate the normal model using the sampling distribution of the sample proportion in this situation.
        (This question will not be graded by the computer.)`,
        type: "essay"
    },
    {
        points: 1,
        question:
        String.raw`Find the mean of the sampling distribution of the sample proportion in this situation (this does not count as a probability).`,
        answer: "0.8500",
        type: "text"
    },
    {
        points: 1,
        question:
        String.raw`Find the standard deviation of the sampling distribution of the sample proportion in this situation (this also does not count as a probability).`,
        answer: "0.0266",
        type: "text"
    },
    {
        points: 1,
        question:
        String.raw`Find the probability that the sample proportion of laptops with no defect is at least the mean sample proportion.`,
        answer: "",
        type: "text"
    },
    {
        points: 1,
        question:
        String.raw`Find the probability that the sample proportion of laptops with no defect is within a range of $5\%$ around the mean sample distribution.`,
        answer: "",
        type: "text"
    },
      
  ]