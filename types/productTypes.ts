

export interface IProduct {
    name: string
    description: string
    price: number
    id: number
    imgUrl?: string

}

export interface ICategory {
    id: number
    tags: []
    name: string
    slug: string
    photo: string
    svg_icon: string
    active: boolean
    sort: number
    extra:object
    lft: number
    rght: number
    tree_id: number
    level: number
    parent: number
}


