import "../styles/components/home.sass"
import picture from "../img/profile.jpg"
export default function Home() {
    return(
        <>
        <section id="home" className='page1'>
            <h2>Hi I am Orlando.</h2>
            <p>
             Full time tech passionated! 
            </p>
            <img id="profile-picture" src={picture} alt="Orlando picture"/>
        </section>
        </>
    )
}
