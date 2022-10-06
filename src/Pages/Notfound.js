const Notfound = () => {
  return (
    <div className="error-container">
        <div className="hjk">
      <img src="https://i.imgur.com/J2pPJxt.png" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 30,
          alignItems: "center",
        }}
      >
        <h1>Page Not found</h1>
        <i className="fa fa-exclamation"></i>
      </div>
      </div>
    </div>
  );
};

export default Notfound;
