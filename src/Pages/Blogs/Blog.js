import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle("Blog")
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Difference between SQL and NoSQL</h1>
                        <p className="py-6"> <b>SQL:</b>  <br />
                            1.RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) <br />
                            2.These databases are not suited for hierarchical data storage. <br />
                            3.These databases are best suited for complex queries <br />
                            4. Vertically Scalable


                        </p>
                        <p className="py-6"> <b>NoSQL:</b>  <br />
                            1.Non-relational or distributed database system. <br />
                            2.These databases are best suited for hierarchical data storage. <br />
                            3.These databases are not so good for complex queries <br />
                            4. Horizontally scalable


                        </p>
                    </div>
                </div>
            </div >

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">What is JWT, and how does it work?</h1>
                        <p className="py-6">JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP)
                            <br />
                            JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>

                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">What is the difference between javascript and NodeJS?</h1>
                        <p className="py-6"> 1.JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use. <br />
                            2.JavaScript is normally used for any client-side activity for one web application. An activity can be addressing business validation or dynamic page display in some schedule time interval or basic Ajax call kind of task. Those are used for a maximum time for any web application. Whereas Node JS mainly used for accessing or running any operating system for non-blocking operation. An operation like creating or executing a shell script, or getting some specific hardware-related information on one call or installed certificate details in the system or a lot of define task is non-blocking on an operating system.</p>

                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">How does NodeJS handle multiple requests at the same time?</h1>
                        <p className="py-6"> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>

                    </div>
                </div>
            </div>
        </div>


    );
};

export default Blog;