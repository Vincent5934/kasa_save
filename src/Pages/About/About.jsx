// COMPONENTS
import Collapse from "../../Components/Collapse/Collapse";
import HomeHeader from "../../Components/Header/Homeheader";
// CSS
import "../About/about.css"
// ASSETS & DATAS
import aboutData from "../../data/aboutData.json"
import aboutImageHeader from "../../Assets/aboutheader.jpg"

const About = () => {
  return (
    <div className="about_page">
      <HomeHeader imageSrc={aboutImageHeader} />
      <div className="about__container">
        {aboutData.map(data => {
          return (
            <div key={data.id}>
              <Collapse title={data.title} content={data.content} />
            </div>
          )
        })}
      </div>
    </div>
  );
}
export default About;