export function AboutTeam() {
  let array = [
    {
      img: "/imgs/team1.png",
      heading: "Ahmed Refaat",
      job: "Founder - CEO",
    },
    {
      img: "/imgs/team2.png",
      heading: "Mohamed Farouq",
      job: "COO",
    },
    {
      img: "/imgs/team3.png",
      heading: "Yousef Magdy",
      job: "Marketing Head",
    },
    {
      img: "/imgs/team3.png",
      heading: "Ayman refaat",
      job: "Lead Developer      ",
    },
    {
      img: "/imgs/team1.png",
      heading: "Ahmed Medhat",
      job: "Intern Designer      ",
    },
    {
      img: "./imgs/team2.png",
      heading: "Osama Mohamed",
      job: "Intern Designer      ",
    },
  ];
  return (
    <>
      <div className="row">
        {array.map((tm, index) => {
          return <TeamMember arr={tm} key={index}></TeamMember>;
        })}
      </div>
    </>
  );
}

function TeamMember({ arr }) {
  return (
    <>
      <div className="team-member col-12 col-md-6 col-lg-4">
        <div className="tm">
          <img src={arr.img} alt={arr.heading}></img>
          <h4>{arr.heading}</h4>
          <p>{arr.job}</p>
        </div>
      </div>
    </>
  );
}
