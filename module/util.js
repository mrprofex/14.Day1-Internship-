function searchByCategory(category, news){
    const result = [];
    for(let i =0; i< news.length; i++){
        if(news[i].category.toLowerCase()==category.toLowerCase()){
            result.push(news[i]);
        }
    }
    return result;
}
function searchterm(term, news){
    const filterdnews = [];
    for (let i = 0; i<news.length; i++){
        if(news[i].news.toLowerCase().includes(term.toLowerCase())){
            filterdnews.push(news[i]);
        }
    }
}
module.exports ={
    searchByCategory,
    searchterm
}   