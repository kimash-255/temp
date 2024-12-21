import Link from "next/link";

const HeroA = () => {
  return (
    <div class="main-banner-breadcrum">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="banner-breadcrum">
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroA;
