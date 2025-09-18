

/*

    --latest--

*/

export default function latest(){

    const prev_ = document.querySelector(".direction button:first-child")

    const next_ = document.querySelector(".direction button:nth-child(2)")

    const items = document.querySelectorAll(".latest .item")

    let ratio = 3

    function init(){

        items.forEach((item, index) => {

            item.style.left = index * 100 / ratio + "%"

            item.style.width = 100 / ratio + "%"

            item.style.transition = "left 0.4s"
        })
    }

    function far_right(){

        let max_item = null

        let max_pos = null

        items.forEach(item => {

            const pos = +item.style.left.split("%")[0]

            if(max_pos == null){
                
                max_pos = pos

                max_item = item
            }
            else if(max_pos < pos){
                
                max_pos = pos

                max_item = item
            }

        })

        return max_item
    }


    function far_left(){

        let min_item = null

        let min_pos = null

        items.forEach(item => {

            const pos = +item.style.left.split("%")[0]

            if(min_pos == null){

                min_pos = pos

                min_item = item
            }
            else if(min_pos > pos){

                min_pos = pos

                min_item = item
            }
        })

        return min_item
    }


    function prev(){

        // ->

        const far_right_item = far_right()

        far_right_item.style.transition = ""

        far_right_item.style.left = - 100 / ratio + "%"

        setTimeout(()=>{

            far_right_item.style.transition = "left 0.4s"

            items.forEach(item => {

                const pos = +item.style.left.split("%")[0]

                item.style.left = pos + 100 / ratio + "%"

            })

        },100)

    }

    function next(){

        // <-

        items.forEach(item => {

            const pos = +item.style.left.split("%")[0]

            item.style.left = pos - 100 / ratio + "%"
        })

        setTimeout(()=>{

            const far_left_item = far_left()

            far_left_item.style.transition = ""

            far_left_item.style.left = (items.length - 1) * 100 / ratio + "%"

            setTimeout(()=>{

                far_left_item.style.transition = "left 0.4s"

            },100)

        },500)

    }

    const resize = new ResizeObserver(entries => {

        entries.forEach(entry => {

            if(entry.target == document.body){

                if(entry.target.offsetWidth >= 850){
                    
                    ratio = 3

                    init()
                }
                else if(entry.target.offsetWidth > 550 && entry.target.offsetWidth < 850){

                    ratio = 2

                    init()
                }
                else{

                    ratio = 1

                    init()
                }
            }
        })
    })

    resize.observe(document.body)

    prev_.addEventListener("click", prev)

    next_.addEventListener("click", next)

    init()


}

