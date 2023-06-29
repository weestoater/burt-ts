import React from "react";
import vscodeImg from "../../assets/vs-code.png";

export default function AboutContent() {
  return (
    <div className="card mb-4">
      <div className="card-header">
        <i className="bi bi-wrench-adjustable-circle" />
        what is burtware.com ?
      </div>
      <div className="card-body">
        <p>
          <img
            src={vscodeImg}
            alt="screenshot of VS Code editor with this page of code on view"
            className="img-thumbnail"
          />
        </p>
        <p>
          burtware is the nickname I've used for my personal 'playgrounds'
          online since 1999, when I first cut my teeth in <code>html</code>{" "}
          &amp; <code>design</code>. Since then I've gone through a number of
          different efforts.
        </p>
        <ul>
          <li>A hand rolled CMS on php</li>
          <li>Numerous versions of WordPress</li>
          <li>An umbraco site - didn't last long</li>
          <li>A few Angular / AngularJS versions</li>
          <li>A couple of React sites</li>
        </ul>
        <p>
          This current itteration is <code>ReactJS</code>, <code>SASS</code> and
          hosted on <code>AWS</code>. It is a site for me to play with and learn
          more about <code>ReactJS</code> and <code>AWS</code>, as I use both
          technologies in my day job, as well as Angular; Node; Cypress and
          multiple CSS frameworks.
        </p>
        <p>
          I also want to use it to trial different experiments and implement the
          fabulous React Testing Library based on the amazing{" "}
          <a
            href="http://www.testingjavascript.com"
            target="_blank"
            rel="noreferrer"
          >
            testing javascript
          </a>{" "}
          course from <b>Kent C. Dodds</b>. I work very heavily in Accessibility
          and I would like to flex some testing muscles too.
        </p>
      </div>
    </div>
  );
}
