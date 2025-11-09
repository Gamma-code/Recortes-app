import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Report {
  id: string;
  name: string;
  location: string;
  time: string;
  description: string;
  image: string;
}

interface ReportsContextType {
  reports: Report[];
  addReport: (report: Omit<Report, "id" | "time">) => void;
}

const ReportsContext = createContext<ReportsContextType | undefined>(undefined);

export const ReportsProvider = ({ children }: { children: ReactNode }) => {
  const [reports, setReports] = useState<Report[]>([]);

  const addReport = (report: Omit<Report, "id" | "time">) => {
    const newReport: Report = {
      id: Date.now().toString(),
      time: new Date().toLocaleString(),
      ...report,
    };
    setReports((prev) => [newReport, ...prev]);
  };

  return (
    <ReportsContext.Provider value={{ reports, addReport }}>
      {children}
    </ReportsContext.Provider>
  );
};

export const useReports = () => {
  const context = useContext(ReportsContext);
  if (!context) throw new Error("useReports debe usarse dentro de ReportsProvider");
  return context;
};
