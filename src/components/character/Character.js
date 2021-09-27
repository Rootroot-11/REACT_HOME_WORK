export default function Character({img, cName}) {

    return (
        <div>

            <h2>{cName}</h2>
            <img src={img} alt=""/>
            <p>lorem ipsum dolor sit amet, consectetur adipsiting elit.</p>
        </div>
    );
}