import React from 'react';

export const MainLayout = ({content}) => (
        <div className='main-layout'>
            <body>

            <div className="ui large top fixed hidden menu">
                <div className="ui container">

                    <a className="item"><i className="ie flag"> </i></a>
                    <a className="active item" href="http://www.ronanlafford.me">Home</a>
                    <a className="item" href="http://www.blog.ronanlafford.me">Blog</a>
                    <a className="item" href="http://dubloons.azurewebsites.net">App1</a>
                    <a className="item" href="#">App2</a>
                    <div className="right menu">
                        <div className="item">
                            <a className="ui button">Log in</a>
                        </div>
                        <div className="item">
                            <a className="ui teal button">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="ui vertical inverted masthead center aligned segment">

                <div className="ui inverted container">
                    <h1 className="ui inverted header">

                    </h1>
                    <img src="LOGO.png" className="ui medium fluid centered image"/>

                    <div className="ui huge  basic blue button">Explore <i className="right arrow icon"></i>
                    </div>
                </div>

            </div>

            <h4 class="ui horizontal divider header">
                <i class="tag icon"></i>
                Description
            </h4>

                <div className="ui equal width center aligned padded grid">

                    <div className="purple column">
                        <div className="ui raised centered huge link cards">
                            <div className="card">
                                <div className="image">
                                    <a href="http://www.blog.ronanlafford.me" class="ui medium image">
                                        <img className="ui fluid image" src="blogpic.PNG"/>
                                    </a>
                                </div>
                                <div className="content">
                                    <div className="header">I've Caught The Bug!</div>
                                </div>
                                <div className="extra content">
                                    <span className="center floated">
                                         This is a blog of my learning.
                                    </span>
                                    <span>
                                     <img className="left circular floated mini ui image" src="profile.jpg"/>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="olive column">
                        <div className="ui centered huge link cards">
                            <div className="card">
                                <div className="image">
                                    <a href="http://www.dubloons.azurewebsites.net" class="ui medium image">
                                        <img className="ui fluid image" src="dubpic.PNG"/>
                                    </a>
                                </div>
                                <div className="content">
                                    <div className="header">Dubloons</div>
                                </div>
                                <div className="extra content">
                                    <span className="center floated">
                                         This is a website for coin collectors.
                                    </span>
                                    <span>
                                     <img className="left circular floated mini ui image" src="profile.jpg"/>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="ui inverted vertical footer segment form-page">
                        <div class="ui container">
                            Ronan Lafford 2016. All Rights Reserved
                        </div>
                    </div>


                </div>

            </body>

        </div>
    )
    ;

/* <main>
 {content}
 </main>*/