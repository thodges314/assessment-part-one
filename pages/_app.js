import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import styled from 'styled-components'
import {Header} from 'components'

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props
    return (
      <StyledApp>
        <Head>
          <title>Hilton Assessment Part 1</title>
        </Head>
        <style jsx global>{`
          body { 
            background-image: url('static/images/background.png');
            background-size: cover;
            background-repeat: repeat-y;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 800;
          }
        `}</style>
        <div>
          <div id='nav-bar'>
            <Header />
          </div>
          <div id='main-content'>
            <Component {...pageProps} />
          </div>
        </div>
      </StyledApp>
    )
  }
}

const StyledApp = styled.div`
height: 100%;
  #wrapper-div {
    left: 0;
    top: 0;
    width: 100%;
    height: stretch;
    min-height: 100%;
    margin: 0;
  }
  #nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  #main-content {
    margin-top: 50px;
    width: 100%;
  }
`

export default MyApp