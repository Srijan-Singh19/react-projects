import pic from "./assets/pic2.jpg";
export default function Profile() {
  const name = "Srijan Singh";
  const role = "MERN Stack Learner";
  const college = "KIET Group of Institutions";

  return (
    <div>
      <img
        src={pic}
        alt="Profile"
        style={{
            width:"100px"
        }}
      />

      <h2>{name}</h2>
      <p>{role}</p>
      <p>{college}</p>
    </div>
  );
}