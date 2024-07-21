AFRAME.registerComponent('comics',{
    init:function(){
        this.comicsContainer=this.el
        this.createCards()
    },

    createCards:function(){
        const thumbNailsRef=[
            {
                id:'wings-of-fire',
                title:'Wings of Fire: The Dragonet Prophecy Graphic Novel',
                url:'https://th.bing.com/th/id/R.e424969f6d9a89191702e4fd4fda119b?rik=HkOsW8odVjLvPQ&riu=http%3a%2f%2ftuibooks.com%2fwp-content%2fuploads%2f2018%2f01%2fWingsOfFire-Graphix1-animated-cover-333x500.gif&ehk=nForS9G1VjGQK%2ffO918sj0RPa485HdGTlKOch5YJAis%3d&risl=&pid=ImgRaw&r=0',
            },
            {
                id:'sonic-the-hedgehog',
                title:'Sonic the Hedgehog Comic',
                url:'https://th.bing.com/th/id/OIP.NJl1RS9EMogq_RMHLCBUJgHaLY?rs=1&pid=ImgDetMain',
            },
            {
                id:'star-wars',
                title:'Star Wars Comic',
                url:'https://th.bing.com/th/id/R.2d4156ec2ebeb78c79701dade164641a?rik=AYRyyFzh%2fMbPrA&pid=ImgRaw&r=0',
            },
            {
                id:'marvel',
                title:'Marvel Spiderman Comic',
                url:'https://th.bing.com/th/id/R.ca9067be3860a44a9d7c26b965261b4c?rik=kQsIvmVYctBgTw&riu=http%3a%2f%2fimages.comiccollectorlive.com%2fcovers%2f21f%2f21f9cef4-c226-46ca-ba4d-832c133b7ed3.jpg&ehk=dvMyiIClfuf3jO%2buJlekgTUpMpwI6gsYZSPPUTkrwmM%3d&risl=&pid=ImgRaw&r=0',
            },
        ]
        let previousXPosition=-60

        for(var item of thumbNailsRef){
            const posX = previousXPosition + 25
            const posY = 7
            const posZ = -40
            const position = {x: posX, y:posY, z:posZ}
            previousXPosition=posX

            const borderEl=this.createBorders(position,item.id)
            const thumbnailEl=this.createThumbNails(item)
            borderEl.appendChild(thumbnailEl)
            const titleEl=this.createTitle(position,item)
            borderEl.appendChild(titleEl)
            this.comicsContainer.appendChild(borderEl)
        }
    },
    createBorders:function(position,id){
        const entityEl= document.createElement('a-entity')
        entityEl.setAttribute('id',id)
        entityEl.setAttribute('visible',true)
        entityEl.setAttribute('geometry',{primitive:'plane',width:24,height:35})
        entityEl.setAttribute('position',position)
        entityEl.setAttribute('material',{color:'blue',opacity:1})
        return entityEl
    },

    createThumbNails:function(item){
        const entityEl=document.createElement('a-entity')
        entityEl.setAttribute('visible',true)
        entityEl.setAttribute('geometry',{primitive:'box',width:22,height:30})
        entityEl.setAttribute('material',{src:item.url})
        return entityEl
    },

    createTitle:function(position,item){
        const entityEl=document.createElement('a-entity')
        entityEl.setAttribute('text',{font:'dejavu',align:'center',width:60,color:'#E65100',value:item.title})
        const elPosition=position
        elPosition.y=-40
        entityEl.setAttribute('position',elPosition)
        entityEl.setAttribute('zvisible',true)
        return entityEl
    }

})