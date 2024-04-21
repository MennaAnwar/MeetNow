import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      {children}
    </main>
  );
};

export default HomeLayout;
