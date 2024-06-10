import React from "react";
import "./Section1.css";
import HeroImage from "../Images/Hero Image.png";
import image2 from "../Images/image 2.png";
import goga1 from "../Images/4 1.png";
import goga2 from "../Images/4 2.png";
import goga3 from "../Images/4 1 (1).png";
import goga4 from "../Images/4 2 (1).png";
import goga5 from "../Images/9 1.png";
import goga6 from "../Images/4 3.png";
import goga7 from "../Images/11 1.png";
import goga8 from "../Images/11 2.png";
import goga9 from "../Images/5 1.png";
function Section1() {
  return (
    <>
      {/* Section1 */}
      <div className="outer">
        <div className="inner">
          <div className="navbar">
            <div className="empty"></div>
            <div className="logo">BANQUEE</div>
            <div className="menu-button">
              <i class="fa-solid fa-bars"></i>
            </div>
          </div>
          <div className="box">
            <div className="left">
              <i class="fa-solid fa-certificate"></i>
              <h1>
                EASY WAY TO <br />
                BANKING
              </h1>
              <p>
                We give you both the foundation and flexibility to <br />
                build and grow digital capabilities and deliver <br />
                customer experiences.
              </p>
              <div className="text">
                <h1>
                  GET STARTED &nbsp;
                  <i class="fa-solid fa-play">
                    &nbsp;
                    <i class="fa-solid fa-play"></i>
                  </i>
                </h1>
              </div>
            </div>
            <img src={HeroImage} alt="" />
          </div>
        </div>
      </div>
      {/* Section2 */}
      <div className="links">
        <img src={image2} alt="" />
      </div>
      {/* Section3 */}
      <div className="container">
        <div className="heading">
          <h1>
            ALL FEATURES YOU NEED <br /> IN ONE PLACE
          </h1>
        </div>
        <div className="first">
          <div className="box1 hoverEffect">
            <img src={goga1} alt="" />
            <h1>Secure Online Banking</h1>
          </div>
          <div className="box2 hoverEffect">
            <img src={goga2} alt="" />
            <h1 style={{ textAlign: "center" }}>
              Automate Bill <br />
              Payment
            </h1>
          </div>
        </div>
        <div className="first">
          <div className="box2 hoverEffect" style={{ padding: "2vw 5.5vw" }}>
            <img src={goga4} alt="" />
            <h1 style={{ textAlign: "center" }}>
              No Hidden <br />
              Fees
            </h1>
          </div>
          <div className="box1 hoverEffect">
            <img src={goga3} alt="" />
            <h1>Card Payment Anytime</h1>
          </div>
        </div>
      </div>
      {/* Section4 */}
      <div className="container1">
        <div className="white-box">
          <img src={goga5} alt="" />
          <div className="left">
            <h2>GO DIGITAL NOW</h2>
            <p>
              Our digital platform allows you to access your money from <br />
              anywhere, anytime. Which our innovative security features, <br />
              and first-in-class service, we combine the best of traditional{" "}
              <br />
              banking with a modern convenience of digital banking today
            </p>
            <div className="text">
              <h1>
                GET STARTED &nbsp;
                <i class="fa-solid fa-play">
                  &nbsp;
                  <i class="fa-solid fa-play"></i>
                </i>
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Section5 */}
      <div className="container2">
        <div className="heading">
          <h1>
            DESIGNED FOR BUSINESS <br />
            OF ALL SIZES
          </h1>
        </div>
        <div className="image-box">
          <div className="div1 hoverEffect">
            <img className="image-avtars" src={goga6} alt="" />
            <h3 style={{ textAlign: "center", marginTop: "2.5vw" }}>
              FOR SMALL BUSINESS
            </h3>
          </div>
          <div className="div2 hoverEffect">
            <img className="image-avtars" src={goga7} alt="" />
            <h3 style={{ textAlign: "center", marginTop: "3vw" }}>
              FOR STARTUPS
            </h3>
          </div>
          <div className="div2 hoverEffect">
            <img className="image-avtars" src={goga8} alt="" />
            <h3 style={{ textAlign: "center", marginTop: "3vw" }}>
              FOR ENTERPRISES
            </h3>
          </div>
        </div>
      </div>
      {/* Section6 */}
      <div className="container3">
        <div className="heading">
          <h1>WE TAKE BANKING PERSONALLY</h1>
        </div>
        <div className="bada-box">
          <div className="left-box">
            <div className="left-side">
              <h2>SAVE</h2>
              <p>
                We’re using technology to solve that by automating saving.{" "}
                <br />
                You set an amount to save and we takes care of the rest,
                <br /> prompt interest payout included.
              </p>
            </div>
            <div className="right-side">
              <h2>SPEND</h2>
              <p>
                We give you more than one way to pay easily, including a<br />{" "}
                widely accepted debit card issued in partnership with Visa,
                <br />
                quick web payments direct from your account.
              </p>
            </div>
            <div className="left-side">
              <h2>SEND</h2>
              <p>
                From international transfers to on-the-spot payments at <br />
                market stalls, we’ve simplified sending money so you don’t{" "}
                <br />
                need to think too much about it.
              </p>
            </div>
          </div>
          <div className="right-box">
            <img src={goga9} alt="" />
          </div>
        </div>
      </div>
      {/* Section7 */}
      <div className="container4">
        <div className="heading">
          <h2>TRUSTED BY PEOPLE ALL OVER THE WORLD</h2>
        </div>
        <div className="orange-box">
          <div className="dabba">
            <h2>SUPER USER FREINDLY</h2>
            <p>
              The UI is so intuitive that anyone can use it,
              <br /> without any knowledge on the system & I love the <br />
              financial reports. The tool automatically organizes <br />
              all data and gives us clarity on spend.
            </p>
            <div className="image-layout"></div>
          </div>
          <div className="dabba">
            <h2>SAVED HOURS EVERY WEEK</h2>
            <p>
              I have been saved so much time on tax <br />
              calculations. And it gives me reliable projections.I <br />
              love the financial reports. The tool automatically <br />
              organizes all data and gives us clarity on spend.
            </p>
            <div className="image-layout"></div>
          </div>
        </div>
      </div>
      {/* Section8 */}
      <div className="container5">
        <div className="heading">
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
        </div>
        <div className="dibba">
          <div className="teda-dibba">
            <h2>HOW MUCH WOULD IT REQUIRE TO OPEN AN ACCOUNT?</h2>{" "}
            <i class="fa-solid fa-plus"></i>
          </div>
          <div className="teda-dibba">
            <h2>IS THERE A MINIMUM OPERATIONAL COST?</h2>{" "}
            <i class="fa-solid fa-plus"></i>
          </div>
          <div className="teda-dibba">
            <h2>WHERE CAN I USE MY DEBIT CARDS?</h2>{" "}
            <i class="fa-solid fa-plus"></i>
          </div>
          <div className="teda-dibba">
            <h2>HOW MUCH DO I GET AS INTEREST ON SAVINGS? </h2>
            <i class="fa-solid fa-plus"></i>
          </div>
        </div>
      </div>
      {/* Section9 */}
      <div className="container6">
        <div className="subscribe-box">
          <h2>SUBSCRIBE TO OUR NEWSLETTER FOR A 10% BONUS ON TRANSACTIONS</h2>
          <div className="email">
            <input type="text" placeholder="Your Email Address" />
            <h3>SUBSCRIBE</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;
