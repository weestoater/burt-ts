import React from "react";

import NextJSLogo from "../../assets/nextjs-logo.png";

export default function NextThingsPost() {
  return (
    <div className="col-md-6 col-sm-6 mb-4">
      <div className="card">
        <div className="card-header">
          <i className="bi bi-binoculars" />
          NextJS things Next...
        </div>
        <div className="card-body">
          <img src={NextJSLogo} alt="NextJS logo" className="circle-right" />
          <p>
            On a recent works 'global hackathon' I did a small PoC using NextJS
            and Bootstrap. I really wasn't sure what to expect with NextJS, but
            somethings were really interesting and others very confusing /
            annoying.
          </p>
          <p>
            The way that NextJs looks after the '<i>server-side</i>'{" "}
            <code>api</code> is very neat - and extensible. I was easily able to
            hook up my data sets and get the PoC showing actual data. This was
            one of the main issues I was aiming to overcome, so such a quick-win
            was really appreciated.
          </p>

          <p>
            Integrating <b>agCharts</b> to show the data was also a breeze,
            because of the support for the ReactJS libraries. Once again, the
            data was being rendered visually really swiftly and I was flying
            through my todo list.
          </p>

          <p>
            Integrating <b>Bootstrap</b> libraries on the other hand was{" "}
            <b>not</b> intuitive / as easy as I had expected it to be. There was
            a <b>lot more googling</b> and <b>stackoverflow</b> searching
            required to find a solution that DID work, rather than the 5 mins it
            takes to implement in a ReactJS project.
          </p>

          <p>
            Overall, I'm not sure how I feel about the NextJS framework, but I
            know several people who swear by it - and they are people I trust
            and respect - so I am probably just being picky. A couple of good
            pluralsight tutorials should probably get me through the learning
            curve and over the top of whatever issues I'm likely to encounter.{" "}
          </p>

          <p>Wish me luck - I'm going to need it.</p>
        </div>
      </div>
    </div>
  );
}
