
/*--------------------
* Skill Section
----------------------*/
function Skill(props) {
    return (
        <>
            <div className="col-6 col-md-4 col-lg-6">
                <div className={props.id + " feature-box-02 "}>
                    <div className="icon">
                        <i className="fab fa-html5"></i>
                    </div>
                    <h6>{props.title}</h6>
                </div>
            </div>
        </>
    );
}

/*--------------------
* Skill List Section
----------------------*/
export default function SkillList() {

    const skill_list = [
        {id:'bg-1', title:'HTML' },
        {id:'bg-2', title:'CSS' },
        {id:'bg-3', title:'React JS' },
        {id:'bg-4', title:'Angular' },
        {id:'bg-5', title:'IOS App' },
        {id:'bg-6', title:'App Dev' },
    ]

    return (
        <>
            <section data-scroll-data="2" id="skill" className="section experience-section pb-0">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h3 className="m-0"><span>My Skills</span></h3>
                            </div>
                            <div className="skill-box">
                                <div className="row g-3">
                                    {
                                        skill_list.map((val, i)=>{
                                            return <Skill key={i} id={val.id} title={val.title}/>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center">
                            <img src="img/skills.png" title="" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
