"use client";
import { useState } from "react";
import Header from "@/components/Sections/Admin/Header";
import UploadNewsletterForm from "@/components/Forms/UploadNewsletterForm";

const NewsletterActionPage = () => {
  const [search, setSearch] = useState("");
  const handleSearchChange = () => {};
  return (
    <main className="adminContainer">
      <Header
        title="Upload Newsletter"
        searchInput={search}
        handleSearchChange={handleSearchChange}
      />
      <UploadNewsletterForm />
    </main>
  );
};

export default NewsletterActionPage;
