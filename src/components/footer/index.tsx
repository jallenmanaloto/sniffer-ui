import Link from "next/link";

type Link = {
  name: string;
  route: string;
}

export default function Footer() {
  const links = [
    {
      name: "Privacy Policy",
      route: "/privacy-policy"
    },
    {
      name: "Terms of Use",
      route: "/terms-of-use"
    },
    {
      name: "EULA",
      route: "/eula"
    },
  ];
  return (
    <footer className="border-t-2 py-4">
      <div className="footer-wrapper container mx-auto px-8 lg:px-36">
        <div className="sm:flex sm:gap-x-32 sm:justify-center sm:items-center">
          <div className="quick-links">
            <h3 className="text-base font-semibold">Quick Links</h3>
            <div className="links flex flex-col py-2">
              {links.map((link: Link, idx: number) => {
                return (
                  <Link key={idx} href={link.route}>
                    <h4 className="text-primary/80 cursor-pointer">{link.name}</h4>
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="copyright flex sm:justify-center py-3">
            <h4>© BaitSniffer 2024</h4>
          </div>
        </div>
      </div>
    </footer>
  )
}
