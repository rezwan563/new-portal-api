// Fetch categories from API
const loadNews = () =>{
    const url = "https://openapi.programming-hero.com/api/news/categories"
    fetch(url)
    .then(res => res.json())
    .then(data => loadCategories(data.data.news_category))
    .catch(error => console.log(error))
}

// Dynamic Categories in navbar
const loadCategories = (categories) =>{
    // console.log(categories)
    const categoriesContainer = document.getElementById("news-categories");
    
    categories.forEach(singleCategory => {
        const category = singleCategory.category_name;
        const news_id = singleCategory.category_id;
        categoriesContainer.innerHTML += `<p class="hover:underline hover:underline-offset-4 hover:decoration-2 " onclick ="newsInCategory('${news_id}', '${category}')">${category}</p>`

    })
}
// Fetch news in a categories
const newsInCategory = (category_id, category_name) =>{
    const url = ` https://openapi.programming-hero.com/api/news/category/${category_id} `
    fetch(url)
    .then(res => res.json())
    .then(data =>  newsDisplay(data.data, category_name))
    .catch(error => console.log(error))
}

const newsDisplay = (newsList, category) =>{
    const newsCountMessage = document.getElementById("news-count-message");
    const newsNumber = newsList.length
    newsCountMessage.innerHTML = `<p class="bg-gray-100 px-8 py-5">${newsNumber} items found in category ${category}</p>`    
}

loadNews()