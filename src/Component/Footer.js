import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <div id="footer">
          <div className="footer_btm">
            <div className="foot-link">
              <div className="link-group">
                <ul>
                  <li>
                    <a href="/" title="Read novel online">
                      Read novel online
                    </a>
                  </li>
                  <li>
                    <a href="/" title="Read novel">
                      Read novel
                    </a>
                  </li>
                </ul>
              </div>
              <div className="clearfix" />
            </div>
            <div className="footer_top_content">
              <p>
                Read novel online for free in high quality and most full at
                NovelOpen.com
              </p>
              <p>
                Email:{" "}
                <a
                  href="/cdn-cgi/l/email-protection"
                  className="__cf_email__"
                  data-cfemail="2e1c1a195a5c5b574b406e49434f4742004d4143"
                >
                  bakhjem@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
