import React from "react";
import { Container } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
const Careers = () => {
  return (
    <Container className="mb-4">
      <section className="my-4">
        <div className="d-flex justify-content-between">
          <h2 className="text-capitalize">careers at track games</h2>
          <div className="d-flex gap-4">
            <div className="text-capitalize d-flex align-items-center">
              who we are <IoIosArrowDown className="ml-4" />
            </div>
            <div className="text-capitalize d-flex align-items-center">
              Job available <IoIosArrowDown className="ml-4" />
            </div>
          </div>
        </div>
      </section>

      <div className="jumbotron text-center">
        <h1 className="display-4">Join the Gaming Revolution!</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content
          or information.
        </p>
        <hr className="my-4" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      </div>
    </Container>
  );
};

export default Careers;
