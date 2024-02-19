import "./location.scss";

const Location = () => (
  <>
    <a name="location"></a>
    <div className="container-location">
      <h2 className="location_tittle" style={{ textAlign: "center" }}>
        WHERE WILL YOU FIND ME
      </h2>
      <iframe
        src="https://maps.google.com/maps?q=54.534278, 17.743194&z=15&output=embed"
        width="100%"
        height="600px"
      ></iframe>
    </div>
  </>
);

export default Location;
