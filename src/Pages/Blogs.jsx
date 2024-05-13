import { Helmet } from "react-helmet-async";

const Blogs = () => {
  return (
    <div className="card max-w-[1000px] mx-auto py-12 shadow-xl text-black">
      <Helmet>
        <title>Blogs || Work Wave</title>
      </Helmet>
      <div className="card-body bg-slate-50 rounded-3xl mb-8 text-wrap">
        <h2 className="card-title">
          What is an access token and refresh token? How do they work and where
          should we store them on the client side?
        </h2>
        <p>
          Access tokens and refresh tokens are commonly used in authentication
          mechanisms, particularly in OAuth 2.0 protocols, to provide secure
          access to resources.
        </p>
        <p>
          <span className="font-semibold text-base">1 Access Token:</span> An
          access token is a credential used by a client to access protected
          resources on behalf of a user. It carries the necessary information to
          access a resource directly. Access tokens are short-lived and
          typically expire after a set period, usually ranging from minutes to
          hours. They are designed this way for security reasons, to limit the
          exposure if the token is compromised.
        </p>
        <p>
          <span className="font-semibold text-base">2 Refresh Token:</span> A
          refresh token is a credential used to obtain a new access token after
          the current one expires. Refresh tokens are long-lived compared to
          access tokens and are used to obtain a new access token without
          requiring the user to re-authenticate. They are often kept securely by
          the client and are used to obtain new access tokens whenever needed.
        </p>
        <p className="font-semibold text-base">
          Here's how they typically work together:
        </p>
        <p>
          1: The client authenticates with the authorization server and receives
          both an access token and a refresh token.
        </p>
        <p>
          2: The client uses the access token to access protected resources on
          the resource server.
        </p>
        <p>
          3: When the access token expires, the client can use the refresh token
          to obtain a new access token without requiring the user to log in
          again.
        </p>
        <p>
          4: The client repeats this process as long as the refresh token
          remains valid.
        </p>
      </div>
      <div className="card-body bg-slate-50 rounded-3xl mb-8">
        <h2 className="card-title">What is express js? What is Nest JS?</h2>
        <p>
          <span className="font-semibold text-base">Express.js: </span>
          Express.js is a minimalist web application framework for Node.js,
          designed to build web applications and APIs. It provides a simple and
          flexible set of features for web and mobile applications. Express.js
          is unopinionated, meaning it gives developers a lot of freedom and
          flexibility in how they structure their applications. It's lightweight
          and can be easily extended with additional middleware to add
          functionality like routing, request handling, and response generation.
        </p>
        <p>
          <span className="font-semibold text-base">NextJS: </span>NestJS, on
          the other hand, is a progressive Node.js framework for building
          efficient, reliable, and scalable server-side applications. It uses
          TypeScript, a superset of JavaScript, to bring static types to
          JavaScript, which enhances code maintainability and developer
          productivity. NestJS is built on top of Express.js and heavily
          inspired by Angular, providing a modular and well-structured approach
          to building server-side applications. It supports features like
          dependency injection, middleware, routing, and more out of the box.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
