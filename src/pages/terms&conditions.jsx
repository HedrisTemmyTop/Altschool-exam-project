import React from "react";
import { Helmet } from "react-helmet";
const Terms = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Term&Condition</title>
      </Helmet>

      <div
        style={{ padding: "4rem", flexBasis: "50%", boxSizing: "border-box" }}
      >
        <p>
          Help protect your website and its users with clear and fair website
          terms and conditions. These terms and conditions for a website set out
          key issues such as acceptable use, privacy, cookies, registration and
          passwords, intellectual property, links to other sites, termination
          and disclaimers of responsibility.
        </p>
        <br />
        <p>
          Terms and conditions are used and necessary to protect a website owner
          from liability of a user relying on the information or the goods
          provided from the site then suffering a loss. Making your own terms
          and conditions for your website is hard, not impossible, to do.
        </p>
        <br />
        <p>
          {" "}
          It can take a few hours to few days for a person with no legal
          background to make. But worry no more; we are here to help you out.
          All you need to do is fill up the blank spaces and then you will
          receive an email with your personalized terms and conditions.
        </p>
        <br /> Looking for a Privacy Policy? Check out Privacy Policy Generator.
        The accuracy of the generated document on this website is not legally
        binding. Use at your own risk.
      </div>
    </React.Fragment>
  );
};

export default Terms;
