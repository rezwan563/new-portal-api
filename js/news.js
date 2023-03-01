// Fetch categories from API
const newsCategories = () => {
    const url = "https://openapi.programming-hero.com/api/news/categories"
    fetch(url)
        .then(res => res.json())
        .then(data => loadCategories(data.data.news_category))
        .catch(error => console.log(error))
}

// Dynamic Categories in navbar
const loadCategories = (categories) => {
    // console.log(categories)
    console.log("")
    const categoriesContainer = document.getElementById("news-categories");

    categories.forEach(singleCategory => {
        const category = singleCategory.category_name;
        const news_id = singleCategory.category_id;
        categoriesContainer.innerHTML += `<p class="hover:underline hover:underline-offset-4 hover:decoration-2 " onclick ="newsInCategory('${news_id}', '${category}')">${category}</p>`

    })
}
// Fetch news in a categories
const newsInCategory = (category_id, category_name) => {
    const url = ` https://openapi.programming-hero.com/api/news/category/${category_id} `
    fetch(url)
        .then(res => res.json())
        .then(data => newsDisplay(data.data, category_name))
        .catch(error => console.log(error))
}

const newsDisplay = (newsList, category) => {
    const newsCountMessage = document.getElementById("news-count-message");
    const newsNumber = newsList.length
    newsCountMessage.innerHTML = `<p class="bg-gray-100 px-8 py-5">${newsNumber} items found in category ${category}</p>`
}

const newsLoad = () => {
    const url = `https://openapi.programming-hero.com/api/news/category/08`;
    fetch(url)
        .then(res => res.json())
        .then(data => allNews(data.data))
        .catch(error => console.log(error))
}

const allNews = (data) => {
    console.log(data)
    const newsBox = document.getElementById("news-section");
    data.forEach(singleStory => {
        const { author, image_url, title, details } = singleStory;
        // console.log(author)
        const { name, img, published_date } = author;
        console.log(img)
        console.log(name)
        console.log(published_date)

        console.log()
        newsBox.innerHTML += `
        <div class="card lg:card-side bg-base-100 shadow-xl mb-5 ">
              <figure><img src="${image_url}" class="h-36" alt="Album"/></figure>
              <div class="card-body">
                <h2 class="card-title">${title}</h2>
                <div>
                    <div class="flex items-center gap-2">
                     <div class="">
                         <img src= "${img}" class="w-10 rounded-2xl">
                     </div>
                    <div>
                        <p>${name? name : "Source not found"}</p>
                    </div>
                    </div>
                    <div><p>${published_date}</div>
                </div>
                <p>${details.slice(0, 300)}</p>

                <div class="">
                  <button class="px-4 py-3 rounded-md font-bold hover:bg-gray-300">More</button>
                </div>
              </div>
            </div>
        `
    })
}
newsCategories()