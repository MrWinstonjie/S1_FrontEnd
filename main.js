/*Code untuk search bar manga*/
const searchpage = document.querySelector('.input-box input');
const notFoundMessage = document.querySelector('#not-found-message');

searchpage.addEventListener('keyup', filterCards); 

function filterCards() {

  const mencari = searchpage.value.toLowerCase();
  const cards = document.querySelectorAll('.manga-card');

  let sama = 0;

  cards.forEach(card => {

    const judul = card.querySelector('h3');
    const judultext = judul.textContent.toLowerCase();

    const genrenya = card.querySelectorAll('.genre');
    const textgenre = []; 
    genrenya.forEach(genre => {
      textgenre.push(genre.textContent.toLowerCase());
    });

    if ( 
      judultext.includes(mencari) ||  
      textgenre.some(text => text.includes(mencari))
    ) {
      card.style.display = 'inline-block'; 
      sama++;

    } else {
      card.style.display = 'none';  
    }

  });

  if (sama > 0) {
    notFoundMessage.style.display = 'none';
  } else {
    notFoundMessage.style.display = 'block';
  }
}





