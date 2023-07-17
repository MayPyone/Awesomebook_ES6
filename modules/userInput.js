   export function create() {
      if (localStorage.getItem('books') == null) {
        localStorage.setItem('books', JSON.stringify([]));
      }
      return JSON.parse(localStorage.getItem('books'));
    }
  
   export let add = () => {
      const totalbooks = create();
      if (document.querySelector('.title').value !== '' && document.querySelector('.author').value !== '') {
        const book = {
          title: document.querySelector('.title').value,
          author: document.querySelector('.author').value,
        };
        totalbooks.push(book);
        localStorage.setItem('books', JSON.stringify(totalbooks));
      }
    }
  
  export let show = () => {
      const totalBooks = create();
      const container = document.querySelector('.extra');
      const main = document.createElement('section');
      main.className = 'main';
      if (totalBooks.length > 0) {
        for (let i = 0; i < totalBooks.length; i += 1) {
          main.innerHTML += `<section class='outer'><section class='inner'><p>
             " ${totalBooks[i].title} " by
              ${totalBooks[i].author}</p>
              <p><button class="${i}">Remove</button></p></section> </section>
            `;
          container.appendChild(main);
        }
      }
    }
  
    export let remove = (e) => {
      const totalBooks = create();
      totalBooks.splice(e, 1);
      localStorage.setItem('books', JSON.stringify(totalBooks));
    }