import { Text } from "./text";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="container flex justify-between gap-52 pb-24">
        <div className="flex flex-col gap-6 basis-1/4">
          <img src="../Footer.png" alt="" className="w-40 h-auto" />
          <Text variant="body-1">
            DevCut is a YouTube channel for practical project-based learning.
          </Text>
          <div className="flex gap-4">
            <img src="../Github.svg" alt="" />
            <img src="../Instagram.svg" alt="" />
            <img src="../Youtube.svg" alt="" />
          </div>
        </div>
        <div className="flex basis-2/4 justify-between">
          <div className="flex flex-col gap-6">
            <Text variant="body-2">SUPPORT</Text>
            <ul className="flex flex-col gap-3">
              <li>
                <Text variant="body-2" asChild>
                  <Link to="/">FAQ</Link>
                </Text>
              </li>
              <li>
                <Text variant="body-2" asChild>
                  <Link to="/">Terms of use</Link>
                </Text>
              </li>
              <li>
                <Text variant="body-2" asChild>
                  <Link to="/">Privacy Policy</Link>
                </Text>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <Text variant="body-2">COMPANY</Text>
            <ul className="flex flex-col gap-3">
              <li>
                <Text variant="body-2" asChild>
                  <Link to="/">About us</Link>
                </Text>
              </li>
              <li>
                <Text variant="body-2" asChild>
                  <Link to="/">Contact</Link>
                </Text>
              </li>
              <li>
                <Text variant="body-2" asChild>
                  <Link to="/">Careers</Link>
                </Text>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <Text variant="body-2">SHOP</Text>
            <ul className="flex flex-col gap-3">
              <li>
                <Text variant="body-2" asChild>
                  <Link to="/">My Account</Link>
                </Text>
              </li>
              <li>
                <Text variant="body-2" asChild>
                  <Link to="/">Checkout</Link>
                </Text>
              </li>
              <li>
                <Text variant="body-2" asChild>
                  <Link to="/">Cart</Link>
                </Text>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-6 basis-1/4">
          <Text variant="body-2">ACCEPTED PAYMENTS</Text>
          <div className="flex">
            <img src="../Mastercard.svg" alt="" />
            <img src="../Amex.svg" alt="" />
            <img src="../Visa.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="border-t container py-6 text-center">
        <Text>© 2023 DevCut. All rights reserved.</Text>
      </div>
    </>
  );
}

export default Footer;
