import {reactive} from "vue"

export const catalog = reactive([])

export async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    id: 'js',
                    title: 'Vanila JS',
                    price: 100
                },
                {
                    id: 'nodejs',
                    title: 'Node JS',
                    price: 150
                },
                {
                    id: 'ts',
                    title: 'TypeScript',
                    price: 180
                },
                {
                    id: 'go',
                    title: 'Golang',
                    price: 400
                },
                {
                    id: 'vue',
                    title: 'Vue JS',
                    price: 345
                }
            ])
        },700)
    })
}


export function findById (id) {
    return catalog.find((i) => i.id === id)
}