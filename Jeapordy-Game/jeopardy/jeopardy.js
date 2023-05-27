
//PROJECT TOOK LONGER THAN 25 HRS, SUBMITTING INCOMPLETE AND WILL RETURN TO PROJECT LATER TO STAY ON TRACK

// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]

let categories = [];


/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */


//1. Gets random ids and passes into getCategory - We will push what category returns into a category array
async function getCategoryIds() {
    //note: Can see this becoming useful - iterating through requests
   let ranRes = await axios.get("http://jservice.io/api/random?count=6")
   for (let id of ranRes.data) { // meant to iterate through our requested id's
    getCategory(id.category_id) // using a function as a helper to get more data from our api - 
    
}
    fillTable(ranRes.data)
  // console.log(categories)
   
}

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

// Gets clues for a single category, returns it to the Id getting function
async function getCategory(catId) {
    let clues = []
   let clueRes = await axios.get("http://jservice.io/api/clues", {params: {category: catId}})
    // console.log(clueRes.data[0].category.title)
    let title = clueRes.data[0].category.title
    for (let i = 0; i < 5; i++) {
        let ranClueIdx = Math.floor(Math.random() * clueRes.data.length)
        clues.push({question: clueRes.data[ranClueIdx].question, answer: clueRes.data[ranClueIdx].answer, showing: null })
    }
    categories.push({title: title, clues: clues, })
    

}

let button = document.querySelector("button")
let $board = $("#board")
let $headRow = $("#headRow")
let bodyRows = document.querySelector("#bodyRows")

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

//async
function fillTable(catData ) {
    for( let cats of catData) {
        $headRow.append($("<th>").text(cats.category.title))
        console.log(categories)
        let row = `<tr>
            <td>?</td>
        </tr>`
        bodyRows.innerHTML += row
        // let row = `<tr>
        //     <td>${categories[0].clues.showing = null ? "?" : categories[0].clues.answer}</td>
        //     <td>${categories[1].clues.showing = null ? "?" : categories[1].clues.answer}</td>
        //     <td>${categories[2].clues.showing = null ? "?" : categories[2].clues.answer}</td>
        //     <td>${categories[3].clues.showing = null ? "?" : categories[3].clues.answer}</td>
        //     <td>${categories[4].clues.showing = null ? "?" : categories[4].clues.answer}</td>
        // </tr>`
        // bodyRows.innerHTML += row
    }


        // for(let i = 0; i < 5; i++) {
        //     for( let rows of catData) {
        //         let row = `<tr>
        //         <td>?</td>
        //         <td>?</td>
                
                
        //         </tr>`
        //         bodyRows.innerHTML += row
        //     }

        // }
}  

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {

}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

button.addEventListener("click", async function setupAndStart(e) {
    e.preventDefault()
    getCategoryIds()
})

/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

// TODO
