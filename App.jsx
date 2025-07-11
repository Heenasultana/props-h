import './App.css';
import ComponentThree from './component/ComponentThree';

function App() {
  return (
    <div className="app-container">

      {/* EK VILLAIN */}
      <div className="section">
        <ComponentThree 
          name="Siddharth Malhotra" 
          Role="Hero" 
          movie="Ek Villain"
          image="https://i.pinimg.com/1200x/70/4b/6b/704b6b1b4f2109c4971544565877966c.jpg" 
        />
        <ComponentThree 
          name="Shraddha Kapoor" 
          Role="Heroine"
          movie="Ek Villain"
          image="https://i.pinimg.com/736x/77/f4/e8/77f4e87685e4cdfa7a3cbf869674ad27.jpg" 
        />
        <ComponentThree 
          name="Riteish Deshmukh" 
          Role="Villain" 
          movie="Ek Villain"
          image="https://im.rediff.com/movies/2014/jun/26riteish-deshmukh5.jpg" 
          />
          <p className="movie-caption">
  <strong>Ek Villain</strong> — A story where love softens the darkest hearts, but fate writes a tragic end. Every hero hides pain, every villain has a reason.
</p>

      </div>


      {/* AASHIQUI 2 */}
      <div className="section">
        <ComponentThree 
          name="Aditya and shraddha    but" 
          Role="Hero and Heroine" 
          movie="Aashiqui 2"
          image="https://simplyamina.wordpress.com/wp-content/uploads/2018/04/7734bc09-f42f-4fa3-bd64-3ac3fe831d44.jpeg" 
        />
        <ComponentThree 
          name="Rahul and Arohi Foreverrr" 
          Role="Lovers / Couple" 
          movie="Aashiqui 2"
          image="https://www.masala.com/cloud/2025/04/01/4pcwQHUt-aditya-roy-kapur-shraddha-kapoor-aashiqui2-1200x900.jpg" 
        />
        <p className="movie-caption">
  <strong>Aashiqui 2</strong> — A haunting romance wrapped in music, where rising love drowns in falling silence. Their voices echoed what hearts couldn’t say.
</p>

      </div>

      {/* STUDENT OF THE YEAR */}
      <div className="section">
        <ComponentThree 
          name="Three Pookies" 
          Role="Main Characters" 
          movie="Student of the Year"
          image="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201301/soty_660_013113032511.jpg" 
        />
        <ComponentThree 
          name="Abhiii" 
          Role="Charming Hero" 
          movie="Student of the Year"
          image="https://i.pinimg.com/736x/04/04/d1/0404d16bda13ea4126fde3ce4fa58ec0.jpg" 
        />
        <ComponentThree 
          name="Shanaya" 
          Role="Stylish Diva" 
          movie="Student of the Year"
          image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgj4t_v2_RkziX9_abT9dfVV0hezwa3TkeJ4jsaIukam3E-2rhwbblkfyLfCpuGEN_-1shvlRG_rITGAWK7bFQGxUE0bFg55AAMrypABzTzKbXjRT6-4klJBrqxrDQkcEj75dslvXrLfGB3/s1600/Alai+pics.jpg" 
        />
        <ComponentThree 
          name="The Kukad Kamaldaa" 
          Role="Fun & Laughs" 
          movie="Student of the Year"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXd7YpsekW2-ahIChfHcAEiBjWXI6eCO0oIQ&s" 
        />
        <ComponentThree 
          name="Rohaannnn" 
          Role="Supportive friend" 
          movie="Student of the Year"
          image="https://bollyspice.com/wp-content/uploads/2012/09/12sep_Varun-SRK.jpeg" 
        />
        <p className="movie-caption">
  <strong>Student of the Year</strong> — Glam, rivalry, friendship, and drama. A campus where hearts race faster than exams — and love changes everything.
</p>
    </div>
      {/* SHERSHAAH*/}
      <div className="section">
    <ComponentThree 
          name="Siddharth malhotra" 
          Role="Hero-army" 
          movie="Shershaah"
          image="https://w0.peakpx.com/wallpaper/960/324/HD-wallpaper-shershaah-head-sidharth-malhotra-sid.jpg" 
        />
        <ComponentThree 
          name="kiara advani malhotra" 
          Role="Actress-the og wife" 
          movie="Shershaah"
          image="https://w0.peakpx.com/wallpaper/495/694/HD-wallpaper-kiara-advani-head-shershaah.jpg" 
        />
        <ComponentThree 
          name="Story of true loveeee" 
          Role="a patient soul waiting to get the bestt" 
          movie="Shershaah"
          image="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202405/kiara-advani--sidharth-malhotra-204944418-3x4.jpg?VersionId=uNphGKKrrUnjPrHyn_2QZw054KA33C1U" 
  
          />
        <p className="movie-caption">
  <strong>Shershaah</strong> — Not just a war story, but a heartbeat of courage and love.  
  He said, "Yeh dil maange more," and gave it all — for his country, for his promise, and for the one who waited forever. 🇮🇳
</p>
    </div>
    </div>
  )
  }

export default App;
