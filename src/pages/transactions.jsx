import DataUploads from "../components/DataUploads";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState } from "react";

export default function Transactions() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Header setMobileMenuOpen={setMobileMenuOpen} />

        <main className="flex-1 p-4 tablet:p-8 overflow-y-auto">
          {/* <div className="mx-auto">{<DataUploads data={data} />}</div> */}
        </main>
      </div>
    </div>
  );
}
