const title = ['Gallows Hill', 'Daisy Darker', 'Truly Madly Guilty', "The Housemaid's Secret\n        (The Housemaid, #2)", 'The Guest List', 'Upgrade', 'Aesthetica', 'This Thing Between Us', 'Agency\n        (Jackpot, #2)', 'Version Control', 'We Had to Remove This Post', 'No One Is Talking About This', 'The Verifiers', 'Ripe', 'The Glow', 'The Circle\n        (The Circle, #1)', 'Edit', 'The Noise', 'The Big Dark Sky', 'Confessions', 'The Club', 'Camp Slaughter', 'The Last House on the Street', 'The Woman', 'The Girl Next Door', 'The Handyman', 'Several People Are Typing', 'All the Dangerous Things', 'The Family Game', 'Broadcast']

const author = ['Coates, Darcy\n        *', 'Feeney, Alice\n        *', 'Moriarty, Liane\n        *', 'McFadden, Freida\n        *', 'Foley, Lucy\n        *', 'Crouch, Blake\n        *', 'Rowbottom, Allie\n        *', 'Moreno, Gus\n        *', 'Gibson, William', 'Palmer, Dexter', 'Bervoets, Hanna', 'Lockwood, Patricia\n        *', 'Pek, Jane\n        *', 'Etter, Sarah Rose\n        *', 'Gaynor, Jessie\n        *', 'Eggers, Dave', 'Chesler, Rick\n        *', 'Patterson, James\n        *', 'Koontz, Dean\n        *', 'Minato, Kanae', 'Lloyd, Ellery\n        *', 'Gomez, Sergio\n        *', 'Chamberlain, Diane\n        *', 'Ketchum, Jack', 'Ketchum, Jack', 'Little, Bentley', 'Kasulke, Calvin\n        *', 'Willingham, Stacy\n        *']

// the below code removes the star
author.forEach((element, i) => {
    author[i] = element.replace(/[^a-zA-Z,]/g, ' ');
   });

const pages = ['377\n        pp', '352\n        pp', '517\n        pp', '318\n        pp', '319\n        pp', '352\n        pp', '264\n        pp', '272\n        pp', '413\n        pp', '495\n        pp', '160\n        pp', '210\n        pp', '358\n        pp', '288\n        pp', '320\n        pp', '493\n        pp', '229\n        pp', '432\n        pp', '390\n        pp', '240\n        pp', '320\n        pp', '290\n        pp', '352\n        pp', '336\n        pp', '370\n        pp', '334\n        pp', '256\n        pp', '326\n        pp', '336\n        pp', '288\n        pp']

// the below code removes the letters pp
pages.forEach((element, i) => {
    pages[i] = element.replace(/[^0-9 ]/g, ' ');
   });

const avgrating = ['4.01', '3.81', '3.59', '4.37', '3.84', '3.82', '3.50', '3.77', '3.80', '3.73', '3.01', '3.57', '3.51', '4.21', '3.67', '3.43', '3.70', '3.53', '4.04', '4.05', '3.34', '3.50', '4.25', '3.91', '3.95', '3.70', '3.66', '4.17', '3.91', '3.55']

const myrating = ['1 of 5 stars2 of 5 stars3 of 5 stars[ 4 of 5 stars ]5 of 5 stars', '1 of 5 stars2 of 5 stars3 of 5 stars[ 4 of 5 stars ]5 of 5 stars', '1 of 5 stars2 of 5 stars[ 3 of 5 stars ]4 of 5 stars5 of 5 stars', '1 of 5 stars2 of 5 stars[ 3 of 5 stars ]4 of 5 stars5 of 5 stars', '1 of 5 stars2 of 5 stars3 of 5 stars[ 4 of 5 stars ]5 of 5 stars', '1 of 5 stars2 of 5 stars[ 3 of 5 stars ]4 of 5 stars5 of 5 stars', '1 of 5 stars[ 2 of 5 stars ]3 of 5 stars4 of 5 stars5 of 5 stars', '1 of 5 stars2 of 5 stars3 of 5 stars4 of 5 stars5 of 5 stars', '1 of 5 stars2 of 5 stars3 of 5 stars4 of 5 stars5 of 5 stars', '1 of 5 stars2 of 5 stars3 of 5 stars4 of 5 stars5 of 5 stars', '1 of 5 stars2 of 5 stars3 of 5 stars[ 4 of 5 stars ]5 of 5 stars', '1 of 5 stars2 of 5 stars3 of 5 stars4 of 5 stars5 of 5 stars', '1 of 5 stars2 of 5 stars3 of 5 stars4 of 5 stars5 of 5 stars', '1 of 5 stars2 of 5 stars3 of 5 stars4 of 5 stars5 of 5 stars', '1 of 5 stars2 of 5 stars3 of 5 stars4 of 5 stars5 of 5 stars', '1 of 5 stars[ 2 of 5 stars ]3 of 5 stars4 of 5 stars5 of 5 stars', '1 of 5 stars[ 2 of 5 stars ]3 of 5 stars4 of 5 stars5 of 5 stars', '1 of 5 stars2 of 5 stars3 of 5 stars4 of 5 stars5 of 5 stars', '1 of 5 stars2 of 5 stars3 of 5 stars4 of 5 stars5 of 5 stars', '1 of 5 stars2 of 5 stars3 of 5 stars4 of 5 stars5 of 5 stars', '1 of 5 stars[ 2 of 5 stars ]3 of 5 stars4 of 5 stars5 of 5 stars', '1 of 5 stars[ 2 of 5 stars ]3 of 5 stars4 of 5 stars5 of 5 stars', '1 of 5 stars2 of 5 stars[ 3 of 5 stars ]4 of 5 stars5 of 5 stars', '1 of 5 stars[ 2 of 5 stars ]3 of 5 stars4 of 5 stars5 of 5 stars', '1 of 5 stars2 of 5 stars[ 3 of 5 stars ]4 of 5 stars5 of 5 stars', '1 of 5 stars2 of 5 stars[ 3 of 5 stars ]4 of 5 stars5 of 5 stars', '1 of 5 stars2 of 5 stars3 of 5 stars[ 4 of 5 stars ]5 of 5 stars', '1 of 5 stars2 of 5 stars[ 3 of 5 stars ]4 of 5 stars5 of 5 stars', '1 of 5 stars2 of 5 stars[ 3 of 5 stars ]4 of 5 stars5 of 5 stars', '1 of 5 stars2 of 5 stars3 of 5 stars4 of 5 stars5 of 5 stars']

// the below code returns only the rating i gave which is in the square brackets
const newRatings = myrating.map(ratings => {
    const newRatingMatch = ratings.match(/\[\s*(\d+)\s*of\s*5\s*stars\s*\]/);
    if (newRatingMatch) {
      return parseInt(newRatingMatch[1]);
    } 
      return null; 
    
  });
  

console.log(myrating)
const dateadded = ['Mar 29, 2023', 'Mar 29, 2023', 'Mar 21, 2023', 'Mar 18, 2023', 'Mar 16, 2023', 'Mar 10, 2023', 'Feb 28, 2023', 'Feb 27, 2023', 'Feb 27, 2023', 'Feb 26, 2023', 'Feb 26, 2023', 'Feb 24, 2023', 'Feb 23, 2023', 'Feb 23, 2023', 'Feb 23, 2023', 'Feb 23, 2023', 'Feb 23, 2023', 'Feb 23, 2023', 'Feb 23, 2023', 'Feb 23, 2023', 'Feb 23, 2023', 'Feb 23, 2023', 'Feb 23, 2023', 'Feb 23, 2023', 'Feb 23, 2023', 'Feb 23, 2023', 'Feb 23, 2023', 'Feb 23, 2023', 'Feb 23, 2023', 'Feb 14, 2023']

// const newArray = title.map((e, i) => `${e  } ${  author[i]}`);
// console.log(newArray)

function Book() {
    this.title = title 
    this.author = author
    this.pages = pages
    this.myrating = myrating
    this.avgrating = avgrating
    this.dateadded = dateadded
}

/* const bookTable = title.map(books => `${books.title}`);
console.log(bookTable); */


// title.forEach(element => console.table(element))


const bookTable = document.getElementById("myBooks")

for (let i = 0; i < title.length; i++) {
    const row = bookTable.insertRow(i + 1);
    const titleCell = row.insertCell(0);
    titleCell.innerHTML = title[i];
    const authorCell = row.insertCell(1);
    authorCell.innerHTML = author[i];
    const pagesCell = row.insertCell(2);
    pagesCell.innerHTML = pages[i];
    const avgratingCell = row.insertCell(3);
    avgratingCell.innerHTML = avgrating[i];
    const newratingCell = row.insertCell(4);
    newratingCell.innerHTML = newRatings[i];
    const dateaddedCell = row.insertCell(5);
    dateaddedCell.innerHTML = dateadded[i];
  }



/* const numberOfRows = title.length
const numberOfColumns = 6;

title.forEach((titles) => {
    $("#myBooks").append(`<tr `)
}) */

// const category = document.getElementById('booksBody')
// const books = Array.from(category.querySelectorAll("field title, field author, field num_pages, field avg_rating, field rating, field date_added"))
// const info = books.map(book => book.textContent);


// use this format to extract names
// const category = document.getElementById('booksBody')
// const books = Array.from(category.querySelectorAll("td.field.title div.value"))
// const info = books.map(book => book.textContent);
// const infoTrimd = info.map(function (el) {
    // return el.trim();
// })

/* for authors
const category = document.getElementById('booksBody')
const books = Array.from(category.querySelectorAll("td.field.author div.value"))
const info = books.map(book => book.textContent);
const infoTrimd = info.map(function (el) {
    return el.trim();
}) */

/* for pages 
const category = document.getElementById('booksBody')
const books = Array.from(category.querySelectorAll("td.field.num_pages div.value"))
const info = books.map(book => book.textContent);
const infoTrimd = info.map(function (el) {
    return el.trim();
}) */

/* for avg rating
const category = document.getElementById('booksBody')
const books = Array.from(category.querySelectorAll("td.field.avg_rating div.value"))
const info = books.map(book => book.textContent);
const infoTrimd = info.map(function (el) {
    return el.trim();
}) */

/* for my rating
const category = document.getElementById('booksBody')
const books = Array.from(category.querySelectorAll("td.field.rating div[data-rating]"))
const info = books.map(book => book.textContent);
const infoTrimd = info.map(function (el) {
    return el.trim();
}) */

/* for date added
const category = document.getElementById('booksBody')
const books = Array.from(category.querySelectorAll("td.field.date_added div.value"))
const info = books.map(book => book.textContent);
const infoTrimd = info.map(function (el) {
    return el.trim();
}) */