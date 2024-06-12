const TailwindIndicator = () => {
  const isDevelopment = process.env.NODE_ENV === "development";
  if (isDevelopment) {
    return (
      <div className="fixed bottom-24 md:bottom-4 right-4 z-50 bg-neutral-600/50 px-4 py-2">
        <div className="block sm:hidden">&lt; sm</div>
        <div className="hidden sm:block md:hidden">sm</div>
        <div className="hidden md:block lg:hidden">md</div>
        <div className="hidden lg:block xl:hidden">lg</div>
        <div className="hidden xl:block 2xl:hidden">xl</div>
        <div className="hidden 2xl:block">2xl</div>
      </div>
    );
  }

  return null;
};

export { TailwindIndicator };
