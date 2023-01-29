const categoriesList = document.querySelector(`#categories`);
const categories = categoriesList.querySelectorAll(`.item`);
console.log(`Number of categories: ${categories.length}`);

// console.log(categories)

categories.forEach((category => {
    const heading = category.querySelector(`h2`).textContent;
    const elements = category.querySelectorAll(`li`).length;
    console.log(`Category: ${heading}`);
    console.log(`Elements: ${elements}`);
}));

