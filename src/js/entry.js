import {foo, add} from './math';
import data from '../json/web';

// 样式直接引入
import '../css/style.css'


document.write(foo(2) + " hello world");

document.write('<br>');

document.write(add(6, 5));

document.write('<br>');

document.write(JSON.stringify(data));






