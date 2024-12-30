import Image from "next/image";
import Link from "next/link";

const Solutions = () => {
  return (
    <section className="main-course-category">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="course-category-title">
              <h2 className="h2-subtitle">Our Solutions</h2>
              <h2 className="h2-title">Explore Our Products</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="course-category-box">
              <div className="course-category-content">
                <Link href="/services">
                  <h3 className="h3-title">Graphic Design</h3>
                </Link>
                <p>
                  We create stunning visuals and unique brand
                  <br />
                  identities tailored to your business needs.
                </p>
              </div>
              <div className="course-category-icon">
                <Image
                  className="dis-yes"
                  src="/assets/images/mslabdesigns-graphic-design.png"
                  alt="Graphic Design Icon"
                  width={50}
                  height={50}
                />
                <Image
                  className="dis-no"
                  src="/assets/images/mslabdesigns-graphic-design-w.png"
                  alt="Graphic Design Icon (White)"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="course-category-box">
              <div className="course-category-content">
                <Link href="/services">
                  <h3 className="h3-title">Digital Marketing</h3>
                </Link>
                <p>
                  Boost your online presence and <br />
                  effectively reach your target audience.
                </p>
              </div>
              <div className="course-category-icon">
                <Image
                  className="dis-yes"
                  src="/assets/images/mslabdesigns-digital-marketing.png"
                  alt="Digital Marketing Icon"
                  width={50}
                  height={50}
                />
                <Image
                  className="dis-no"
                  src="/assets/images/mslabdesigns-digital-marketing-w.png"
                  alt="Digital Marketing Icon (White)"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="course-category-box">
              <div className="course-category-content">
                <Link href="/services">
                  <h3 className="h3-title">Graphic Design Classes</h3>
                </Link>
                <p>
                  Learn professional graphic design skills <br />
                  to enhance your creative career.
                </p>
              </div>
              <div className="course-category-icon">
                <Image
                  className="dis-yes"
                  src="/assets/images/mslabdesigns-design-classes.png"
                  alt="Graphic Design Classes Icon"
                  width={50}
                  height={50}
                />
                <Image
                  className="dis-no"
                  src="/assets/images/mslabdesigns-design-classes-w.png"
                  alt="Graphic Design Classes Icon (White)"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="course-category-box">
              <div className="course-category-content">
                <Link href="/services">
                  <h3 className="h3-title">Social Media</h3>
                </Link>
                <p>
                  Create compelling content and manage <br /> your social
                  platforms effectively.
                </p>
              </div>
              <div className="course-category-icon">
                <Image
                  className="dis-yes"
                  src="/assets/images/mslabdesigns-social-media.png"
                  alt="Social Media Icon"
                  width={50}
                  height={50}
                />
                <Image
                  className="dis-no"
                  src="/assets/images/mslabdesigns-social-media.png"
                  alt="Social Media Icon (White)"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="course-category-box">
              <div className="course-category-content">
                <Link href="/services">
                  <h3 className="h3-title">Website Development</h3>
                </Link>
                <p>
                  Build dynamic, visually appealing, <br /> and user-friendly
                  websites.
                </p>
              </div>
              <div className="course-category-icon">
                <Image
                  className="dis-yes"
                  src="/assets/images/mslabdesigns-web-dev.png"
                  alt="Website Development Icon"
                  width={50}
                  height={50}
                />
                <Image
                  className="dis-no"
                  src="/assets/images/mslabdesigns-web-dev-w.png"
                  alt="Website Development Icon (White)"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="course-category-box">
              <div className="course-category-content">
                <Link href="/services">
                  <h3 className="h3-title">Content Writing</h3>
                </Link>
                <p>
                  "Create high-quality, engaging, <br />
                  and SEO-friendly content.{" "}
                </p>
              </div>
              <div className="course-category-icon">
                <Image
                  className="dis-yes"
                  src="/assets/images/mslabdesigns-virtual-assistant.png"
                  alt="Virtual Assistant Icon"
                  width={50}
                  height={50}
                />
                <Image
                  className="dis-no"
                  src="/assets/images/mslabdesigns-virtual-assistant-w.png"
                  alt="Virtual Assistant Icon (White)"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Solutions;
