// ** MUI Imports
import { Theme } from "@mui/material/styles";

// ** Util Import

const Alert = (theme: Theme) => {
  // const getColor = theme.palette.mode === 'light' ? darken : lighten;

  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          "& .MuiAlertTitle-root": {
            marginBottom: theme.spacing(1.6),
          },
          "& a": {
            color: "inherit",
            fontWeight: 500,
          },
        },
        standardSuccess: {
          color: theme.palette.success.main,
          backgroundColor: theme.palette.success.main,
          "& .MuiAlertTitle-root": {
            color: theme.palette.success.main,
          },
          "& .MuiAlert-icon": {
            color: theme.palette.success.main,
          },
        },
        standardInfo: {
          color: theme.palette.info.main,
          backgroundColor: theme.palette.info.main,
          "& .MuiAlertTitle-root": {
            color: theme.palette.info.main,
          },
          "& .MuiAlert-icon": {
            color: theme.palette.info.main,
          },
        },
        standardWarning: {
          color: theme.palette.warning.main,
          backgroundColor: theme.palette.warning.main,
          "& .MuiAlertTitle-root": {
            color: theme.palette.warning.main,
          },
          "& .MuiAlert-icon": {
            color: theme.palette.warning.main,
          },
        },
        standardError: {
          color: theme.palette.error.main,
          backgroundColor: theme.palette.error.main,
          "& .MuiAlertTitle-root": {
            color: theme.palette.error.main,
          },
          "& .MuiAlert-icon": {
            color: theme.palette.error.main,
          },
        },
        outlinedSuccess: {
          borderColor: theme.palette.success.main,
          color: theme.palette.success.main,
          "& .MuiAlertTitle-root": {
            color: theme.palette.success.main,
          },
          "& .MuiAlert-icon": {
            color: theme.palette.success.main,
          },
        },
        outlinedInfo: {
          borderColor: theme.palette.info.main,
          color: theme.palette.info.main,
          "& .MuiAlertTitle-root": {
            color: theme.palette.info.main,
          },
          "& .MuiAlert-icon": {
            color: theme.palette.info.main,
          },
        },
        outlinedWarning: {
          borderColor: theme.palette.warning.main,
          color: theme.palette.warning.main,
          "& .MuiAlertTitle-root": {
            color: theme.palette.warning.main,
          },
          "& .MuiAlert-icon": {
            color: theme.palette.warning.main,
          },
        },
        outlinedError: {
          borderColor: theme.palette.error.main,
          color: theme.palette.error.main,
          "& .MuiAlertTitle-root": {
            color: theme.palette.error.main,
          },
          "& .MuiAlert-icon": {
            color: theme.palette.error.main,
          },
        },
        filled: {
          fontWeight: 400,
        },
      },
    },
  };
};

export default Alert;
