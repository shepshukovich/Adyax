import customHTML from './index.html';
import style from './style.css';

let root = document.getElementById('root');
let ih = root.innerHTML;

root.innerHTML = customHTML + ih;
