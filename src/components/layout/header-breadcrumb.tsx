import { Link } from "react-router-dom";
import { Text } from "@/components/ui/text";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type urls = {
  previous: { [key: string]: string };
  current: string;
  route?: string;
  className?: string;
};

function HeaderBreadCrumb({ previous, current, route, className }: urls) {
  const entries = Object.entries(previous);
  return (
    <div className={`bg-W100 py-10 ${className}`}>
      <div className="container flex flex-col justify-center ">
        <Text variant="heading-3">{route}</Text>
        <Breadcrumb>
          <BreadcrumbList>
            {entries.map(([key, value]) => (
              <BreadcrumbItem key={key}>
                <BreadcrumbLink asChild>
                  <Text variant="body-1" asChild>
                    <Link to={value}>{key}</Link>
                  </Text>
                </BreadcrumbLink>
              </BreadcrumbItem>
            ))}
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{current}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}

export default HeaderBreadCrumb;
