import React, { Component } from "react";
import { Icon } from "@iconify/react";
import profilepics from "../assets/img/dalyxos.png";
import cIcon from '@iconify-icons/logos/c';
import cPlusplus from '@iconify-icons/logos/c-plusplus';
import linuxTux from '@iconify-icons/logos/linux-tux';
import pythonIcon from '@iconify-icons/logos/python';


class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "dalyxos.jpg";
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-4">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    src={profilepics}
                    alt="Avatar placeholder"
                  />
                  <Icon
                    icon={cIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={cPlusplus}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={linuxTux}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={pythonIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
