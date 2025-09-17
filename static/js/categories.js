


/*

    --categories--

*/

export default function categories(){

    const categories = document.querySelector(".categories")

    const img_wrapper = document.querySelector(".categories .img-wrapper")

    const img = document.querySelector(".categories img")

    const ad_wrapper = document.querySelector(".ad-wrapper")

    const ad = document.querySelector(".ad")


    img.style.top = -img_wrapper.getBoundingClientRect().top + "px"

    window.addEventListener("scroll", ()=>{

        img.style.top = -img_wrapper.getBoundingClientRect().top + "px"
    })

    const resize = new ResizeObserver(entries => {

        entries.forEach(entry => {

            if(entry.target == document.body){

                if(entry.target.offsetWidth >= 850){

                    if(categories.hasAttribute("small")) categories.removeAttribute("small")
                }
                else{

                    if(!categories.hasAttribute("small")) categories.setAttribute("small", "")
                }
            }

        })
    })

    resize.observe(document.body)

    ad_wrapper.appendChild(ad.cloneNode(true))

}

