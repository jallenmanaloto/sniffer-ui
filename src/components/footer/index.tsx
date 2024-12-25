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
  ];
  return (
    <footer className="border-t-2 py-8">
      <div className="footer-wrapper container mx-auto px-8 lg:px-36">
        <div className="quick-links">
          <h3 className="text-base font-semibold">Quick Links</h3>
          <div className="links flex flex-col gap-4">
            {links.map((link: Link, idx: number) => {
              return (
                <Link key={idx} href={link.route}>
                  <h4 className="py-2 text-primary/80 cursor-pointer">{link.name}</h4>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
