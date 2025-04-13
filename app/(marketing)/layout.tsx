
export default function MarketingLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="w-full mx-auto max-w-5xl py-10">{children}</div>
    );
  }
  