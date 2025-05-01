# Todo list and idea dump

## Mechanisms / backend
- Allow users to upload PDF files for the following:
  - reviewer contribution: if a user wants to upload via PDF instead of HTML
  - mock test (printer friendly version)
    - this can instead be auto-generated with CSS (hide unnecessary components like the sidebar and input boxes)
- Create backend for reviewer contributions
  - **(DONE)** form to JSON file storing content
    - downside: resulting JSON file might be too long
  - **(DONE)** Reviewer URLs will be auto-generated using GET, e.g. /reviewer?id=1
    - ~~this will require IDs of reviewers to be used, either:~~
      - ~~the index of the reviewer in the array~~
      - ~~the time it was sent to the server (unix timestamp)~~
  - **(DONE)** ability to edit and delete reviewers
- Create mock test writing interface
  - similar to MathDash contest writing interface
  - inputs for the following:
    - title
    - description
    - instructions and information (addon to default instructions)
    - tags (subject, grade level, quarter)
    - questions:
      - question statement
      - answer
      - explanation
  - base it on the existing js files for the mock tests
- Create backend for mock tests
  - mostly same mechanism as the reviewer backend

## Aesthetics / frontend
- Toggle dark mode (via local storage)
- Attempt bootstrap sidebar instead of custom sidebar (optional)