import { CriarModal } from "./modal.js"

class Index{

    // static indexRender(){
    //     const token = localStorage.getItem("@kenzieRedeSocial:token")
    //     if(token){
    //         window.location.replace("/src/pages/dashboard.html")
    //         //tira o token e nao deixa armazeinamento 
    //     }
    // }
    static darkEvent(){
        // const darkMode = document.querySelector(".darkMode")
        // const html = document.querySelector(".darkMode")

        // darkMode.addEventListener("click", ()=>{
        //     html.classList.toggle("dark-molde")
        // })

    }

    static Showlogin(){
        const btnLogin = document.querySelector(".btnLogin")

        btnLogin.addEventListener("click", ()=>{
            const novoModal = CriarModal.loginForm()
            CriarModal.template(novoModal)   
            Index.getLogin()       

        })
    }
    static fecharModal(){
        const btnClose = document.querySelector(".closeModal")
        btnClose.addEventListener("click", ()=>{
            const modal = document.querySelector(".container__modal")
            modal.classList.add(".modal-disappear")
            setTimeout(()=>{
                modal.remove()
            },1000)
        })
    }
    static ShowSingup(){
        const btnLogin = document.querySelector(".btnSingup")

        btnLogin.addEventListener("click", ()=>{
            const novoModal = CriarModal.singupForm()
            CriarModal.template(novoModal)          

        })
    }
    static getLogin(){
        const inputlogin =document.querySelector(".email")
        const inputlPass =document.querySelector(".password")
        const btnLogin = document.querySelector(".logar")
        btnLogin.addEventListener("click", async (event)=>{
            const data = {
                email:`${inputlogin}`,
                password: `${inputlPass}` 
             }
        })
        

    }

}

// Index.darkEvent()
Index.Showlogin()
Index.ShowSingup()

console.log("chama")