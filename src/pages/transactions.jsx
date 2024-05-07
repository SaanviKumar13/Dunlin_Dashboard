import DataUploads from "../components/DataUploads";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState } from "react";

const data = [
  {
    amount: "23456",
    name: "timesonline.co.uk",
    transaction: "QB0GaK7",
    types: "ertyu",
    description: "12345",
  },
  {
    amount: "23456",
    name: "merriam-webster.com",
    transaction: "8oUTDyz",
    types: "wertyu",
    description: "4567",
  },
  {
    amount: "23456",
    name: "newyorker.com",
    transaction: "Z9i2o9o",
    types: "sdfg",
    description: "87654",
  },
  {
    amount: "23456",
    name: "angelfire.com",
    transaction: "pW44f49",
    types: "dfgh",
    description: "45678",
  },
  {
    amount: "23456",
    name: "rambler.ru",
    transaction: "w1vDJvP",
    types: "sdfg",
    description: "876",
  },
  {
    amount: "23456",
    name: "timesonline.co.uk",
    transaction: "Uz3Uq87",
    types: "ertyu",
    description: "12345",
  },
  {
    amount: "23456",
    name: "state.gov",
    transaction: "PwT2wMc",
    types: "wertyu",
    description: "4567",
  },
  {
    amount: "23456",
    name: "youtube.com",
    transaction: "c1TO1x6",
    types: "sdfg",
    description: "87654",
  },
  {
    amount: "23456",
    name: "washingtonpost.com",
    transaction: "4KtfXaU",
    types: "dfgh",
    description: "45678",
  },
  {
    amount: "23456",
    name: "icq.com",
    transaction: "nh294Ty",
    types: "sdfg",
    description: "876",
  },
  {
    amount: "23456",
    name: "cbsnews.com",
    transaction: "0e56PW3",
    types: "ertyu",
    description: "12345",
  },
  {
    amount: "23456",
    name: "google.pl",
    transaction: "NNq9FXo",
    types: "wertyu",
    description: "4567",
  },
  {
    amount: "23456",
    name: "uiuc.edu",
    transaction: "55b5FKK",
    types: "sdfg",
    description: "87654",
  },
  {
    amount: "23456",
    name: "creativecommons.org",
    transaction: "0Q43Q2J",
    types: "dfgh",
    description: "45678",
  },
  {
    amount: "23456",
    name: "cam.ac.uk",
    transaction: "1dYVlCo",
    types: "sdfg",
    description: "876",
  },
  {
    amount: "23456",
    name: "microsoft.com",
    transaction: "5leG2TS",
    types: "ertyu",
    description: "4567",
  },
  {
    amount: "23456",
    name: "ebay.co.uk",
    transaction: "2tYI62f",
    types: "wertyu",
    description: "87654",
  },
  {
    amount: "23456",
    name: "ucsd.edu",
    transaction: "Dfdk2F4",
    types: "sdfg",
    description: "45678",
  },
  {
    amount: "23456",
    name: "constantcontact.com",
    transaction: "6OFdyTY",
    types: "dfgh",
    description: "876",
  },
  {
    amount: "23456",
    name: "seesaa.net",
    transaction: "IYU6iyo",
    types: "sdfg",
    description: "12345",
  },
  {
    amount: "23456",
    name: "globo.com",
    transaction: "9Q8j9h5",
    types: "ertyu",
    description: "4567",
  },
  {
    amount: "23456",
    name: "github.io",
    transaction: "5e7TzC8",
    types: "wertyu",
    description: "87654",
  },
  {
    amount: "23456",
    name: "bluehost.com",
    transaction: "8Je0tSH",
    types: "sdfg",
    description: "45678",
  },
  {
    amount: "23456",
    name: "engadget.com",
    transaction: "9S74C00",
    types: "dfgh",
    description: "4567",
  },
  {
    amount: "23456",
    name: "psu.edu",
    transaction: "38yv9fT",
    types: "sdfg",
    description: "87654",
  },
  {
    amount: "23456",
    name: "canalblog.com",
    transaction: "w6WNGwa",
    types: "ertyu",
    description: "45678",
  },
  {
    amount: "23456",
    name: "pen.io",
    transaction: "4RW1EV6",
    types: "wertyu",
    description: "876",
  },
  {
    amount: "23456",
    name: "parallels.com",
    transaction: "llpTUMe",
    types: "sdfg",
    description: "12345",
  },
  {
    amount: "23456",
    name: "skyrock.com",
    transaction: "rdv8kZ3",
    types: "dfgh",
    description: "4567",
  },
  {
    amount: "23456",
    name: "fastcompany.com",
    transaction: "7zIf8YB",
    types: "sdfg",
    description: "87654",
  },
  {
    amount: "23456",
    name: "4shared.com",
    transaction: "3y72wJ1",
    types: "ertyu",
    description: "45678",
  },
  {
    amount: "23456",
    name: "unc.edu",
    transaction: "x92LK5W",
    types: "wertyu",
    description: "4567",
  },
  {
    amount: "23456",
    name: "irs.gov",
    transaction: "fvD4yQu",
    types: "sdfg",
    description: "87654",
  },
  {
    amount: "23456",
    name: "apache.org",
    transaction: "7d46u5g",
    types: "dfgh",
    description: "45678",
  },
  {
    amount: "23456",
    name: "deliciousdays.com",
    transaction: "04Gwoph",
    types: "sdfg",
    description: "876",
  },
  {
    amount: "23456",
    name: "smugmug.com",
    transaction: "Z8NZ9t6",
    types: "ertyu",
    description: "12345",
  },
  {
    amount: "23456",
    name: "list-manage.com",
    transaction: "SeVM7Vy",
    types: "wertyu",
    description: "4567",
  },
  {
    amount: "23456",
    name: "icio.us",
    transaction: "HO3p8A4",
    types: "sdfg",
    description: "87654",
  },
  {
    amount: "23456",
    name: "webeden.co.uk",
    transaction: "5dndeO4",
    types: "dfgh",
    description: "45678",
  },
  {
    amount: "23456",
    name: "howstuffworks.com",
    transaction: "NkEas9V",
    types: "sdfg",
    description: "3456",
  },
];

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
          <div className="mx-auto">{<DataUploads data={data} />}</div>
        </main>
      </div>
    </div>
  );
}
