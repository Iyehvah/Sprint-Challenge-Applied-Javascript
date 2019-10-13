// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const headerContainer = document.createElement('div');
    const spanDate = document.createElement('span');
    const titleH1 = document.createElement('h1');
    const temp = document.createElement('span');

    headerContainer.classList.add('header');
    spanDate.classList.add('date');
    temp.classList.add('temp');

    headerContainer.appendChild(spanDate);
    headerContainer.appendChild(titleH1);
    headerContainer.appendChild(temp);

    console.log(headerContainer);
    return headerContainer;
}

const appendToHeader = document.querySelector(".header-container");
appendToHeader.appendChild(Header());
