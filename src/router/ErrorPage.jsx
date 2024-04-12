import { Container, Typography } from "@mui/material";
import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Container>
      <Typography variant="h3">{error.statusText || error.message}</Typography>
    </Container>
  );
};

export default ErrorPage;
