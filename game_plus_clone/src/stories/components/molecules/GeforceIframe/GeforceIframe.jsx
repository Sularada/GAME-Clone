const GeforceIframe = () => {
  return (
    <div className="d-flex justify-content-center my-5">
      <iframe
        width="800"
        height="400"
        src="https://www.youtube.com/embed/5pmI0MyI7NQ?si=eo4wS6JGupZQyzHh&amp;start=5"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default GeforceIframe;
