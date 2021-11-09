import "./style.css"
const index = () => {
    return (
        <footer>
          <a
            href="https://github.com/betulayaz" target="_blank">
            <img
              src={`${process.env.PUBLIC_URL}/github.png`}
              alt="Github-icon"
            />
          </a>
        </footer>
      );
};

export default index

