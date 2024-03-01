
// tipos primitivos
let nome: string
let idade: number
let blAtivo: boolean
///////////////////////////////////////////////
// OBJETOS
let obj: object 
let obj1: Record<string, string>
interface Usuario {}
///////////////////////////////////////////////
// ARRAYS
let lista: [
    'bruno',
    27,
    true
]
let lista2: Array<boolean>
let lista3: [
    number,
    string,
    boolean
]
let lista1: string[]
lista1 = ['1', '2', '3', '4']
///////////////////////////////////////////////
// TYPE
type Id = number | string
let id: Id // union
///////////////////////////////////////////////
//OBJETS+
interface Pessoa {
    nome: string,
    idade: number,
    carro?: string
}
type Aluno = {
    ra: number
} & Pessoa
let aluno: Aluno
aluno = {nome: 'teste', idade: 13, ra: 4563}
///////////////////////////////////////////////
interface Pessoa2<T> {
    nome: string,
    proffisao: T
}
interface Engenheiro {
    crea: number
}
interface Medico {
    crm: number
}
let medico: Pessoa2<Medico>

// medico.proffisao.crm = 55