import React from "react";
import { Disclosure } from "@headlessui/react";
import Container from "@components/container";
import Link from "next/link";

export default function Navbar() {
  const leftmenu = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "About",
      href: "/about"
    },
    {
      label: "Contact",
      href: "/contact"
    }
  ];

  const rightmenu = [
    {
      label: "Linkedin",
      href: "https://www.linkedin.com/in/p03goswami/",
      external: true
    },
    {
      label: "Github",
      href: "https://github.com/botprogrammer",
      external: true
    },
    {
      label: "Portfolio",
      href: "https://pranavgoswami.netlify.app/",
      external: true
    }
  ];

  const mobilemenu = [...leftmenu, ...rightmenu];

  return (
    <Container>
      <nav>
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap justify-between md:gap-10 md:flex-nowrap">
                <div className="flex-col items-center justify-start order-1 hidden w-full md:flex md:flex-row md:justify-end md:w-auto md:order-none md:flex-1">
                  {leftmenu.map((item, index) => (
                    <Link href={item.href} key={index}>
                      <a className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500">
                        {item.label}
                      </a>
                    </Link>
                  ))}
                </div>
                <div className="flex justify-between items-center w-full md:w-auto">
                  <Link href="/">
                    <a className="w-28 dark:hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Layer_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 304.1 130.9"
                        style={{
                          enableBackground: "new 0 0 304.1 130.9"
                        }}
                        xmlSpace="preserve">
                        <style
                          type="text/css"
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n\t.st0{enable-background:new    ;}\n\t.st1{fill:#FF1A75;}\n"
                          }}
                        />
                        <g className="st0">
                          <path
                            className="st1"
                            d="M32.2,85.5c-0.4,3.1-1.1,5.7-1.9,7.9c-0.8,2.2-1.8,3.9-3,5.3c-1.2,1.4-2.5,2.4-4.1,3c-1.5,0.6-3.2,0.9-5,0.9   c-2.6,0-5-0.8-7.2-2.3c-2.2-1.5-4.2-3.7-5.8-6.7c-1.6-3-2.9-6.6-3.8-11S0,73.1,0,67.3c0-6.1,0.6-11.9,1.8-17.6c1.2-5.7,2.8-11,5-16   c2.2-5,4.7-9.5,7.8-13.7c3-4.1,6.4-7.7,10.1-10.6c3.7-2.9,7.8-5.2,12.1-6.9C41.1,0.8,45.7,0,50.4,0c4.1,0,7.8,0.6,11.2,1.8   c3.4,1.2,6.3,2.9,8.7,5.1c2.4,2.2,4.3,4.7,5.6,7.7s2,6.2,2,9.6c0,4.2-0.6,8-1.7,11.6c-1.1,3.6-2.7,6.9-4.8,9.8c-2,3-4.5,5.6-7.3,8   c-2.8,2.3-5.9,4.3-9.2,5.9c-3.3,1.6-6.8,2.9-10.4,3.8c-3.7,0.9-7.4,1.4-11.1,1.5c-0.1,4.9-0.2,9.1-0.4,12.5   C32.8,80.7,32.5,83.5,32.2,85.5z M21.9,60.6c0.2,0.1,0.4,0.2,0.7,0.2c0.2,0.1,0.5,0.2,0.9,0.2c0.3,0.1,0.7,0.2,1.2,0.2   c-0.1-4.9-0.2-9.5-0.3-13.6c-0.1-4.1-0.2-7.7-0.3-10.8c-0.2-3.6-0.3-6.8-0.4-9.7c0.3-0.2,0.6-0.4,0.9-0.6c0.3-0.2,0.7-0.3,1.1-0.4   c0.4-0.1,1-0.2,1.6-0.2c1.8,0,3.3,0.3,4.4,1s1.7,1.8,1.7,3.3c0,6.5,0,12.4,0,17.6c0,5.2,0,9.9-0.1,14c5.2,0,9.9-1,14.1-3   c4.2-2,7.8-4.6,10.8-7.9c3-3.3,5.3-7.1,6.9-11.4c1.6-4.3,2.4-8.8,2.4-13.5c0-3-0.4-5.9-1.2-8.6c-0.8-2.7-2-5.1-3.7-7.1   c-1.7-2-3.7-3.7-6.3-4.9c-2.5-1.2-5.5-1.8-8.9-1.8c-3.4,0-6.8,0.7-10.2,2c-3.3,1.3-6.5,3.3-9.6,5.9c-3,2.6-5.8,5.9-8.4,9.7   c-2.6,3.9-4.8,8.4-6.6,13.6c-1.9,5.2-3.3,11-4.4,17.4c-1,6.4-1.6,13.5-1.6,21.2c0,3.3,0.2,6.6,0.5,9.7c0.3,3.1,0.9,5.9,1.7,8.4   c0.8,2.4,1.8,4.4,3.2,5.8c1.3,1.5,3,2.2,5,2.2c1.1,0,2.1-0.2,3-0.7c0.9-0.4,1.8-1.3,2.5-2.7c0.7-1.4,1.3-3.3,1.7-5.9   c0.4-2.6,0.7-6,0.7-10.2c0-2.7,0-5.3-0.1-8c0-2.6-0.1-5.2-0.1-7.7c-0.6-0.1-1.1-0.2-1.5-0.3c-0.4-0.1-0.8-0.2-1.1-0.3   c-0.4-0.1-0.7-0.2-0.9-0.4L21.9,60.6z"
                          />
                          <path
                            className="st1"
                            d="M72.3,74l0.6-1.2c0.6-1.2,1.1-2.4,1.6-3.7c0.5-1.3,0.9-2.5,1.3-3.6c0.4-1.1,0.6-2.1,0.8-3   c0.2-0.9,0.3-1.6,0.4-2c-1-0.1-2-0.4-3-0.8c-0.9-0.4-1.8-0.9-2.5-1.6c-0.7-0.7-1.3-1.5-1.7-2.4c-0.4-0.9-0.6-1.9-0.6-3.1   c0-0.9,0.2-1.7,0.5-2.4c0.3-0.7,0.7-1.3,1.3-1.8c0.5-0.5,1.1-0.8,1.8-1.1c0.7-0.3,1.3-0.4,2-0.4c1,0,1.8,0.2,2.5,0.6   c0.7,0.4,1.3,0.9,1.8,1.6s0.8,1.4,1.1,2.3c0.2,0.9,0.4,1.7,0.4,2.6c1.1,0,2.3-0.2,3.6-0.5c1.3-0.3,2.6-0.7,3.9-1   c1.3-0.4,2.6-0.7,3.9-1c1.3-0.3,2.4-0.5,3.5-0.5c0.9,0,1.6,0.2,2.2,0.6c0.6,0.4,0.8,1,0.8,1.9c0,0.6-0.2,1.7-0.6,3.1   c-0.4,1.5-0.8,3.2-1.4,5.1c-0.6,1.9-1.2,4-1.8,6.3c-0.7,2.3-1.3,4.6-1.8,6.9c-0.6,2.3-1,4.6-1.4,6.7c-0.4,2.2-0.6,4.1-0.6,5.8   c0,2.1,0.2,3.6,0.7,4.3c0.5,0.8,1.3,1.1,2.6,1.1c0.5,0,1.2-0.2,1.9-0.7c0.8-0.5,1.7-1.3,2.8-2.7c1.1-1.3,2.4-3.2,3.9-5.7   s3.3-5.7,5.3-9.8l0.6-1.2l2.4,1.8l-0.6,1.2c-2.4,4.7-4.5,8.6-6.3,11.7c-1.9,3-3.6,5.5-5.1,7.2c-1.6,1.8-3,3-4.4,3.7   c-1.4,0.7-2.8,1-4.2,1c-2.3,0-4.2-0.9-5.7-2.7c-1.5-1.8-2.2-4.5-2.2-8.2c0-2,0.3-4.1,0.8-6.3c0.6-2.2,1.2-4.3,2.1-6.5   c0.8-2.2,1.8-4.3,2.8-6.4c1-2.1,2-4.1,2.9-6c0.9-1.9,1.8-3.6,2.5-5.3c0.8-1.6,1.3-3,1.6-4.3l-0.4-0.4c-0.6,0-1.5,0.3-2.6,1   c-1.1,0.7-2.3,1.4-3.6,2.3c-1.3,0.9-2.7,1.7-4.2,2.4c-1.5,0.8-3,1.2-4.6,1.4c-0.1,0.6-0.2,1.4-0.5,2.4c-0.3,1.1-0.6,2.3-1,3.6   c-0.4,1.3-0.9,2.7-1.5,4c-0.6,1.4-1.1,2.7-1.7,3.9l-0.6,1.2L72.3,74z M75.2,50.2c-0.4,0-0.7,0.1-0.9,0.4c-0.2,0.2-0.4,0.5-0.4,0.8   c0,0.5,0.1,0.9,0.4,1.2c0.2,0.3,0.5,0.6,0.9,0.8c0.4,0.2,0.7,0.4,1.1,0.5c0.4,0.1,0.7,0.1,1,0.1c0-1.1-0.2-2-0.5-2.8   C76.4,50.6,75.9,50.2,75.2,50.2z"
                          />
                          <path
                            className="st1"
                            d="M144.7,84.8c0,2.3,0.2,4.2,0.6,5.7s1.1,2.3,2.1,2.3c0.6,0,1.2-0.3,1.9-0.9c0.7-0.6,1.5-1.5,2.4-2.8   c0.9-1.3,1.9-3,3.1-5.1c1.2-2.1,2.5-4.6,4-7.6l1.8-3.7l2.4,1.8l-1.8,3.7c-1.7,3.3-3.2,6.3-4.7,8.9c-1.4,2.6-2.8,4.9-4.1,6.7   c-1.3,1.8-2.6,3.2-3.8,4.2c-1.2,1-2.5,1.5-3.7,1.5c-1.3,0-2.4-0.4-3.3-1.1s-1.6-1.7-2.2-2.9s-1-2.7-1.4-4.3s-0.5-3.4-0.7-5.3   c-0.9,1.9-2,3.7-3.1,5.3s-2.3,3.1-3.6,4.3c-1.2,1.2-2.5,2.2-3.9,2.9c-1.3,0.7-2.7,1.1-4,1.1c-2,0-3.9-0.4-5.8-1.2   c-1.9-0.8-3.5-2.1-5-3.8c-1.4-1.7-2.6-3.8-3.5-6.4c-0.9-2.6-1.3-5.6-1.3-9.2c0-4.1,0.5-7.9,1.6-11.3c1.1-3.4,2.5-6.4,4.3-8.8   c1.8-2.5,3.9-4.4,6.3-5.8c2.4-1.4,4.9-2,7.5-2c1.6,0,3,0.4,4.4,1.1c1.3,0.7,2.5,1.6,3.5,2.6c1,1,1.8,2.1,2.5,3.2   c0.7,1.1,1.1,2.1,1.4,2.9l0.7-5.8c0.1-0.8,0.4-1.4,1.1-1.9c0.7-0.5,1.4-0.9,2.2-1.2c0.8-0.3,1.6-0.5,2.3-0.7   c0.8-0.1,1.3-0.2,1.6-0.2c0.5,0,0.8,0.1,0.9,0.2c0.2,0.2,0.2,0.5,0.2,0.9c0,0.6-0.2,1.8-0.5,3.6c-0.3,1.8-0.7,4.1-1.1,6.9   s-0.7,6.1-1.1,9.8C144.9,76.2,144.7,80.3,144.7,84.8z M138.2,69.1c0-1.8-0.3-3.6-0.8-5.4c-0.6-1.8-1.3-3.3-2.3-4.7   c-0.9-1.4-2-2.5-3.3-3.3s-2.6-1.2-3.9-1.2c-1.7,0-3.3,0.5-4.8,1.5c-1.5,1-2.8,2.3-3.9,4.1c-1.1,1.8-1.9,3.9-2.6,6.3   c-0.6,2.5-0.9,5.2-0.9,8.2c0,5.9,0.9,10.5,2.8,13.6s4.3,4.7,7.4,4.7c1.3,0,2.7-0.5,4.2-1.6c1.4-1.1,2.8-2.7,4-4.7   c1.2-2,2.2-4.5,3-7.4C137.8,76.1,138.2,72.8,138.2,69.1z"
                          />
                          <path
                            className="st1"
                            d="M183.5,55c-1.1,0-2.3,0.5-3.7,1.5c-1.4,1-2.7,2.3-4.1,3.8c-1.4,1.6-2.7,3.3-4,5.3c-1.3,1.9-2.4,3.9-3.4,5.8   c-0.1,3.5-0.2,7.3-0.3,11.4c-0.1,4.1-0.1,8.5-0.1,13.2c0,0.6-0.3,1.1-0.8,1.6c-0.5,0.5-1.2,0.8-1.9,1.1c-0.7,0.3-1.4,0.5-2.2,0.7   c-0.8,0.2-1.4,0.2-1.8,0.2c-0.6,0-1.1-0.2-1.7-0.5c-0.5-0.4-0.8-1.1-0.8-2.4c0-0.6,0.1-1.3,0.2-2.2c0.1-0.9,0.3-1.8,0.4-2.9   c0.2-1,0.4-2.1,0.6-3.2c0.2-1.1,0.4-2.1,0.6-3.1v-29c0-0.8,0-1.4,0-1.9c0-0.5,0.1-0.8,0.2-1c0.2-0.6,0.7-1,1.2-1.3   c0.6-0.3,1.2-0.6,1.9-0.7c0.7-0.2,1.3-0.3,2-0.3c0.6,0,1.1-0.1,1.5-0.1c0.7,0,1.1,0.2,1.4,0.5c0.3,0.4,0.4,1,0.4,1.9   c0-0.1-0.1,0.9-0.3,2.9c-0.2,2.1-0.3,5-0.4,8.8c1.2-1.9,2.5-3.6,3.9-5.3c1.4-1.7,2.8-3.2,4.3-4.5c1.5-1.3,3.1-2.4,4.7-3.1   c1.6-0.8,3.2-1.2,4.9-1.2c3,0,5.1,0.9,6.5,2.8c1.4,1.9,2.1,4.4,2.1,7.6c0,2-0.1,4.3-0.4,6.7c-0.3,2.5-0.6,5-0.9,7.5s-0.6,5-0.9,7.5   c-0.3,2.4-0.4,4.7-0.4,6.7c0,2.6,0.8,3.9,2.4,3.9c0.5,0,1.1-0.3,1.8-0.8c0.7-0.5,1.6-1.5,2.6-3c1-1.5,2.3-3.5,3.8-6   s3.2-5.8,5.2-9.9l0.6-1.2l2.4,1.8l-0.6,1.2c-2.4,4.7-4.5,8.6-6.3,11.7c-1.8,3-3.5,5.5-5,7.2c-1.5,1.8-2.9,3-4.2,3.7s-2.6,1-3.9,1   c-0.8,0-1.7-0.1-2.5-0.4s-1.6-0.7-2.2-1.2c-0.6-0.6-1.1-1.4-1.5-2.4s-0.6-2.3-0.6-3.9c0-2.4,0.2-5,0.5-8c0.3-3,0.7-5.9,1.1-8.9   c0.4-3,0.8-5.8,1.1-8.4c0.3-2.6,0.5-4.8,0.5-6.4c0-1.5-0.3-2.6-1-3.5S184.8,55,183.5,55z"
                          />
                          <path
                            className="st1"
                            d="M244.6,84.8c0,2.3,0.2,4.2,0.6,5.7s1.1,2.3,2.1,2.3c0.6,0,1.2-0.3,1.9-0.9c0.7-0.6,1.5-1.5,2.4-2.8   s1.9-3,3.1-5.1c1.2-2.1,2.5-4.6,4-7.6l1.8-3.7l2.4,1.8l-1.8,3.7c-1.7,3.3-3.2,6.3-4.7,8.9c-1.4,2.6-2.8,4.9-4.1,6.7   c-1.3,1.8-2.6,3.2-3.8,4.2c-1.2,1-2.5,1.5-3.7,1.5c-1.3,0-2.4-0.4-3.3-1.1s-1.6-1.7-2.2-2.9s-1-2.7-1.4-4.3s-0.5-3.4-0.7-5.3   c-0.9,1.9-2,3.7-3.1,5.3s-2.3,3.1-3.6,4.3c-1.2,1.2-2.5,2.2-3.9,2.9c-1.3,0.7-2.7,1.1-4,1.1c-2,0-3.9-0.4-5.8-1.2   c-1.9-0.8-3.5-2.1-5-3.8c-1.4-1.7-2.6-3.8-3.5-6.4c-0.9-2.6-1.3-5.6-1.3-9.2c0-4.1,0.5-7.9,1.6-11.3c1.1-3.4,2.5-6.4,4.3-8.8   c1.8-2.5,3.9-4.4,6.3-5.8c2.4-1.4,4.9-2,7.5-2c1.6,0,3,0.4,4.4,1.1c1.3,0.7,2.5,1.6,3.5,2.6c1,1,1.8,2.1,2.5,3.2   c0.7,1.1,1.1,2.1,1.4,2.9l0.7-5.8c0.1-0.8,0.4-1.4,1.1-1.9c0.7-0.5,1.4-0.9,2.2-1.2c0.8-0.3,1.6-0.5,2.3-0.7   c0.8-0.1,1.3-0.2,1.6-0.2c0.5,0,0.8,0.1,0.9,0.2c0.2,0.2,0.2,0.5,0.2,0.9c0,0.6-0.2,1.8-0.5,3.6c-0.3,1.8-0.7,4.1-1.1,6.9   s-0.7,6.1-1.1,9.8C244.8,76.2,244.6,80.3,244.6,84.8z M238.1,69.1c0-1.8-0.3-3.6-0.8-5.4c-0.6-1.8-1.3-3.3-2.3-4.7   c-0.9-1.4-2-2.5-3.3-3.3s-2.6-1.2-3.9-1.2c-1.7,0-3.3,0.5-4.8,1.5c-1.5,1-2.8,2.3-3.9,4.1c-1.1,1.8-1.9,3.9-2.6,6.3   c-0.6,2.5-0.9,5.2-0.9,8.2c0,5.9,0.9,10.5,2.8,13.6s4.3,4.7,7.4,4.7c1.3,0,2.7-0.5,4.2-1.6c1.4-1.1,2.8-2.7,4-4.7   c1.2-2,2.2-4.5,3-7.4C237.7,76.1,238.1,72.8,238.1,69.1z"
                          />
                          <path
                            className="st1"
                            d="M270.5,54.5c0,1.5-0.1,3.5-0.4,5.9c-0.3,2.4-0.5,5-0.8,7.9c-0.3,2.9-0.6,6-0.8,9.3c-0.3,3.3-0.4,6.7-0.4,10.1   c0,2.8,0.5,4.7,1.4,5.7c0.9,1,2.2,1.6,3.7,1.6c1.1,0,2.2-0.3,3.4-0.9c1.1-0.6,2.2-1.4,3.3-2.4c1-1,2-2.3,2.9-3.7   c0.9-1.4,1.7-3,2.4-4.6c-2.3-1.4-4.2-3.6-5.7-6.8s-2.3-7.1-2.3-12c0-2.4,0.3-4.5,0.8-6.1c0.5-1.7,1.2-3.1,2-4.1   c0.9-1.1,1.8-1.8,2.9-2.3c1.1-0.5,2.2-0.7,3.3-0.7c1,0,2,0.2,2.9,0.6c1,0.4,1.8,1,2.5,1.9c0.7,0.9,1.3,2.1,1.7,3.5   c0.4,1.5,0.7,3.3,0.7,5.4c0,2.7-0.3,5.7-1,9.1c-0.7,3.3-1.6,6.7-2.9,10c0.2,0,0.4,0,0.6,0.1c0.2,0,0.4,0.1,0.6,0.1   c2.2,0,4.1-0.7,5.7-2.2c1.6-1.4,3-3.4,4.2-5.8l0.6-1.2l2.4,1.8l-0.6,1.2c-1.6,3.1-3.5,5.4-5.7,6.9c-2.2,1.5-4.5,2.3-6.9,2.3   c-0.4,0-0.7,0-1.2-0.1c-0.4,0-0.7-0.1-0.9-0.2c-0.9,2-2,3.9-3.2,5.7c-1.2,1.8-2.6,3.3-4.1,4.7c-1.5,1.3-3.1,2.4-4.9,3.2   c-1.8,0.8-3.6,1.2-5.6,1.2c-1.6,0-3.1-0.2-4.5-0.7c-1.4-0.5-2.6-1.4-3.7-2.7c-1-1.3-1.9-3.1-2.5-5.4c-0.6-2.3-0.9-5.2-0.9-8.8   c0-1.6,0-3.4,0.1-5.3c0.1-2,0.2-3.9,0.3-6c0.1-2,0.3-4,0.5-5.9c0.2-1.9,0.4-3.7,0.6-5.3c0.2-1.6,0.4-2.9,0.6-4   c0.2-1.1,0.4-1.8,0.6-2.1c0.5-0.9,1.3-1.5,2.4-1.8c1.1-0.3,2.2-0.5,3.2-0.5c0.7,0,1.3,0.3,1.9,0.8   C270.2,52.2,270.5,53.2,270.5,54.5z M280.5,65c0,3.8,0.6,7,1.7,9.6c1.1,2.6,2.5,4.5,4.2,5.7c0.9-2.5,1.6-5.1,2-7.7   c0.5-2.7,0.7-5.2,0.7-7.7c0-1.6-0.1-2.9-0.4-4c-0.3-1.1-0.6-2-1-2.6c-0.4-0.7-0.9-1.1-1.4-1.4c-0.5-0.3-1.1-0.4-1.6-0.4   c-0.6,0-1.1,0.1-1.6,0.4c-0.5,0.3-1,0.8-1.4,1.5c-0.4,0.7-0.8,1.6-1,2.7C280.6,62.1,280.5,63.4,280.5,65z"
                          />
                        </g>
                      </svg>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="hidden w-28 dark:block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Layer_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 304.1 130.9"
                        style={{
                          enableBackground: "new 0 0 304.1 130.9"
                        }}
                        xmlSpace="preserve">
                        <style
                          type="text/css"
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n\t.st0{enable-background:new    ;}\n\t.st1{fill:#FF1A75;}\n"
                          }}
                        />
                        <g className="st0">
                          <path
                            className="st1"
                            d="M32.2,85.5c-0.4,3.1-1.1,5.7-1.9,7.9c-0.8,2.2-1.8,3.9-3,5.3c-1.2,1.4-2.5,2.4-4.1,3c-1.5,0.6-3.2,0.9-5,0.9   c-2.6,0-5-0.8-7.2-2.3c-2.2-1.5-4.2-3.7-5.8-6.7c-1.6-3-2.9-6.6-3.8-11S0,73.1,0,67.3c0-6.1,0.6-11.9,1.8-17.6c1.2-5.7,2.8-11,5-16   c2.2-5,4.7-9.5,7.8-13.7c3-4.1,6.4-7.7,10.1-10.6c3.7-2.9,7.8-5.2,12.1-6.9C41.1,0.8,45.7,0,50.4,0c4.1,0,7.8,0.6,11.2,1.8   c3.4,1.2,6.3,2.9,8.7,5.1c2.4,2.2,4.3,4.7,5.6,7.7s2,6.2,2,9.6c0,4.2-0.6,8-1.7,11.6c-1.1,3.6-2.7,6.9-4.8,9.8c-2,3-4.5,5.6-7.3,8   c-2.8,2.3-5.9,4.3-9.2,5.9c-3.3,1.6-6.8,2.9-10.4,3.8c-3.7,0.9-7.4,1.4-11.1,1.5c-0.1,4.9-0.2,9.1-0.4,12.5   C32.8,80.7,32.5,83.5,32.2,85.5z M21.9,60.6c0.2,0.1,0.4,0.2,0.7,0.2c0.2,0.1,0.5,0.2,0.9,0.2c0.3,0.1,0.7,0.2,1.2,0.2   c-0.1-4.9-0.2-9.5-0.3-13.6c-0.1-4.1-0.2-7.7-0.3-10.8c-0.2-3.6-0.3-6.8-0.4-9.7c0.3-0.2,0.6-0.4,0.9-0.6c0.3-0.2,0.7-0.3,1.1-0.4   c0.4-0.1,1-0.2,1.6-0.2c1.8,0,3.3,0.3,4.4,1s1.7,1.8,1.7,3.3c0,6.5,0,12.4,0,17.6c0,5.2,0,9.9-0.1,14c5.2,0,9.9-1,14.1-3   c4.2-2,7.8-4.6,10.8-7.9c3-3.3,5.3-7.1,6.9-11.4c1.6-4.3,2.4-8.8,2.4-13.5c0-3-0.4-5.9-1.2-8.6c-0.8-2.7-2-5.1-3.7-7.1   c-1.7-2-3.7-3.7-6.3-4.9c-2.5-1.2-5.5-1.8-8.9-1.8c-3.4,0-6.8,0.7-10.2,2c-3.3,1.3-6.5,3.3-9.6,5.9c-3,2.6-5.8,5.9-8.4,9.7   c-2.6,3.9-4.8,8.4-6.6,13.6c-1.9,5.2-3.3,11-4.4,17.4c-1,6.4-1.6,13.5-1.6,21.2c0,3.3,0.2,6.6,0.5,9.7c0.3,3.1,0.9,5.9,1.7,8.4   c0.8,2.4,1.8,4.4,3.2,5.8c1.3,1.5,3,2.2,5,2.2c1.1,0,2.1-0.2,3-0.7c0.9-0.4,1.8-1.3,2.5-2.7c0.7-1.4,1.3-3.3,1.7-5.9   c0.4-2.6,0.7-6,0.7-10.2c0-2.7,0-5.3-0.1-8c0-2.6-0.1-5.2-0.1-7.7c-0.6-0.1-1.1-0.2-1.5-0.3c-0.4-0.1-0.8-0.2-1.1-0.3   c-0.4-0.1-0.7-0.2-0.9-0.4L21.9,60.6z"
                          />
                          <path
                            className="st1"
                            d="M72.3,74l0.6-1.2c0.6-1.2,1.1-2.4,1.6-3.7c0.5-1.3,0.9-2.5,1.3-3.6c0.4-1.1,0.6-2.1,0.8-3   c0.2-0.9,0.3-1.6,0.4-2c-1-0.1-2-0.4-3-0.8c-0.9-0.4-1.8-0.9-2.5-1.6c-0.7-0.7-1.3-1.5-1.7-2.4c-0.4-0.9-0.6-1.9-0.6-3.1   c0-0.9,0.2-1.7,0.5-2.4c0.3-0.7,0.7-1.3,1.3-1.8c0.5-0.5,1.1-0.8,1.8-1.1c0.7-0.3,1.3-0.4,2-0.4c1,0,1.8,0.2,2.5,0.6   c0.7,0.4,1.3,0.9,1.8,1.6s0.8,1.4,1.1,2.3c0.2,0.9,0.4,1.7,0.4,2.6c1.1,0,2.3-0.2,3.6-0.5c1.3-0.3,2.6-0.7,3.9-1   c1.3-0.4,2.6-0.7,3.9-1c1.3-0.3,2.4-0.5,3.5-0.5c0.9,0,1.6,0.2,2.2,0.6c0.6,0.4,0.8,1,0.8,1.9c0,0.6-0.2,1.7-0.6,3.1   c-0.4,1.5-0.8,3.2-1.4,5.1c-0.6,1.9-1.2,4-1.8,6.3c-0.7,2.3-1.3,4.6-1.8,6.9c-0.6,2.3-1,4.6-1.4,6.7c-0.4,2.2-0.6,4.1-0.6,5.8   c0,2.1,0.2,3.6,0.7,4.3c0.5,0.8,1.3,1.1,2.6,1.1c0.5,0,1.2-0.2,1.9-0.7c0.8-0.5,1.7-1.3,2.8-2.7c1.1-1.3,2.4-3.2,3.9-5.7   s3.3-5.7,5.3-9.8l0.6-1.2l2.4,1.8l-0.6,1.2c-2.4,4.7-4.5,8.6-6.3,11.7c-1.9,3-3.6,5.5-5.1,7.2c-1.6,1.8-3,3-4.4,3.7   c-1.4,0.7-2.8,1-4.2,1c-2.3,0-4.2-0.9-5.7-2.7c-1.5-1.8-2.2-4.5-2.2-8.2c0-2,0.3-4.1,0.8-6.3c0.6-2.2,1.2-4.3,2.1-6.5   c0.8-2.2,1.8-4.3,2.8-6.4c1-2.1,2-4.1,2.9-6c0.9-1.9,1.8-3.6,2.5-5.3c0.8-1.6,1.3-3,1.6-4.3l-0.4-0.4c-0.6,0-1.5,0.3-2.6,1   c-1.1,0.7-2.3,1.4-3.6,2.3c-1.3,0.9-2.7,1.7-4.2,2.4c-1.5,0.8-3,1.2-4.6,1.4c-0.1,0.6-0.2,1.4-0.5,2.4c-0.3,1.1-0.6,2.3-1,3.6   c-0.4,1.3-0.9,2.7-1.5,4c-0.6,1.4-1.1,2.7-1.7,3.9l-0.6,1.2L72.3,74z M75.2,50.2c-0.4,0-0.7,0.1-0.9,0.4c-0.2,0.2-0.4,0.5-0.4,0.8   c0,0.5,0.1,0.9,0.4,1.2c0.2,0.3,0.5,0.6,0.9,0.8c0.4,0.2,0.7,0.4,1.1,0.5c0.4,0.1,0.7,0.1,1,0.1c0-1.1-0.2-2-0.5-2.8   C76.4,50.6,75.9,50.2,75.2,50.2z"
                          />
                          <path
                            className="st1"
                            d="M144.7,84.8c0,2.3,0.2,4.2,0.6,5.7s1.1,2.3,2.1,2.3c0.6,0,1.2-0.3,1.9-0.9c0.7-0.6,1.5-1.5,2.4-2.8   c0.9-1.3,1.9-3,3.1-5.1c1.2-2.1,2.5-4.6,4-7.6l1.8-3.7l2.4,1.8l-1.8,3.7c-1.7,3.3-3.2,6.3-4.7,8.9c-1.4,2.6-2.8,4.9-4.1,6.7   c-1.3,1.8-2.6,3.2-3.8,4.2c-1.2,1-2.5,1.5-3.7,1.5c-1.3,0-2.4-0.4-3.3-1.1s-1.6-1.7-2.2-2.9s-1-2.7-1.4-4.3s-0.5-3.4-0.7-5.3   c-0.9,1.9-2,3.7-3.1,5.3s-2.3,3.1-3.6,4.3c-1.2,1.2-2.5,2.2-3.9,2.9c-1.3,0.7-2.7,1.1-4,1.1c-2,0-3.9-0.4-5.8-1.2   c-1.9-0.8-3.5-2.1-5-3.8c-1.4-1.7-2.6-3.8-3.5-6.4c-0.9-2.6-1.3-5.6-1.3-9.2c0-4.1,0.5-7.9,1.6-11.3c1.1-3.4,2.5-6.4,4.3-8.8   c1.8-2.5,3.9-4.4,6.3-5.8c2.4-1.4,4.9-2,7.5-2c1.6,0,3,0.4,4.4,1.1c1.3,0.7,2.5,1.6,3.5,2.6c1,1,1.8,2.1,2.5,3.2   c0.7,1.1,1.1,2.1,1.4,2.9l0.7-5.8c0.1-0.8,0.4-1.4,1.1-1.9c0.7-0.5,1.4-0.9,2.2-1.2c0.8-0.3,1.6-0.5,2.3-0.7   c0.8-0.1,1.3-0.2,1.6-0.2c0.5,0,0.8,0.1,0.9,0.2c0.2,0.2,0.2,0.5,0.2,0.9c0,0.6-0.2,1.8-0.5,3.6c-0.3,1.8-0.7,4.1-1.1,6.9   s-0.7,6.1-1.1,9.8C144.9,76.2,144.7,80.3,144.7,84.8z M138.2,69.1c0-1.8-0.3-3.6-0.8-5.4c-0.6-1.8-1.3-3.3-2.3-4.7   c-0.9-1.4-2-2.5-3.3-3.3s-2.6-1.2-3.9-1.2c-1.7,0-3.3,0.5-4.8,1.5c-1.5,1-2.8,2.3-3.9,4.1c-1.1,1.8-1.9,3.9-2.6,6.3   c-0.6,2.5-0.9,5.2-0.9,8.2c0,5.9,0.9,10.5,2.8,13.6s4.3,4.7,7.4,4.7c1.3,0,2.7-0.5,4.2-1.6c1.4-1.1,2.8-2.7,4-4.7   c1.2-2,2.2-4.5,3-7.4C137.8,76.1,138.2,72.8,138.2,69.1z"
                          />
                          <path
                            className="st1"
                            d="M183.5,55c-1.1,0-2.3,0.5-3.7,1.5c-1.4,1-2.7,2.3-4.1,3.8c-1.4,1.6-2.7,3.3-4,5.3c-1.3,1.9-2.4,3.9-3.4,5.8   c-0.1,3.5-0.2,7.3-0.3,11.4c-0.1,4.1-0.1,8.5-0.1,13.2c0,0.6-0.3,1.1-0.8,1.6c-0.5,0.5-1.2,0.8-1.9,1.1c-0.7,0.3-1.4,0.5-2.2,0.7   c-0.8,0.2-1.4,0.2-1.8,0.2c-0.6,0-1.1-0.2-1.7-0.5c-0.5-0.4-0.8-1.1-0.8-2.4c0-0.6,0.1-1.3,0.2-2.2c0.1-0.9,0.3-1.8,0.4-2.9   c0.2-1,0.4-2.1,0.6-3.2c0.2-1.1,0.4-2.1,0.6-3.1v-29c0-0.8,0-1.4,0-1.9c0-0.5,0.1-0.8,0.2-1c0.2-0.6,0.7-1,1.2-1.3   c0.6-0.3,1.2-0.6,1.9-0.7c0.7-0.2,1.3-0.3,2-0.3c0.6,0,1.1-0.1,1.5-0.1c0.7,0,1.1,0.2,1.4,0.5c0.3,0.4,0.4,1,0.4,1.9   c0-0.1-0.1,0.9-0.3,2.9c-0.2,2.1-0.3,5-0.4,8.8c1.2-1.9,2.5-3.6,3.9-5.3c1.4-1.7,2.8-3.2,4.3-4.5c1.5-1.3,3.1-2.4,4.7-3.1   c1.6-0.8,3.2-1.2,4.9-1.2c3,0,5.1,0.9,6.5,2.8c1.4,1.9,2.1,4.4,2.1,7.6c0,2-0.1,4.3-0.4,6.7c-0.3,2.5-0.6,5-0.9,7.5s-0.6,5-0.9,7.5   c-0.3,2.4-0.4,4.7-0.4,6.7c0,2.6,0.8,3.9,2.4,3.9c0.5,0,1.1-0.3,1.8-0.8c0.7-0.5,1.6-1.5,2.6-3c1-1.5,2.3-3.5,3.8-6   s3.2-5.8,5.2-9.9l0.6-1.2l2.4,1.8l-0.6,1.2c-2.4,4.7-4.5,8.6-6.3,11.7c-1.8,3-3.5,5.5-5,7.2c-1.5,1.8-2.9,3-4.2,3.7s-2.6,1-3.9,1   c-0.8,0-1.7-0.1-2.5-0.4s-1.6-0.7-2.2-1.2c-0.6-0.6-1.1-1.4-1.5-2.4s-0.6-2.3-0.6-3.9c0-2.4,0.2-5,0.5-8c0.3-3,0.7-5.9,1.1-8.9   c0.4-3,0.8-5.8,1.1-8.4c0.3-2.6,0.5-4.8,0.5-6.4c0-1.5-0.3-2.6-1-3.5S184.8,55,183.5,55z"
                          />
                          <path
                            className="st1"
                            d="M244.6,84.8c0,2.3,0.2,4.2,0.6,5.7s1.1,2.3,2.1,2.3c0.6,0,1.2-0.3,1.9-0.9c0.7-0.6,1.5-1.5,2.4-2.8   s1.9-3,3.1-5.1c1.2-2.1,2.5-4.6,4-7.6l1.8-3.7l2.4,1.8l-1.8,3.7c-1.7,3.3-3.2,6.3-4.7,8.9c-1.4,2.6-2.8,4.9-4.1,6.7   c-1.3,1.8-2.6,3.2-3.8,4.2c-1.2,1-2.5,1.5-3.7,1.5c-1.3,0-2.4-0.4-3.3-1.1s-1.6-1.7-2.2-2.9s-1-2.7-1.4-4.3s-0.5-3.4-0.7-5.3   c-0.9,1.9-2,3.7-3.1,5.3s-2.3,3.1-3.6,4.3c-1.2,1.2-2.5,2.2-3.9,2.9c-1.3,0.7-2.7,1.1-4,1.1c-2,0-3.9-0.4-5.8-1.2   c-1.9-0.8-3.5-2.1-5-3.8c-1.4-1.7-2.6-3.8-3.5-6.4c-0.9-2.6-1.3-5.6-1.3-9.2c0-4.1,0.5-7.9,1.6-11.3c1.1-3.4,2.5-6.4,4.3-8.8   c1.8-2.5,3.9-4.4,6.3-5.8c2.4-1.4,4.9-2,7.5-2c1.6,0,3,0.4,4.4,1.1c1.3,0.7,2.5,1.6,3.5,2.6c1,1,1.8,2.1,2.5,3.2   c0.7,1.1,1.1,2.1,1.4,2.9l0.7-5.8c0.1-0.8,0.4-1.4,1.1-1.9c0.7-0.5,1.4-0.9,2.2-1.2c0.8-0.3,1.6-0.5,2.3-0.7   c0.8-0.1,1.3-0.2,1.6-0.2c0.5,0,0.8,0.1,0.9,0.2c0.2,0.2,0.2,0.5,0.2,0.9c0,0.6-0.2,1.8-0.5,3.6c-0.3,1.8-0.7,4.1-1.1,6.9   s-0.7,6.1-1.1,9.8C244.8,76.2,244.6,80.3,244.6,84.8z M238.1,69.1c0-1.8-0.3-3.6-0.8-5.4c-0.6-1.8-1.3-3.3-2.3-4.7   c-0.9-1.4-2-2.5-3.3-3.3s-2.6-1.2-3.9-1.2c-1.7,0-3.3,0.5-4.8,1.5c-1.5,1-2.8,2.3-3.9,4.1c-1.1,1.8-1.9,3.9-2.6,6.3   c-0.6,2.5-0.9,5.2-0.9,8.2c0,5.9,0.9,10.5,2.8,13.6s4.3,4.7,7.4,4.7c1.3,0,2.7-0.5,4.2-1.6c1.4-1.1,2.8-2.7,4-4.7   c1.2-2,2.2-4.5,3-7.4C237.7,76.1,238.1,72.8,238.1,69.1z"
                          />
                          <path
                            className="st1"
                            d="M270.5,54.5c0,1.5-0.1,3.5-0.4,5.9c-0.3,2.4-0.5,5-0.8,7.9c-0.3,2.9-0.6,6-0.8,9.3c-0.3,3.3-0.4,6.7-0.4,10.1   c0,2.8,0.5,4.7,1.4,5.7c0.9,1,2.2,1.6,3.7,1.6c1.1,0,2.2-0.3,3.4-0.9c1.1-0.6,2.2-1.4,3.3-2.4c1-1,2-2.3,2.9-3.7   c0.9-1.4,1.7-3,2.4-4.6c-2.3-1.4-4.2-3.6-5.7-6.8s-2.3-7.1-2.3-12c0-2.4,0.3-4.5,0.8-6.1c0.5-1.7,1.2-3.1,2-4.1   c0.9-1.1,1.8-1.8,2.9-2.3c1.1-0.5,2.2-0.7,3.3-0.7c1,0,2,0.2,2.9,0.6c1,0.4,1.8,1,2.5,1.9c0.7,0.9,1.3,2.1,1.7,3.5   c0.4,1.5,0.7,3.3,0.7,5.4c0,2.7-0.3,5.7-1,9.1c-0.7,3.3-1.6,6.7-2.9,10c0.2,0,0.4,0,0.6,0.1c0.2,0,0.4,0.1,0.6,0.1   c2.2,0,4.1-0.7,5.7-2.2c1.6-1.4,3-3.4,4.2-5.8l0.6-1.2l2.4,1.8l-0.6,1.2c-1.6,3.1-3.5,5.4-5.7,6.9c-2.2,1.5-4.5,2.3-6.9,2.3   c-0.4,0-0.7,0-1.2-0.1c-0.4,0-0.7-0.1-0.9-0.2c-0.9,2-2,3.9-3.2,5.7c-1.2,1.8-2.6,3.3-4.1,4.7c-1.5,1.3-3.1,2.4-4.9,3.2   c-1.8,0.8-3.6,1.2-5.6,1.2c-1.6,0-3.1-0.2-4.5-0.7c-1.4-0.5-2.6-1.4-3.7-2.7c-1-1.3-1.9-3.1-2.5-5.4c-0.6-2.3-0.9-5.2-0.9-8.8   c0-1.6,0-3.4,0.1-5.3c0.1-2,0.2-3.9,0.3-6c0.1-2,0.3-4,0.5-5.9c0.2-1.9,0.4-3.7,0.6-5.3c0.2-1.6,0.4-2.9,0.6-4   c0.2-1.1,0.4-1.8,0.6-2.1c0.5-0.9,1.3-1.5,2.4-1.8c1.1-0.3,2.2-0.5,3.2-0.5c0.7,0,1.3,0.3,1.9,0.8   C270.2,52.2,270.5,53.2,270.5,54.5z M280.5,65c0,3.8,0.6,7,1.7,9.6c1.1,2.6,2.5,4.5,4.2,5.7c0.9-2.5,1.6-5.1,2-7.7   c0.5-2.7,0.7-5.2,0.7-7.7c0-1.6-0.1-2.9-0.4-4c-0.3-1.1-0.6-2-1-2.6c-0.4-0.7-0.9-1.1-1.4-1.4c-0.5-0.3-1.1-0.4-1.6-0.4   c-0.6,0-1.1,0.1-1.6,0.4c-0.5,0.3-1,0.8-1.4,1.5c-0.4,0.7-0.8,1.6-1,2.7C280.6,62.1,280.5,63.4,280.5,65z"
                          />
                        </g>
                      </svg>
                    </a>
                  </Link>
                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="px-2 py-1 ml-auto text-gray-500 rounded-md md:hidden focus:text-blue-500 focus:outline-none dark:text-gray-300 ">
                    <svg
                      className="w-6 h-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>
                </div>

                <div className="flex-col items-center justify-start order-2 hidden w-full md:flex md:flex-row md:w-auto md:flex-1 md:order-none">
                  {rightmenu.map((item, index) => (
                    <Link href={item.href} key={index}>
                      <a
                        className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
                        target={item.external ? "_blank" : ""}
                        rel={item.external ? "noopener" : ""}>
                        {item.label}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
              <Disclosure.Panel>
                <div className="flex flex-col items-center justify-start order-2 w-full md:hidden">
                  {mobilemenu.map((item, index) => (
                    <Link href={item.href} key={index}>
                      <a
                        className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
                        target={item.external ? "_blank" : ""}
                        rel={item.external ? "noopener" : ""}>
                        {item.label}
                      </a>
                    </Link>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </Container>
  );
}