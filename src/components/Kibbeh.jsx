const Kibbeh = ({kibbehObj}) => {
    return (
        <li className={`kibbeh ${kibbehObj.soldOut ? 'sold-out' : ""}`}>
            <img src={kibbehObj.photoName} alt={kibbehObj.name}/>
            <div>
                <h3>{kibbehObj.name}</h3>
                <p>{kibbehObj.ingredients}</p>
                <spana>{kibbehObj.soldOut? "غير متوفر" : `${kibbehObj.price}$` }</spana>
            </div>

        </li>
    )
}
export default Kibbeh