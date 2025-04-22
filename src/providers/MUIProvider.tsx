"use client";
import { SettingsConsumer, SettingsProvider } from "@/context/settingsContext";
import ThemeComponent from "@/theme/ThemeComponent";
import React from "react";

const MUIProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SettingsProvider>
      <SettingsConsumer>
        {({ settings }) => (
          <ThemeComponent settings={settings}>{children}</ThemeComponent>
        )}
      </SettingsConsumer>
    </SettingsProvider>
  );
};

export default MUIProvider;
