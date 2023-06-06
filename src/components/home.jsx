import "../styles/components/home.sass"
import picture from "../img/profile.jpg"
export default function Home() {
    
    return(
        <section id="home" className='page1'>
            <article id="home--article">
                <img id="profile-picture" src={picture} alt="Orlando picture"/>
                <div className="main--home">
                  <h3 >Hi I am Orlando.</h3>
                  <h1 className="secondary-gadient-font">Front-end</h1>
                  <h1 className="secondary-gadient-font">Developer</h1>
                  <p >I have 30 yeas old, and had created projects as<br/> a freelancer for the last 2 years</p>
                </div>
            </article>
        </section>
    )
}
