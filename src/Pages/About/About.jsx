import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Collapse from "../../Components/Collapse/Collapse";
import aboutData from "../../data/aboutData.json"
import "../About/about.css"
import aboutImageHeader from "../../Assets/aboutheader.jpg"
import HomeHeader from "../../Components/Header/Homeheader";

const About = () => {
  return (
    <>
      <div className="about_page">
        <Navbar />
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
      <Footer />
    </>
  );
}
export default About;