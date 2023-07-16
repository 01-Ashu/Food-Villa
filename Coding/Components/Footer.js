// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/Ashutosh Kumar Pal/"
        target="_blank"
        title="Ashutosh Kumar Pal  Linkedin Profile"
      >
        Ashutosh Kumar Pal 
      </a>
      <i className="fa-solid fa-copyright"></i>
        {year}
        <strong>
          Food<span>Fire</span>
        </strong>
    </div>
  );
};

export default Footer;
