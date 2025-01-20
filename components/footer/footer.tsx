import FooterDate from "./footer-date";

const Footer = () => {
  return (
    <footer className="bg-accent text-gray-1 text-[12px] py-24">
      <div className="grid grid-cols-[160px_500px_auto]">
        <div className="grid grid-cols-[auto_1fr_auto] gap-x-4 items-center px-px col-start-2">
          <span>
            Last updated on <FooterDate />
          </span>
          <div className="h-px bg-gray-2/40" aria-hidden />
          <p className="whitespace-nowrap">With love, from Toronto, Canada.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
