import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

const Products = () => {
  return (
    <Layout>
      <Link
        href="/products/new"
        className="bg-blue-900 text-white rounded-md px-2 py-1"
      >
        Add new product
      </Link>
    </Layout>
  );
};

export default Products;
