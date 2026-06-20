import React from "react";
import Link from "next/link";
import { LogoGithub, LogoLinkedin, Globe, Envelope } from "@gravity-ui/icons";

const Footer = () => {
    return (
        <footer className="border-t border-t-[#946f29] bg-content1 text-[#D8A33D] mt-10">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">
                            ArtHub
                        </h2>

                        <p className="text-default-500 text-sm leading-relaxed">
                            ArtHub is a digital platform that connects art lovers, collectors, and buyers with talented artists. The platform allows users to browse, discover, and purchase original artworks.
                        </p>

                        <div className="flex items-center gap-4">
                            <Link
                                href="https://github.com"
                                target="_blank"
                                className="text-default-500 hover:text-primary transition-colors"
                            >
                                <LogoGithub width={20} height={20} />
                            </Link>

                            <Link
                                href="https://linkedin.com"
                                target="_blank"
                                className="text-default-500 hover:text-primary transition-colors"
                            >
                                <LogoLinkedin width={20} height={20} />
                            </Link>

                            <Link
                                href="#"
                                className="text-default-500 hover:text-primary transition-colors"
                            >
                                <Globe width={20} height={20} />
                            </Link>

                            <Link
                                href="mailto:fahiyanofficial@gmail.com"
                                className="text-default-500 hover:text-primary transition-colors"
                            >
                                <Envelope width={20} height={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link
                                    href="/arts"
                                    className="text-default-500 hover:text-primary transition-colors"
                                >
                                    Browse Arts
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/about"
                                    className="text-default-500 hover:text-primary transition-colors"
                                >
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">
                            Contact
                        </h3>

                        <div className="space-y-3 text-sm text-default-500">
                            <p>fahiyanofficial@gmail.com</p>
                            <p>+88 01712079557</p>
                            <p>
                                Helping art lovers connect globally.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 pt-6 border-t border-default-200 flex flex-col md:flex-row items-center justify-between gap-4 text-[#9C9893]">
                    <p className="text-sm text-default-500 text-center md:text-left">
                        © {new Date().getFullYear()} ArtHub. All rights reserved.
                    </p>

                    <div className="flex items-center gap-5 text-sm">
                        <Link
                            href="/privacy-policy"
                            className="text-default-500 hover:text-primary transition-colors"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/terms"
                            className="text-default-500 hover:text-primary transition-colors"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;