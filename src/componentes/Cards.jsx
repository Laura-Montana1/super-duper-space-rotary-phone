import "./Cards.css"
const Pokemon = [
    {
        id:1,
        nombre: "Pikachu",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROX069MGYury4KTwdDJmbNcRtIfDCgzMCve2druPIMiw&s=10",
        alt: "Es una img de pikachue"
    },
    {
        id:2,
        nombre: "Charizar",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjoa4ojEa_O1C100jimaVfvdFM-gDIJcRGfBS_XiJMLg&s",
        alt: "Es una img de Charizard"
    }
]

export default function Cards(){
    return(
        Pokemon.map((item,index)=>{
            return(
                <div className="card" key={index}>
                    <h1>Nro: {item.id} Nombre:{item.nombre}</h1>
                    <img className="image" src={item.imagen} alt={item.alt} />
                </div>
            )
        })
    )
}