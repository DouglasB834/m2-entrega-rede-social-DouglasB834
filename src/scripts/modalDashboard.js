
export class ModalPost{
    
    static chamarModal(modal) {        
        const body = document.querySelector("body") 
        const section = document.createElement("section")

        section.classList.add("container__modal")

        section.append(modal)
        body.append(section)
        console.log("fn")
    }

    static criarModalClick(post){
      
        const DivMain           = document.createElement("div")
        const tagDivLi          = document.createElement("div")
        const divBoxImg         = document.createElement("div")
        const tagImg            = document.createElement("img")
        const tagDivInfoUsuario = document.createElement("div")
        const tagH3info         = document.createElement("h3")
        const tagPInfo          = document.createElement("p")
        const tagFechaModal     =  document.createElement("span")

        
        DivMain.classList.add("modal") 
        tagDivLi.classList.add("li_div_usuarios")
        divBoxImg.classList.add("box_imgDiv__postagem")
        tagDivInfoUsuario.classList.add("posts__Info__usuario")
        tagH3info.classList.add("nome_usuario_h3")
        tagPInfo.classList.add("trabalho")
        tagFechaModal.classList.add("fechaModal")
        
        tagImg.src          =  "../assets/Ellipse 1.png"
        tagH3info.innerText ="Samuel"
        tagPInfo.innerText  = "vagabundo anonimos"

        tagFechaModal.innerText = "x"

     

        
        divBoxImg.append(tagImg)
        tagDivInfoUsuario.append(tagH3info, tagPInfo) 
        tagDivLi.append(divBoxImg,tagDivInfoUsuario, tagFechaModal)

        tagFechaModal.addEventListener("click", ()=>{
            const modal = document.querySelector(".container__modal")
            modal.classList.add("modal-disappear")
            setTimeout(()=>{
                modal.remove()
            },1000)
        })
 
        //  append Poster
        const tagDivPoster = document.createElement("div")

        tagDivPoster.classList.add("informacao__do__post")
        const tagh2Post = document.createElement("h2")
        tagh2Post.classList.add("tituloPost")
        const tagPPost = document.createElement("p")
        tagPPost.classList.add("textPost")

        tagh2Post.innerText = "Como criar um interface simples e agradável utilizando boas práticas de desig"

        tagPPost.innerText = "Hoje vamos conversar sobre como criar uma interface agradável mesmo sem ter um design pronto         feito por um profissional de UI design! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores molestiae iure molestias quod consequatur quis cumque reprehenderit?        Dolores suscipit corporis maxime vero pariatur laboriosam dolore illo, repellendus qui ipsa facilis "


        
        tagDivPoster.append(tagh2Post, tagPPost)
        DivMain.append(tagDivLi, tagDivPoster)

        return DivMain

    }

}