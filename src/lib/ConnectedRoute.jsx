import { useRouter } from "next/router";
import { useEffect } from "react";

export function generateConnectedRoute(useMetamaskAuth, routerInfo){
  const ConnectedRoute = (props) => {
    const { isLoggedIn, isProcessingLogin, metaState: { isConnected } } = useMetamaskAuth();
    const router = useRouter();

    useEffect(() => {
      if(!isProcessingLogin){
        if(isLoggedIn){
          router.push(routerInfo.loggedIn);
          return;
        }
        if(!isConnected){
          router.push(routerInfo.newComer);
          return;
        }
      }
    }, [isLoggedIn, isConnected, isProcessingLogin, router])
    

    return (
      <>
        { props.children }
      </>
    )
  }

  function withConnectedRoute(WrappedComponent){
    const HOC = (props) => (
      <ConnectedRoute>
        <WrappedComponent {...props} />
      </ConnectedRoute>
    )
    return HOC;
  }

  return { ConnectedRoute, withConnectedRoute };
}