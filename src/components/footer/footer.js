import React from "react";
import Layout from "../layout/Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout classname="py-8 flex items-center justify-between">
        <span>2023 @ All Rights Reserved</span>
        <Link href="/">AAA</Link>
        <Link href="/">BBB</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
