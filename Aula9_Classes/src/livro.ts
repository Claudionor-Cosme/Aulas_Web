export class livros{
    titulo: string
    autor: string
    anoPulicacao: number
    editora: string

    constructor(titulo:string, autor:string, anoPublicacao:number, editora:string){
        this.titulo = titulo;
        this.autor=  autor;
        this.anoPulicacao = anoPublicacao;
        this.editora = editora;
    }
    exibirDados():void{
        console.log(`Titulo: ${this.titulo}\n Autor: ${this.autor}\n AnoPublicacao: ${this.anoPulicacao}\n Editora: ${this.editora}`)
    }
}