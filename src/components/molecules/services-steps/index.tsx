import React from "react";

enum IconVariant {
  vertical = "vertical",
  horizontal = "horizontal",
}

interface ServicesStepsProps {
  variant: keyof typeof IconVariant;
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export const ServicesSteps = ({ variant, icon, title, description }: ServicesStepsProps) => {
  // Horizontal layout
  const HorizontalLayout = () => (
    <div className="text-center">
      <div className="bg-purple-200 inline-block p-4 rounded-full">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold text-md">{title}</h3>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );

  // Vertical layout
  const VerticalLayout = () => (
    <div className="flex gap-x-4">
      <div className="bg-purple-200 p-4 rounded-full flex-shrink-0 w-fit h-fit">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </div>
  );

  // Render the appropriate layout based on the variant prop
  return (
    <>
      {variant === "horizontal" ? <HorizontalLayout /> : <VerticalLayout />}
    </>
  );
};
