import './Projects.css';

function Projects() {
    return (
      <div>
        <h3>Personal Projects</h3>
          <div>
                <a href="https://github.com/1jdsteele">
                  <p className="git-border">
                    Click here for my personal github
                  </p>
                </a>
          </div>
          <div>
            <h4>Portfolio Page</h4>
            <p>The website you are looking at! Made with React and hosted on netlify. No bootstrap.</p>
          </div>
          <div>
            <h4>
              <a href="https://ram-electronics.netlify.app/">
                RAM electronics
              </a>
            </h4>
            <h4>
              <a href="https://ram-electronics.netlify.app/">
                <img src="/RAM.png" alt="RAM electronics concept store screenshot" />
              </a>
            </h4>
            <p>An e-commerce store that sells electronics. Made in a group in a one week sprint. Built using full stack MERN.</p>
          </div>
          <div>
            <h4>
              <a href="https://pokemonbattleapp.netlify.app/">
                PokeBattle
              </a>
            </h4>
            <h4>
              <a href="https://pokemonbattleapp.netlify.app/">
                <img src="/poke.png" alt="Pokemon battle app screenshot" />
              </a>
            </h4>
            <p>A game where you choose Pokemon to see who will prevail in battle! Do you have what it takes to become a champion? Made with React calling the Pokemon API.</p>
          </div>
          <div>
            <h4>
              <a href="https://1jdsteele.github.io/MyPet">
                MyPet game
              </a>
            </h4>
            <h4>
              <a href="https://1jdsteele.github.io/MyPet/">
                <img src="/myPet.png" alt="myPet screenshot" />
              </a>
            </h4>
            <p>A static site game where you take care of your pet! Made with javascript, HTML, and CSS.</p>
          </div>
      </div>
    )
  }
  
  export default Projects;
  