AFRAME.registerComponent('cursor',{
    schema:{
        selectedItemId:{default:'',type:'string'}
    },
    init:function(){
        this.handleMouseEnterEvents()
        this.handleMouseLeaveEvents()
    },
    handleMouseEnterEvents:function(){
        this.el.addEventListener('mouseenter',()=>{
            const id=this.el.getAttribute('id')
            const comicsId=[
                'wings-of-fire',
                'sonic-the-hedgehog',
                'star-wars',
                'marvel',
            ]
            if(comicsId.includes(id)){
                const comicsContainer=document.querySelector('#comics-container')
                comicsContainer.setAttribute('cursor-listener',{
                    selectedItemId:id,
                })
                this.el.setAttribute('material',{color:'pink', opacity:1})
            }
        })
    },
    handleMouseLeaveEvents:function(){
        this.el.addEventListener("mouseleave",()=>{
            const {selectedItemId}=this.data
            if(selectedItemId){
                const el=document.querySelector(`#${selectedItemId}`)
                const id=el.getAttribute('id')
                if(id==selectedItemId){
                    el.setAttribute('material',{color:'pink',opacity:1})
                }
            }
        })
    },
})