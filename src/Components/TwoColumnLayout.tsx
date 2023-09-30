import { useLayoutEffect, useRef } from "react";
import "./TwoColumnLayout.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import DetailCard from "./DetailCard";
import { details } from "../assets/cases";
import { faCat, faEarth } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TwoColumnLayout() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Select all the details sections and turn them into arrays
      const details: GSAPStaggerVars[] = gsap.utils.toArray(
        ".desktopContentSection:not(:first-child)"
      );

      // Select all the photos and turn them into arrays
      const photos: GSAPStaggerVars[] = gsap.utils.toArray(
        ".desktopPhoto:not(:first-child)"
      );

      //   Set the initial position of the photos
      gsap.set(photos, { yPercent: 101 });

      //
      const allPhotos: GSAPStaggerVars[] = gsap.utils.toArray(".desktopPhoto");

      // create
      let mm = gsap.matchMedia();

      // add a media query. When it matches, the associated function will run
      mm.add("(min-width: 600px)", () => {
        // this setup code only runs when viewport is at least 600px wide

        ScrollTrigger.create({
          trigger: rootRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: ".right",
          // markers: {
          //   startColor: "dodgerBlue",
          //   endColor: "pink",
          // },
        });

        //create scrolltrigger for each details section
        //trigger photo animation when headline of each details section
        //reaches 80% of window height
        details.forEach((detail: any, index) => {
          let headline = detail.querySelector("h1");
          let animation = gsap
            .timeline()
            .to(photos[index], { yPercent: 0 })
            .set(allPhotos[index], { autoAlpha: 0 });

          ScrollTrigger.create({
            trigger: headline,
            start: "top 80%",
            end: "top 50%",
            animation: animation,
            scrub: true,
            // markers: {
            //   startColor: "blue",
            //   endColor: "coral",
            // },
          });
        });
      });
    }, [rootRef]);

    return () => ctx.revert();
  }, []);

  const renderDesktopContentSections = () => {
    return details.map((detail) => {
      return (
        <div className="desktopContentSection" key={detail.name}>
          <h1>{detail.name}</h1>
          <p>{detail.description}</p>
          <span className="buttons-ctn">
            <a
              className="detail-link"
              href={detail.url}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEarth} size="lg" />
            </a>
            <a
              className="detail-link"
              href={detail.github}
              target="_blank"
              rel="noreferrer"
            >
              {`< / >`}
            </a>
          </span>
        </div>
      );
    });
  };

  const renderMobileContentSections = () => {
    return details.map((detail) => {
      return (
        <div className="mobileContentSection" key={detail.name}>
          <h1>{detail.name}</h1>
          <p>{detail.description}</p>
          <span>
            <button className="detail-button">
              <a href={detail.url} target="_blank" rel="noreferrer">
                Website
              </a>
            </button>
            <button className="detail-button">
              <a href={detail.github} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faCat} />
              </a>
            </button>
          </span>
        </div>
      );
    });
  };

  return (
    <>
      <div className="gallery" ref={rootRef}>
        <div className="left">
          <div className="desktopContent">{renderDesktopContentSections()}</div>
        </div>

        <div className="right">
          {/* <!-- mobile content --> */}
          <div className="mobileContent">{renderMobileContentSections()}</div>

          <div className="desktopPhotos">
            {details.map((detail, index) => {
              return (
                <DetailCard index={index} detail={detail} key={detail.name} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default TwoColumnLayout;
