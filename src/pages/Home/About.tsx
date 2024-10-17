import { Text } from "@/components/ui/text";

function About() {
  return (
    <div className="container flex flex-wrap justify-between gap-x-12 gap-y-12 mb-24 [&>*]:flex-1 [&>*]:min-w-[240px] md:[&>*]:max-w-[300px] ">
      <div className="flex flex-col gap-2">
        <img src="../shipping.svg" alt="" className="h-12 w-fit" />
        <Text variant="heading-5">Free Shipping</Text>
        <Text variant="body-1">
          Upgrade your style today and get FREE shipping on all orders! Don't
          miss out.
        </Text>
      </div>
      <div className="flex flex-col gap-2">
        <img src="../Guarantee.svg" alt="" className="h-12 w-fit" />
        <Text variant="heading-5">Satisfaction Guarantee</Text>
        <Text variant="body-1">
          Shop confidently with our Satisfaction Guarantee: Love it or get a
          refund.
        </Text>
      </div>
      <div className="flex flex-col gap-2">
        <img src="../secure.svg" alt="" className="h-12 w-fit" />
        <Text variant="heading-5">Secure Payment</Text>
        <Text variant="body-1">
          Your security is our priority. Your payments are secure with us.
        </Text>
      </div>
    </div>
  );
}

export default About;
