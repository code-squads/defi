import React, { useEffect } from "react";
import Head from "next/head";
import { useMetamaskAuth, withAuthenticatedRoute } from "../auth/authConfig";
import { CallerFn, SenderFn } from "../apis/factory";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { isLoggedIn, isProcessingLogin, profile, refreshAuthStatus } = useMetamaskAuth();

  useEffect(() => {
    if(!profile)  return;
    fetchPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  function deleteAccount(){
    localStorage.removeItem(profile.address);
    refreshAuthStatus();
  }

  return (
    <div className="p-4">
      <Head>
        <title>Dashboard</title>
      </Head>
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>

        {isProcessingLogin ? (
          <>Loading ....</>
        ) : (
          isLoggedIn &&
          profile && (
            <div>
              Logged in as {profile.name} <br />
              Role: {profile.role} <br/>
              @ {profile.address}

              <br/>
              <br/>
              <br/>
              <button className="bg-red-500 py-[8px] px-[24px] rounded-lg text-white" onClick={deleteAccount}>
                Delete my account
              </button>
              <br/>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default withAuthenticatedRoute(Dashboard);