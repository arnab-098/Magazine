import { Pdf } from "@/types";
import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { urlFor } from "@/utils/client";
import Link from "next/link";

interface IProps {
  magazine: Pdf;
}

const PdfCard: NextPage<IProps> = ({ magazine }: IProps) => {
  return (
    <div className="p-2 cursor-pointer hover:opacity-70">
      <Link href={`/magazine/${magazine._id}`}>
        <img
          className="rounded-lg w-full"
          src={urlFor(magazine.thumbnail.asset.url).width(250).url()}
          alt="magazine thumbnail"
        />
      </Link>
    </div>
  );
};

export default PdfCard;
