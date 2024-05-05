import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import "/home/shyam/Documents/Projects/React/my-react/src/assets/Styles/footer.css";
import { FaTwitter } from "react-icons/fa";
const Footer =()=>{

    return (
      <div className="Footer">
        <div className="sub-footer">
          <div className="first-part">
            <img src="https://www.skillto.in/images/skillto-logo.svg" alt="" />
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
              debitis sequi nostrum ea repellat impedit delectus perferendis
              architecto ipsa, illo eos cumque illum consequuntur voluptatem
              exercitationem dignissimos. Nulla, deserunt ea?
            </div>
          </div>
          <div className="second-part">
            <div className="foo-title">Programs</div>
            <div className="line-bar"></div>
            <div>UI/UX Design</div>
            <div>UI/UX Design</div>
            <div>UI/UX Design</div>
            <div>UI/UX Design</div>
            <div>UI/UX Design</div>
          </div>
          <div className="second-part">
            <div className="foo-title">Programs</div>
            <div className="line-bar"></div>
            <div>UI/UX Design</div>
            <div>UI/UX Design</div>
            <div>UI/UX Design</div>
            <div>UI/UX Design</div>
            <div>UI/UX Design</div>
          </div>
          <div className="second-part">
            <div className="foo-title">Programs</div>
            <div className="line-bar"></div>
            <div>UI/UX Design</div>
            <div>UI/UX Design</div>
            <div>UI/UX Design</div>
            <div>UI/UX Design</div>
            <div>UI/UX Design</div>
          </div>
          <div className="second-part">
            <div className="foo-title">Programs</div>
            <div className="line-bar"></div>
            <div>UI/UX Design</div>
            <div>UI/UX Design</div>
            <div>UI/UX Design</div>
            <div>UI/UX Design</div>
            <div>UI/UX Design</div>
          </div>
        </div>
        <div className="line-bar"></div>
        <div className="last-footer">
          <div className="copyright">&copy; 2024 Company</div>
          <div>
            <FaInstagramSquare className="icons" />
            <FaFacebookSquare className="icons" />
            <FaTwitter className="icons"  />
          </div>
        </div>
      </div>
    );
}

export default Footer;