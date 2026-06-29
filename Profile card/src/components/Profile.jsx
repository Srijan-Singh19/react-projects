import photo from "../assets/pic2.jpg";

export default function Profile(){
    const name = "Srijan Singh";
    const role = "Mern Stack learner";
    const college = "K.I.E.T Group Of Institutions";

    return(
        <div className="profile">
        <img src={photo} alt={name}/>
        <h2>{name}</h2>
        <h3>{role}</h3>
        <p>{college}</p>
        </div>
    );
}