import customHTML from './index.html';
import style from '../../public/style.scss';

let root = document.getElementById('root');
let ih = root.innerHTML;

root.innerHTML = customHTML + ih;


const typeFile = document.getElementsByClassName('cv')[0];
const uploadBtn = document.getElementsByClassName('custom-upload-btn')[0];

typeFile.addEventListener('change', function(event) {
  uploadBtn.innerHTML = this.files[0].name;
});

typeFile.addEventListener('mouseover', function(event) {
  uploadBtn.style.border = '1px solid #fddc3e';
})

typeFile.addEventListener('mouseout', function(event) {
  uploadBtn.style.border = '1px solid #dcdcdc';
})
