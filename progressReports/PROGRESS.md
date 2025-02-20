# Project Progress Reports
*_SPARChives_, a Computer Science 3 project by Kaiser Travis Chan (and Schiel Lueone Battung). Last updated on 20 February 2025.*

## Progress Report: February 2025

### Contents
1. [Plan with the ability of saving data](#plan-with-the-ability-of-saving-data)
2. [Current problems](#current-problems)
3. [Progress as of 05 February 2025](#progress-as-of-05-february-2025)

### Plan with the ability of saving data

The account system would be created, with the user being able to save their progress in mock tests and grades in the gradesheet. SPARC committee members would also be able to add materials to be shown on the website *without* having to hardcode all of them into the HTML and JS files. This would also imply the use of handlebars templates.

### Current problems

The biggest problem currently is the long process of adding a reviewer or mock test: the contributor has to duplicate the folder of an existing material, then edit the corresponding JS files (one for reviewers and two for mock tests). The aim is to solve this through the addition of handlebars templates as mentioned above.

### Progress as of 05 February 2025

The following pages or meta-pages were added/updated:
- **[Gradesheet](#gradesheet)**. The gradesheet allows users to compute their grades in a subject given their assessment and homework scores. As of now, it only allows for the grade computation for two subjects, but the plan is to add availability for the grade computation of all subjects covered by SPARC.
- **[Mock tests](https://mathematicalcoder.github.io/sparchives/public/mocktests/)**. More mock tests were added, along with the functionality of *long answer questions*, which will allow the user to store answers to questions requiring long explanations.

## Progress Report: January 2025

### Contents
1. [Prospective web pages and other plans](#prospective-web-pages-and-other-plans-for-the-rest-of-the-academic-year)
   - [Addition of more reviewers and mock tests](#addition-of-more-reviewers-and-mock-tests)
   - [Gradesheet](#gradesheet)
   - [Account system and other databases](#account-system-and-other-databases-least-priority)
2. [Updates on existing pages](#updates-on-existing-pages)
   - [Reviewers](#reviewers)
   - [Mock tests](#mock-tests)
   - [Exam calendar (new)](#exam-calendar-new)
### Prospective web pages and other plans (for the rest of the academic year)
#### Addition of more reviewers and mock tests
The website mainly focuses on the reviewers and mock tests that are written by people in SPARC. The plan is to upload as many reviewers and mock tests as possible to turn the website into a comprehensive pseudo-database (as it currently consists of JS objects). _However, the bulk of the committee’s reviewers are written by members outside the website project, so there is a huge chance that this website will remain merely as a prototype and might be used in its entirety once the school year ends._
#### Gradesheet
The gradesheet allows users to compute their grades in a certain subject given their scores. Ideally the data will be saved in the computer/browser's local storage until accounts are implemented.
#### Account system and other databases (least priority)
The account system would let users save their progress in reviewers and mock tests and also their grades in the gradesheet so they can easily access their data from any device. Additionally, this would let SPARC committee members contribute their own reviewers and mock tests (either as a link or in markdown form) and get it up in the website. _This is the least priority among the prospective pages as it is the hardest to implement and it is likely outside the scope of the third quarter of CS 3._
### Updates on existing pages
#### Reviewers
A few [reviewers](https://wdprojsrbattungchan.glitch.me/reviewers) have been added as of December 2024. As of now, only math content is available and is yet to be finished.
#### Mock tests
An [actual mock test](https://wdprojsrbattungchan.glitch.me/mocktests/math3/stepfunc/) has been added for testing purposes and also to increase the usability of the website.
#### Exam calendar (new)
The exam calendar will be a reference for the exams of the batch per week/month. The current exam calendar in the website looks like the layout of the reviewers (so each exam has its own Bootstrap card).
