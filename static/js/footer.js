

/*

    --footer--

*/

export default function footer(){

    const footer = document.querySelector(".footer")

    const resize = new ResizeObserver(entries => {

        entries.forEach(entry => {

            if(entry.target == document.body){

                if(entry.target.offsetWidth >= 800){

                    if(footer.hasAttribute("small")) footer.removeAttribute("small")

                    if(footer.hasAttribute("medium")) footer.removeAttribute("medium")
                }
                else if(entry.target.offsetWidth > 600 && entry.target.offsetWidth < 800){

                    if(!footer.hasAttribute("medium")) footer.setAttribute("medium", "")
                    
                    if(footer.hasAttribute("small")) footer.removeAttribute("small")
                }
                else{

                    if(!footer.hasAttribute("small")) footer.setAttribute("small",  "")

                    if(footer.hasAttribute("medium")) footer.removeAttribute("medium")
                }
            }
        })
    })

    resize.observe(document.body)

}

