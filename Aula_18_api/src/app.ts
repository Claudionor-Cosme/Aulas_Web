import express, { Request, Response } from "express";
import { Produto } from "./Produto";
import { Fabricante } from "./Fabricante";
import { Endereco } from "./Endereco";

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());
const produtos: Produto[] = [];

function helloWorld(req: Request, res: Response): void {
    res.status(200).send('Hello World!!');

}

function filtraProdutoPorID(req: Request, res: Response): void{
    try{
        let id = Number(req.params.id)
        const produto = produtos.find(produto => produto.id === id)
        if (!produto){
            res.status(404).json({
                Message: "produto nao encontrado"
            })
            return
        }
        res.status(200).json(produto)
    } catch (e: unknown){
        res.status(400).json({
            Message: (e as Error).message
        })
    }
}

function filtrarProdutoPorNome(req: Request, res: Response): void {
    try {
        let name = req.query.name
        res.status(200).json({ Name: name })
    } catch (e: unknown) {
        res.status(400).json({ Message: "Necessário informar o nome" })
    }
}

function novoProduto(req: Request, res: Response): void {
    try {
        let data: any = req.body

        if (!data.nome || !data.preco || !data.fabricante) {
            throw new Error("Produto requer nome, preço e fabricante")
        }

        const fabricante = new Fabricante(

            data.fabricante.nome,

            new Endereco(
                data.fabricante.endereco.cidade,
                data.fabricante.endereco.pais
            )
        )

        const produto = new Produto(data.id, data.nome, data.preco, fabricante)
        produtos.push(produto)

        res.status(200).json(produto)
    } catch (e: unknown) {
        res.status(400).json({ Message: (e as Error).message })
    }
}

function listarProdutos(req: Request, res: Response): void {
    res.status(200).json(produtos)
}

function atualizarProduto(req: Request, res: Response): void {

    try {

        const id = Number(req.params.id)

        const produto = produtos.find(
            produto => produto.id === id
        )

        if (!produto) {

            res.status(404).json({
                Message: "Produto não encontrado"
            })

            return
        }

        const data = req.body

        produto.nome = data.nome
        produto.preco = data.preco

        produto.fabricante = new Fabricante(

            data.fabricante.nome,

            new Endereco(
                data.fabricante.endereco.cidade,
                data.fabricante.endereco.pais
            )

        )

        res.status(200).json(produto)

    } catch (e: unknown) {

        res.status(400).json({
            Message: (e as Error).message
        })

    }

}

function removerProduto(req: Request, res: Response): void {

    try {

        const id = Number(req.params.id)

        const indice = produtos.findIndex(
            produto => produto.id === id
        )

        if (indice === -1) {

            res.status(404).json({
                Message: "Produto não encontrado"
            })

            return
        }

        produtos.splice(indice, 1)

        res.status(200).json({
            Message: "Produto removido"
        })

    } catch (e: unknown) {

        res.status(400).json({
            Message: (e as Error).message
        })

    }

}

app.get('/api/hello/:id', helloWorld)
app.get('/api/product/:id', filtraProdutoPorID)
app.get('/api/product', filtrarProdutoPorNome)
app.post('/api/product', novoProduto)
app.get('/api/products', listarProdutos)
app.put('/api/product/:id', atualizarProduto)
app.delete('/api/product/:id', removerProduto)

app.listen(PORT, () => console.log(`API rodando na URL : http://localhost:${PORT}`));


