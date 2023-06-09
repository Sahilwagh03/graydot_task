let lists = document.getElementsByClassName('list')
let rightBox = document.getElementById('right')
let leftBox = document.getElementById('left')

for(list of lists){

    list.addEventListener('dragstart', (e)=>{
        let selected = e.target;

        e.target.className += ' hold';
        

        // rightBox.addEventListener('dragenter', (e) => {
        //     selected.className += ' dashed'; 
        // })

        // leftBox.addEventListener('dragenter', (e) => {
        //     e.target.className += ' dashed'; 
        // })

        rightBox.addEventListener('dragover',(e)=>{
            e.preventDefault()
        })

        rightBox.addEventListener('drop', (e)=>{
            rightBox.appendChild(selected)
            selected=null
        })
        
        leftBox.addEventListener('dragover',(e)=>{
            e.preventDefault()
        })

        leftBox.addEventListener('drop', (e)=>{
            leftBox.appendChild(selected)
            selected=null
        })
    })
}