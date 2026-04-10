import {products} from "./data";
import template from "./products-template.hbs";

const listEl = document.querySelector(".list");

listEl.innerHTML = template({products})
