import * as user from './modules/userInput.js';
import { DateTime } from '../node_modules/luxon/src/luxon.js';
const time = () => {
  const d = DateTime.now();
	return d.toLocaleString(DateTime.DATETIME_MED);
};

document.querySelector('.date').innerHTML = time();
user.show();
document.getElementById('addbtn').addEventListener('click', (e) => {
      e.preventDefault();
      user.add();
      document.querySelector('.title').value = '';
      document.querySelector('.author').value = '';
      document.querySelector('.extra').innerHTML = '';
      user.show();
    });

    document.querySelector('.extra').addEventListener('click', (e) => {
          if (e.target.tagName === 'BUTTON') {
            const button = e.target;
            document.querySelector('.extra').innerHTML = '';
              user.remove(Number(button.className));
              user.show();
          }
        });


    const show = document.getElementById('add');
      const add = document.querySelector('.outer-extra');
      const contact = document.getElementById('contact');
      const myadd = document.getElementById('myadd');
      const container = document.getElementById('add');
      const mylist = document.getElementById('mylist');
      const mycontact = document.getElementById('mycontact');
      mylist.addEventListener('click', () => {
        show.style.display = 'none';
        contact.style.display = 'none';
        add.style.display = 'block';
      });
      
      myadd.addEventListener('click', () => {
        add.style.display = 'none';
        contact.style.display = 'none';
        show.style.display = 'block';
      });
      
      mycontact.addEventListener('click', () => {
        contact.style.display = 'block';
        add.style.display = 'none';
        show.style.display = 'none';
      });