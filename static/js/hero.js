

/*

    --hero--

*/


export default function hero(){

    const hero = document.querySelector(".hero")

    const nav_wrapper = document.querySelector(".nav-wrapper")

    const search_wrapper = document.querySelector(".search-wrapper")

    const img = document.querySelector(".hero img")

    const menu_btn = document.querySelector(".header > button")

    const search_btn = document.querySelector(".btn-wrapper button:first-child")


    img.style.top = - hero.getBoundingClientRect().top + "px"

    
    window.addEventListener("scroll", ()=>{

        img.style.top = - hero.getBoundingClientRect().top + "px"

    })

    
    const resize = new ResizeObserver(entries => {

        entries.forEach(entry => {

            if(entry.target == document.body){

                if(entry.target.offsetWidth >= 700){

                    if(hero.hasAttribute("small")) hero.removeAttribute("small")
                }
                else{

                    if(!hero.hasAttribute("small")) hero.setAttribute("small", "")
                }
            }
        })
    })

    resize.observe(document.body)

    menu_btn.addEventListener("click", ()=>{

        if(!hero.hasAttribute("menu-open")) hero.setAttribute("menu-open", "")
        
        else hero.removeAttribute("menu-open")
    })

    search_btn.addEventListener("click", ()=>{

        if(!hero.hasAttribute("search-open")) hero.setAttribute("search-open", "")
        
        else hero.removeAttribute("search-open")
    })  

    window.addEventListener("click", e => {

        if(!nav_wrapper.contains(e.target) && e.target != menu_btn){

            if(hero.hasAttribute("menu-open")) hero.removeAttribute("menu-open")
        }

        if(!search_wrapper.contains(e.target) && !search_btn.contains(e.target)){

            if(hero.hasAttribute("search-open")) hero.removeAttribute("search-open")
        }
    })

}

