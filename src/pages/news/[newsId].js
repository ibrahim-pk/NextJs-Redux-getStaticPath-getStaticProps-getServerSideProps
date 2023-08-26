import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const NewsDetails = ({ singleNews }) => {
  console.log(singleNews);
  return (
    <div>
      <h1>News Details</h1>
    </div>
  );
};

export default NewsDetails;

NewsDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

//

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/news/${params.newsId}`);
  const data = await res.json();
  return {
    props: {
      singleNews: data,
    },
  };
};
