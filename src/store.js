import { createStore } from "redux";

const initialState = {
    players: [
        {
            id: 1,
            name: "Manuel Neuer",
            photo: "https://i.ibb.co/wWZCHXL/Neuer.png"
        },
        {
            id: 2,
            name: "David Alaba",
            photo: "https://i.ibb.co/8dqmz06/Alaba.png"
        },
        {
            id: 3,
            name: "Dani Carvajal",
            photo: "https://i.ibb.co/zNBvG3H/Carvajal.png"
        },
        {
            id: 4,
            name: "Eden Hazard",
            photo: "https://i.ibb.co/XxrN5pM/Hazard.png"
        },
        {
            id: 5,
            name: "Memphis Deapy",
            photo: "https://i.ibb.co/3sNKyfv/Depay.png"
        },
        {
            id: 6,
            name: "Sergio Aguero",
            photo: "https://i.ibb.co/t8LKyGW/Aguero.png"
        },
        {
            id: 7,
            name: "Antoine Griezman",
            photo: "https://i.ibb.co/gg4DbGj/Griezman.png"
        },
        {
            id: 8,
            name: "Jordi Alba",
            photo: "https://i.ibb.co/vmPCGYF/Jordi.png"
        },
        {
            id: 9,
            name: "Luka Modric",
            photo: "https://i.ibb.co/PQHD0tk/Modric.png"
        },
        {
            id: 10,
            name: "Casemiro",
            photo: "https://i.ibb.co/TtrrF6Y/Casemiro.png"
        },
        {
            id: 11,
            name: "Toni Kroos",
            photo: "https://i.ibb.co/34Q8v8Z/Kroos.png"
        },
        {
            id: 12,
            name: "Leonel Messi",
            photo: "https://i.ibb.co/zmPJXbF/Messi.png"
        },
        {
            id: 13,
            name: "EL BICHO",
            photo: "https://i.ibb.co/4Kpw4r8/Cristiano.png"
        },
        {
            id: 14,
            name: "Lucho Diaz",
            photo: "https://i.ibb.co/vY5K7ww/Lucho.png"
        }
    ],
    headlines: [],
    substitutes: []
}

const reducer = (state = initialState, action) => {
    return state;
}

export default createStore(reducer);