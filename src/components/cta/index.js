import Image from "next/image";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="main-cta">
      <div className="container">
        <div className="row align-items-center cta-bg">
          <div className="cta-bg-img">
            <img src="/assets/images/cta-bg-img.png" alt="Background" />
          </div>
          <div className="col-lg-6">
            <div className="cta-title">
              <h2 className="h2-title"> Let’s bring your vision to life.</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cta-btn">
              <Link href="/contact">
                <div className="sec-btn">Consult Us Now</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
