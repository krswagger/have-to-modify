
/**
main
**/

function createSection() {
  // create 5 sections with Loop
  for (let i=0; i<5; i++) {
    // set variables
    const main = document.querySelector('main');
    const section = document.createElement('section');
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    // get id and data-nav attribute for each section
    section.setAttribute('id','section'+(i+1));
    section.setAttribute('data-nav','Section '+ (i+1));
    div.setAttribute('class','container');
    // add text content to elements, h2 and p
    h2.textContent = 'Section' + (i+1);
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod. Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.';
    // append elements in order
    div.appendChild(h2);
    div.appendChild(p);
    section.appendChild(div);
    main.appendChild(section);
  }
}

createSection();


/**
variables
**/

const navList = document.getElementById('navbar__list');
const allSection = document.querySelectorAll('section');


/**
create navigation
**/

function buildNav() {
  for (let i=0; i<allSection.length; i++){
    //create elements <li> and <a>
    const li = document.createElement('li');
    const anchor = document.createElement('a');
    //give attributes to anchor
    anchor.setAttribute('href','#section'+(i+1));
    anchor.setAttribute('class', 'menu__link');
    anchor.appendChild(document.createTextNode('section'+(i+1)));
    li.appendChild(anchor);
    navList.appendChild(li);
}
}

buildNav();


/**
add and remove your-active-class in each section when you scroll
**/

document.addEventListener('scroll', function(){
  allSection.forEach ( (section) => {
    if (window.scrollY >= section.offsetHeight) {
      section.classList.add("your-active-class");
    }else{
      section.classList.remove("your-active-class");
    }
  });
});



/**
add and remove active class in navigation bar when you click
**/

//set variable
const menuLink = document.querySelectorAll('.menu__link');

menuLink.forEach( (link) => {
  link.addEventListener('click', function(){
    // (1) remove all active class
    removeClass();
    // (2) a link which is selected gets a active class
      if(link.className!=='active'){
            link.classList.add('active');
          }
      });
    });

 // removeClass function is added to prcoess (1)
  function removeClass(){
    for (var i=0; i<menuLink.length; i++){
      menuLink[i].classList.remove('active');
    }
  }


/**
move smoothly to each section when you click
**/

for (let i=0; i<menuLink.length; i++){
  menuLink[i].addEventListener ('click', function(){
  const eachSection = document.getElementById('section'+(i+1));
    if (isInViewport(eachSection)){
      eachSection.scrollIntoView(
        {
          behavior: 'smooth',
        }
      );
      }
    });
  }

// whether current section is in the viewport or not
  const isInViewport = function (el){
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  

/**
add text to footer element
**/

const footer = document.querySelector('footer');
footer.innerHTML = 'copyright by <em>krswagger</em>';
