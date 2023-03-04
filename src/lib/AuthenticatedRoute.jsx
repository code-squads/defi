import { useRouter } from "next/router";
import { useEffect } from "react";

export function generateAuthenticatedRoute(useMetamaskAuth, routerInfo){
  const AuthenticatedRoute = (props) => {
    const { isLoggedIn, isProcessingLogin, metaState: { isConnected } } = useMetamaskAuth();
    const router = useRouter();
  
    useEffect(() => {
      if(!isProcessingLogin){
        if(!isConnected){
          router.push(routerInfo.newComer);
          return;
        }
        if(!isLoggedIn){
          router.push(routerInfo.onBoarding);
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
  
  function withAuthenticatedRoute(WrappedComponent){
    const HOC = (props) => (
      <AuthenticatedRoute>
        <WrappedComponent {...props} />
      </AuthenticatedRoute>
    )
    return HOC;
  }

  return { AuthenticatedRoute, withAuthenticatedRoute };
}