# NextAuth getServerSideProps Issue

This repository demonstrates a common issue encountered when using NextAuth.js with `getServerSideProps` to protect routes. The problem involves incorrect session handling, potentially leading to redirect loops or unexpected page behavior.

## Problem

The initial `bug.js` file contains a flawed implementation where `getServerSideProps` is defined twice. This double definition leads to unpredictable behavior. Additionally, the session check might not be correctly handling authentication states, causing incorrect redirects.

## Solution

The `bugSolution.js` file demonstrates the corrected version.  It removes the duplicate definition of `getServerSideProps` and ensures that session handling is correctly implemented.  Only one instance of getServerSideProps is defined which is efficient and handles redirects effectively. 

## Setup

1. Clone the repository.
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`