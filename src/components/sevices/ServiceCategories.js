import Link from "next/link";

const ServiceCategories = ({ items }) => (
  <div className="recent-course-box">
    <div className="courses-sidebar-title">
      <h3 className="h3-title">Service Categories</h3>
    </div>
    <ul>
      {items?.slice(0, 4).map((relatedService) => (
        <li key={relatedService?.slug}>
          <div className="recent-course-img">
            <img
              src={relatedService?.image}
              alt={relatedService?.title}
              style={{ width: "200px", height: "auto" }}
            />
          </div>
          <div className="recent-course-text">
            <Link href={`/${relatedService?.href}`}>
              <span>{relatedService?.title}</span>
              <p>{relatedService?.description}</p>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default ServiceCategories;
