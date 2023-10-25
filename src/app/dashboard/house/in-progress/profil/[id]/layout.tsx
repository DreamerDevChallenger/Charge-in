export interface PropProfil {
  profilData:
    | {
        id: number;
        first_name: string;
        last_name: string;
        charging: number;
        step: number;
      }
    | undefined;
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  return <>{children}</>;
}
