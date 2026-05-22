

export type Service = {
    name : string,
    id : string ,
    slug : string, 
    price : number,
    duration : number,
    description : string,
    image : string,
    image1? : string,
}

 export const services : Service[] = [
    {
        id: "svc_001",
        name: "The Buzz",
        slug: "the-buzz",
        price: 22,
        duration: 15,
        description: "Coupe à la tondeuse uniquement, une seule longueur.",
        image : "/services/buzz1.jpg",
    },
    {
        id: "svc_002",
        name: "The Corner Fade",
        slug: "the-corner-fade",
        price: 28,
        duration: 30,
        description: "Notre spécialité. Dégradé à blanc, contours tracés au laser, finition produits.",
        image : "/services/fade1.jpg",
    },
    {
        id: "svc_003",
        name: "The Full Pack",
        slug: "the-full-pack",
        price: 45,
        duration: 60,
        description: "Coupe + Barbe + Shampoing massant.",
        image : "/services/fullpack1.jpg",

    },
    {
        id: "svc_004",
        name: "The Beard Trim",
        slug: "the-beard-trim",
        price: 15,
        duration: 15,
        description: "Taille et alignement de la barbe à la tondeuse.",
        image : "/services/trim1.jpg",
    }
];

