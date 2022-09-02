import { instance } from "./axios.js";
import { Index } from "./index.js";
import { Toast } from "./tost.js";

export class Requests {
    static async login(data) {
        const loginUser = await instance
            .post("users/login/", data)
            .then(res => {
                console.log(res)
                localStorage.setItem("@kenzieRedeSocial:token", res.data.token)
                Toast.create("Login realizado com sucesso", "#0be881")

                setTimeout(() => {
                    window.location.replace("src/pages/dashboard.html")
                },1000)
            })
            .catch(error => {
                Toast.create("Email ou password invalido", "#FF3F34")
            })
        return loginUser

    }

    static async singup(data) {
       
        const newRegister = await instance
            .post("users/", data)
            .then(async res => {
                //logar direito logo depois de cadastra
                console.log(res.data)
                console.log(data)
                Toast.create("Cadastrado com sucesso!!")
                
                // setTimeout(()=>{

                    
                // }, 1000)
                const newData = {
                    email: res.data.email,
                    password: data.password
                }
                await this.login(newData)
                
               
            })
            .catch(error => {
                Toast.create( "Cadastro invalido", "#4263EB;")
            })
        // return newRegister
    }

    // pesquisar todos os usuarios na page
    static async allUsers(users) {
        const usuarios = await instance
            .get(`users/${users}`)
            .then(res => (res.data))
            .catch(error => {
                console.log(error)
                // Toast.create(" FODA SE!","#4263EB;")
            })
        return usuarios
    }


    //um usuario só
    static async userUuid(userId) {
        const buscarID = await instance
            .get(`users/${userId}`)
            .then(res => res.data)
            .catch(error => {
                Toast.create(" FODA SE!", "#4263EB;")
            })
        return buscarID
    }


    //seguir usuario
    static async followUsuario(id) {
        const seguirUsuario = await instance
            .post("users/follow/")
            .then(res => {
                console.log(res)
            })
    }

    //parar de seguir usuario
    static async unfollow(id) {
        const seguirUsuario = await instance
            .delete("users/follow/", id)
            .then(res => {
                console.log(res)
            })
    }

    //criar novo post
    static async criarNovoPost(body) {
        const NovoPost = await instance
            .post("posts/", body)
            .then(res => {
                Toast.create(`Filme cadastrado com Sucesso`, "gray")
            })
            .catch(error => {
                Toast.create(" haaaa!", "#4263EB;")
            })
        return NovoPost
    }

    //para listar todos os POSTS
    static async listarPosts(page) {
        const posts = await instance
            .get("?page=", page)
            .then(res => {
                console.log(res.results)
            })
            .then(res => {
                console.log(res)
            })
    }


}
