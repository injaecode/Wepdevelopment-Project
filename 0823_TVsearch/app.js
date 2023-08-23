const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function(e){

  e.preventDefault();
  
  const find = form.elements.query.value;
  const config ={params: {q:find}};
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  makeImages(res.data);
  form
})

const makeImages = (shows) =>{
  for (let result of shows){
    if(result.show.image){
      const img = document.createElement('IMG');
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
}