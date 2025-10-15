import { cn } from "@/lib/utils";
import { Text } from "@ecommerce/ui/components/text";

interface DashboardCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface DashboardCardHeaderProps {
  title?: string;
  subtitle?: string;
  right?: string;
}

interface DashboardCardSectionProps {
  children: React.ReactNode;
}

// Main wrapper
export const DashboardCard: React.FC<DashboardCardProps> & {
  Header: React.FC<DashboardCardHeaderProps>;
  Content: React.FC<DashboardCardSectionProps>;
  Footer: React.FC<DashboardCardSectionProps>;
} = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "flex flex-col rounded-md border bg-white p-5 transition",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Header
const Header: React.FC<DashboardCardHeaderProps> = ({
  title,
  subtitle,
  right,
}) => (
  <div className="flex justify-between items-center mb-4">
    <div className="flex flex-col gap-1.5">
      {title && (
        <Text variant="heading-5" className="">
          {title}
        </Text>
      )}
      {subtitle && (
        <Text variant="label-2" className="text-gray-500">
          {subtitle}
        </Text>
      )}
    </div>
    {right && (
      <Text variant="heading-3" className="">
        {right}
      </Text>
    )}
  </div>
);

// Content
const Content: React.FC<DashboardCardSectionProps> = ({ children }) => (
  <div className="flex-1 border-t pt-4">{children}</div>
);

// Footer
const Footer: React.FC<DashboardCardSectionProps> = ({ children }) => (
  <div className="mt-4">{children}</div>
);

DashboardCard.Header = Header;
DashboardCard.Content = Content;
DashboardCard.Footer = Footer;

export default DashboardCard;
