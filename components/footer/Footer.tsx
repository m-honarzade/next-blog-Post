import xLogo from "@/public/x.png";
import telegramLogo from "@/public/telegram.png";
import instagramLogo from "@/public/instagram.png";
import youtubeLogo from "@/public/youtube.png";
import Container from "../Container";
import Logo from "../navbar/Logo";
import { cn } from "@/libs/utils";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  // social media icons
  const socialMedia = [
    {
      label: "instagram",
      logo: instagramLogo,
      size: "size-8",
      href: "https://instagram.org",
    },
    {
      label: "telegram",
      logo: telegramLogo,
      size: "size-8",
      href: "https://telegram.com",
    },
    {
      label: "xLogo",
      logo: xLogo,
      size: "size-6",
      href: "https://twitter.com",
    },
    {
      label: "youtube",
      logo: youtubeLogo,
      size: "size-10",
      href: "https://youtube.com",
    },
  ];
  // print social icons in console
  // console.log(socialMedia);

  return (
    <footer className="mt-8 border-t bg-gray-800">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-y-8 py-8 text-white">
          <div className="flex flex-col gap-y-4 items-center md:items-start">
            <div className="flex items-center gap-x-3">
              <Logo className="invert" />
              <h2 className="text-3xl font-bold">نکست بلاگ</h2>
            </div>
            <p className="w-96 text-balance text-center text-gray-300 md:text-right">
              سایت نکست بلاگ در زمینه تولید محتوا است.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-y-4">
            <div className="flex items-center justify-center gap-x-4">
              {socialMedia.map((item) => (
                <div key={item.label} className={cn("relative", item.size)}>
                  <Link href={item.href}>
                    <Image
                      src={item.logo}
                      alt={item.label}
                      fill
                      sizes="100vw"
                      className="opacity-50 hover:opacity-100 invert"
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div className="">
              <p className="text-gray-500">
                .Copyright &copy; | All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
