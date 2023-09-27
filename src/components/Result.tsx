type Props = {
  children: React.ReactNode;
  variant: string;
};

export function Result({ children, variant }: Props) {
  return (
    <div className="banner-wrapper">
      <div className={`banner ${variant}`}>{children}</div>
    </div>
  );
}
