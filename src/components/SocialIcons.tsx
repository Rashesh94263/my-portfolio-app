const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.icon}>
      <a
        className="icon"
        style={styles.icon}
        href="https://github.com/Rashesh94263"
        target="_blank"
        rel="noreferrer"
      >
        <i
          className="fa-brands fa-github"
          aria-hidden="true"
          title="Rashesh Dobariya' GitHub Profile"
        ></i>
      </a>
      <a
        className="icon"
        style={styles.icon}
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/rashesdobariya/"
      >
        <i
          className="fa-brands fa-linkedin"
          aria-hidden="true"
          title="Rashesh Dobariya' LinkedIn Profile"
        ></i>
      </a>
    </div>
  );
};

export default SocialIcons;
