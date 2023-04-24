const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center  px-6 py-12 relative z-10">
      <p className="text-center text-black ">
        Copyright © {new Date().getFullYear()} All rights reserved | This
        project is made with{' '}
        <span style={{ color: 'tomato', fontWeight: 'bold', fontSize: '24px' }}>
          ♡
        </span>{' '}
        by{' '}
        <a
          href="https://portfolio-mohelmy.vercel.app/"
          target="_blank"
          style={{ fontWeight: 'bold', color: 'tomato' }}
        >
          Mo.Helmy
        </a>
      </p>
    </footer>
  );
};

export default Footer;
