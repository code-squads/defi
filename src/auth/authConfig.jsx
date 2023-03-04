import * as Routes from "../constants/routes";
import { createMetamaskAuth } from "../lib/useMetamaskAuth";

// export interface ProfileData {
//   walletAddress: string;
//   name: string;
// }

const routingConfig = {
  onBoarding: Routes.ONBOARDING_ROUTE, 
  loggedIn: Routes.JUST_LOGGED_IN,
  newComer: Routes.NEW_COMER,
}

const {
  AuthenticatedRoute, withAuthenticatedRoute,
  ConnectedRoute, withConnectedRoute,
  MetamaskAuthProvider, useMetamaskAuth
} = createMetamaskAuth(routingConfig);

console.log({
  AuthenticatedRoute, withAuthenticatedRoute,
  ConnectedRoute, withConnectedRoute,
  MetamaskAuthProvider, useMetamaskAuth
});

export {
  AuthenticatedRoute, withAuthenticatedRoute,
  ConnectedRoute, withConnectedRoute,
  MetamaskAuthProvider, useMetamaskAuth
}