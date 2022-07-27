import "./App.css";

import { Box } from "@chakra-ui/react";
import { useAuth } from "modules/auth/hooks";
import PrivateRoutes from "routes/PrivateRoutes";
import PublicRoutes from "routes/PublicRoutes";

function App(): JSX.Element {
  const { isAuth } = useAuth();

  return (
    <Box
      minHeight="100vh"
      minWidth="100vh"
      overflowX="hidden"
      display="relative"
    >
      {isAuth ? <PrivateRoutes /> : <PublicRoutes />}
    </Box>
  );
}

export default App;
