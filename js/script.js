//exercise 1 solution
const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

const divMountain = document.querySelector('#mountains');
const table = document.createElement('table');
const tr1 = document.createElement('tr');
const th1 = document.createElement('th');
const th2 = document.createElement('th');
const th3 = document.createElement('th');

th1.classList.add('name');
th2.classList.add('height');
th3.classList.add('place');

th1.textContent = 'name';
th2.textContent = 'height';
th3.textContent = 'place';

tr1.appendChild(th1);
tr1.appendChild(th2);
tr1.appendChild(th3);
table.appendChild(tr1);

let ctr = 1;
for (const element of MOUNTAINS) {
    const row = creatingRowElement(ctr);

    for(let i=0; i<3; i++){
        const header = creatingHeaderElement(i);
        const k = getObjectKey(i);
        header.textContent = element[k];
        row.appendChild(header);
    }

    table.appendChild(row);
    ctr++;
}

divMountain.appendChild(table);

function creatingRowElement(rowCtr){
    const tr = document.createElement('tr');
    tr.id = rowCtr;
    return tr;
}

function creatingHeaderElement(headerCtr){
    const th = document.createElement('th');
    th.id = headerCtr;
    return th;
}

function getObjectKey(num){
    let key = "";
    switch(num){
        case 0:
            key = "name";
            break;
        case 1:
            key = "height";
            break;
        case 2:
            key = "place";
            break;
        default:
            key = "until 3 only"
    }
    return key;
}

//exercise 2 solution
function byTagName(node, tagName){
    const elements = node.getElementsByTagName(tagName);
    const yourArrayNode = Array.from(elements);
    const array1 = [];

    for (const element of yourArrayNode) {     
        if(element.tagName === tagName.toUpperCase()){
            array1.push(element.tagName);
        } 
    
    }
    return array1;
}

const arr1 = byTagName(document.body, "h2");
console.log(arr1);
console.log(arr1.length);

const arr2 = byTagName(document.body, "span");
console.log(arr2);
console.log(arr2.length);

let para = document.querySelector('p');
const arr3 = byTagName(para, "span");
console.log(arr3);
console.log(arr3.length);

//exercise 3 picture animation
//(Math.cos(angle) * radius1 + centerX1)
const pic1 = document.querySelector('#pic1');
const pic2 = document.querySelector('#pic2');
let angle1 = 0;
let angle2 = 0;
let lastTime = null;

function animate(time){
    if(lastTime != null){
        angle1 += (time - lastTime) * 0.001;
        angle2 -= (time - lastTime) * 0.001;
    }

    console.log(`angle1: ${angle1} angle2: ${angle2}`);
    lastTime = time;
    pic1.style.top = (Math.sin(angle1) * 40 + 40) + "px";
    pic1.style.left = (Math.cos(angle1) * 200 + 230) + "px";
    pic2.style.top = (Math.sin(angle2) * 40 + 360) + "px";
    pic2.style.left = (Math.cos(angle2) * 200 + 180) + "px";

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
