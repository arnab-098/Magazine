import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/utils";
import { Pdf } from "@/types";
import { Document, Page } from "react-pdf";

interface IProps {
  magazineDetails: Pdf;
}

const Detail = ({ magazineDetails }: IProps) => {
  const [numPages, setNumPages] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    if (pageNumber > 1) {
      changePage(-2);
    }
  }

  function nextPage() {
    if (pageNumber < numPages - 1) {
      changePage(2);
    }
  }

  return (
    <div>
      <Document
        file={magazineDetails.magazine_pdf?.asset?.url}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <div className="flex justify-center gap-[5px]">
          <div onClick={previousPage}>
            <Page
              pageNumber={pageNumber}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </div>
          <div onClick={nextPage}>
            {pageNumber + 1 <= numPages && (
              <Page
                pageNumber={pageNumber + 1}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            )}
          </div>
        </div>
      </Document>
      <div className="mt-[30px] flex gap-[5px] justify-around items-center">
        <div>
          <button
            className="width-[200px] focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            Previous
          </button>
        </div>
        <div>
          <button
            className="width-[200px] focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            disabled={pageNumber >= numPages - 1}
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const res = await axios.get(`${BASE_URL}/api/post/${id}`);

  return {
    props: { magazineDetails: res.data },
  };
};

export default Detail;
