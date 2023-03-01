const loadNews = () =>{
    const url = "https://openapi.programming-hero.com/api/news/categories"
    fetch(url)
    .then(res => res.json())
    .then(data => loadCategories(data.data.news_category))
    .catch(error => console.log(error))
}

const loadCategories = (categories) =>{
    console.log(categories)
    const categoriesContainer = document.getElementById("news-categories");
    categories.forEach(singleCategory => {
        const category = singleCategory.category_name;
        categoriesContainer.innerHTML += `<a class="hover:underline hover:underline-offset-4 hover:decoration-2 ">${category}</a>`

    })
}
loadNews()