import "./GameWarriorSection.css";

import leftImg from "../assets/leftt.png";
import post1 from "../assets/post1.jpg";
import post2 from "../assets/post2.jpg";
import post3 from "../assets/post3.jpg";

import av1 from "../assets/avatar1.jpg";
import av2 from "../assets/avatar2.jpg";
import av3 from "../assets/avatar3.jpg";
import av4 from "../assets/avatar4.jpg";

function GameWarriorSection() {
  return (
    <section className="gw-section">
      <div className="gw-container">

        {/* LEFT */}
        <div className="gw-left">
          <h2><span>Game</span> Warrior</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <img src={leftImg} className="gw-character" />
        </div>

        {/* MIDDLE */}
        <div className="gw-middle">
          <h3>Latest Posts</h3>

          <div className="post-item">
            <img src={post1} />
            <div>
              <span>June 21, 2018</span>
              <p>Lorem ipsum dolor sit amet</p>
              <small>By Admin</small>
            </div>
          </div>

          <div className="post-item">
            <img src={post2} />
            <div>
              <span>June 21, 2018</span>
              <p>Lorem ipsum dolor sit amet</p>
              <small>By Admin</small>
            </div>
          </div>

          <div className="post-item">
            <img src={post3} />
            <div>
              <span>June 21, 2018</span>
              <p>Lorem ipsum dolor sit amet</p>
              <small>By Admin</small>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="gw-right">
          <h3>Top Comments</h3>

          <div className="comment">
            <img src={av1} />
            <p><b>James Smith</b> on Lorem ipsum</p>
            <span>June 21, 2018</span>
          </div>

          <div className="comment">
            <img src={av2} />
            <p><b>James Smith</b> on Lorem ipsum</p>
            <span>June 21, 2018</span>
          </div>

          <div className="comment">
            <img src={av3} />
            <p><b>James Smith</b> on Lorem ipsum</p>
            <span>June 21, 2018</span>
          </div>

          <div className="comment">
            <img src={av4} />
            <p><b>James Smith</b> on Lorem ipsum</p>
            <span>June 21, 2018</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default GameWarriorSection;
