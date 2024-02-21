
// tipos primitivos
let nome: string
let idade: number
let blAtivo: boolean

// OBJETOS
let obj: object 
obj = {
    nome: 'bruno',
    idade: 27,
    bl: true
}
let obj1: Record<string, string>
obj1 = {
    nome: 'bruno',
    idade: '27',
    bl: 'true'
}
interface Usuario {}

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

// TYPE
type Id = number | string
let id: Id // union

interface Aluno {
    nome: string,
    idade: number
}
type Curso = {
    curso: string,
    ra: number
} & Aluno
// interface Curso extends Aluno{
//     curso: string,
//     ra: number
// }
let aluno: Curso