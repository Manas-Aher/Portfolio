const Button = ({ text, className, id, onClick, href }) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e); // 🔁 Let parent handle it (e.g., resume download)
      return;
    } 
    
    if (id){
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault(); // prevent default for smooth scroll
        const offset = window.innerHeight * 0.15;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
        return;
      }
    }
  };
  return (
    <a onClick={handleClick} className={`${className ?? ""} cta-wrapper`} href={href}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};


export default Button;