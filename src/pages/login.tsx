import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {signIn , useSession} from 'next-auth/react';

const Login: NextPage = () =>{
    const {data} = useSession();
    return (
      <div>
        <div className="col-lg-11 col-md-11 col-sm-11 col-xs-11 mx-auto d-flex flex-row">
          <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 mx-auto">
            <div className="d-flex flex-column">
              <div className="col d-flex" style={{ marginTop: "50px" }}>
                <div className="logo">
                  <svg
                    width="31"
                    height="17"
                    viewBox="0 0 31 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.0132 16.4227C30.0877 15.8389 30.126 15.2442 30.126 14.6407C30.126 6.76508 23.5938 0.380615 15.5357 0.380615C7.47769 0.380615 0.945374 6.76508 0.945374 14.6407C0.945374 15.4152 1.00855 16.1753 1.13015 16.9163C1.80031 16.0197 2.84626 15.3796 3.97604 15.1849C5.19841 14.9742 6.30935 15.264 7.24866 15.8056C7.19317 15.4251 7.16445 15.0362 7.16445 14.6407C7.16445 10.1221 10.9124 6.45893 15.5357 6.45893C20.159 6.45893 23.907 10.1221 23.907 14.6407C23.907 14.9386 23.8906 15.2329 23.8589 15.5225C24.7784 14.949 25.8785 14.6213 27.1079 14.7902C28.2436 14.9463 29.3114 15.5499 30.0132 16.4227Z"
                      fill="#5429FF"
                    />
                  </svg>
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginLeft: "-22px", marginTop: "12px" }}
                  >
                    <path
                      d="M6.53572 11.8071C3.31252 11.8071 0.699585 9.19416 0.699585 5.97096C0.699585 2.74776 3.31252 0.134827 6.53572 0.134827C9.75892 0.134827 12.3719 2.74776 12.3719 5.97096C12.3719 9.19416 9.75892 11.8071 6.53572 11.8071Z"
                      fill="#AE9AFF"
                    />
                  </svg>
                </div>
                <div
                  style={{
                    marginLeft: "20px",
                    marginTop: "5px",
                    fontWeight: "500",
                    fontSize: "17",
                    lineHeight: "20px",
                  }}
                >
                  Weframe Global Chat Room
                </div>
              </div>
              <div
                className="col d-flex flex-column"
                style={{ marginTop: "121px" }}
              >
                <div
                  className="head"
                  style={{
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "42px",
                    lineHeight: "50px",
                    color: "#344054",
                  }}
                >
                  Welcome To Our Global Chat Room!
                </div>
                <div
                  style={{
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "17px",
                    lineHeight: "25px",
                    color: "#667085",
                    marginTop: "20px",
                  }}
                >
                  To join the conversation, simply sign up for an account. It's
                  quick and easy, and it's free!
                </div>
              </div>
              <div
                className="col d-flex flex-column"
                style={{ marginTop: "150px" }}
              >
                <div>
                  <button
                    className="d-flex flex-row text-align-center align-items-center justify-content-center"
                    style={{
                      width: "80%",
                      height: "60px",
                      borderRadius: "15px",
                      outline: "none",
                      border: "1px solid #D0D5DD",
                      backgroundColor: "transparent",
                      color: "#344054",
                      fontStyle: "normal",
                      fontSize: "16px",
                      lineHeight: "20px",
                      marginLeft: "25px",
                    }}
                    onClick={() => signIn("google")}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.501 12.2332C22.501 11.3699 22.4296 10.7399 22.2748 10.0865H12.2153V13.9832H18.12C18.001 14.9515 17.3582 16.4099 15.9296 17.3898L15.9096 17.5203L19.0902 19.935L19.3106 19.9565C21.3343 18.1249 22.501 15.4298 22.501 12.2332Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12.214 22.5001C15.1068 22.5001 17.5353 21.5667 19.3092 19.9567L15.9282 17.39C15.0235 18.0083 13.8092 18.44 12.214 18.44C9.38069 18.44 6.97596 16.6083 6.11874 14.0767L5.99309 14.0871L2.68583 16.5955L2.64258 16.7133C4.40446 20.1433 8.0235 22.5001 12.214 22.5001Z"
                        fill="#34A853"
                      />
                      <path
                        d="M6.12046 14.0767C5.89428 13.4234 5.76337 12.7233 5.76337 12C5.76337 11.2767 5.89428 10.5767 6.10856 9.92337L6.10257 9.78423L2.75386 7.2356L2.64429 7.28667C1.91814 8.71002 1.50146 10.3084 1.50146 12C1.50146 13.6917 1.91814 15.29 2.64429 16.7133L6.12046 14.0767Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12.2141 5.55997C14.2259 5.55997 15.583 6.41163 16.3569 7.12335L19.3807 4.23C17.5236 2.53834 15.1069 1.5 12.2141 1.5C8.02353 1.5 4.40447 3.85665 2.64258 7.28662L6.10686 9.92332C6.97598 7.39166 9.38073 5.55997 12.2141 5.55997Z"
                        fill="#EB4335"
                      />
                    </svg>
                    <div style={{ marginLeft: "20px" }}>
                      Sign In With Google
                    </div>
                  </button>
                </div>
                <div
                  style={{
                    fontStyle: "normal",
                    fontSize: "14px",
                    lineHeight: "24px",
                    marginTop: "20px",
                    marginLeft: "35px",
                  }}
                >
                  Don’t have an account?
                  <Link href="/signup" style={{ textDecoration: "none" }}>
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 d-lg-block d-md-block d-sm-none d-xs-none">
            <div
              className="card"
              style={{
                borderRadius: "42px",
                width: "800px",
                marginLeft: "30px",
                marginTop: "30px",
                backgroundColor: "#CBCCE8",
                border: "none",
              }}
            >
              <Image
                src={require("../components/images/login.png")}
                alt="login"
                width="700"
                height="700"
                style={{ marginLeft: "55px" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login;